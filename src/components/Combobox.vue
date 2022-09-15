<template>
    <div :class="['ui-combobox', { error: isError }]">
        <cEdit
            v-model.trim="initialText"
            :required="required"
            :disabled="disabled"
            :readonly="!filter"
            :placeholder="placeholder"
            :class="{ pointer: !filter }"
            :id="id"
            :autocomplete="isNoAutocomplete ? 'new-password' : 'off'"
            :is-error="isError"
            :is-hide-status="isHideStatus"
            ref="combobox"
            @keydown="keyDown"
            @focus="focus"
            @blur="blur"
            @input="input"
            @mousedown.left="mouseDown"
        >
            <template
                v-if="isError"
                slot="status-text"
            >
                <slot name="status-text" />
            </template>
        </cEdit>
        <div
            v-if="clearable && (initialValue !== null || initialText.length > 0)"
            class="icon-clear"
            data-tooltip="Очистить"
            @click="setValue()"
            @mousedown="childrenMouseDown"
        />
        <div
            v-else
            :class="['icon-select', { opened: isOpenned && filteredItems.length > 0 }]"
        />
        <ul
            v-if="isOpenned && filteredItems.length > 0"
            class="menu"
            ref="menu"
            @mousedown="childrenMouseDown"
        >
            <li
                v-for="(item, index) of filteredItems"
                v-html="mdParse(item.name)"
                :class="[{ active: index === selectedItemIndex }, size]"
                :key="index"
                @mousemove="mousemove(index)"
                @click="setValue(index)"
            />
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import { ComboboxItem } from "@/../types/combobox"
import { Marked } from "@ts-stack/markdown"
import { Prop } from "vue/types/options"
import cEdit from "@/components/Edit.vue"

export default Vue.extend({
    name: "cCombobox",
    components: { cEdit },
    model: {
        prop: "value",
        event: "update:value",
    },
    props: {
        items: {
            type: Array as Prop<ComboboxItem[]>,
            default: (): ComboboxItem[] => [],
        },
        value: {
            type: Number,
            default: null,
        },
        required: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        placeholder: {
            type: String,
            default: "Выбрать",
        },
        filter: {
            type: Boolean,
            default: true,
        },
        id: {
            type: String,
            default: null,
        },
        clearable: {
            type: Boolean,
            default: false,
        },
        size: {
            type: String,
            default: "m",
            validator: (v: string) => ["s", "m", "l"].includes(v),
        },
        limit: {
            type: Number,
            default: null,
        },
        isPrefixSearch: {
            type: Boolean,
            default: false,
        },
        isSearchedAnyMatch: {
            type: Boolean,
            default: false,
        },
        isError: {
            type: Boolean,
            default: false,
        },
        isHideStatus: {
            type: Boolean,
            default: false,
        },
        isNoAutocomplete: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            initialValue: this.value as number | null,
            initialText: "",
            isOpenned: false,
            isChildrenActive: false,
            selectedItemIndex: null as number | null,
            isSelectedByMouse: false,
        }
    },
    computed: {
        listeners(): Record<string, Function | Function[]> {
            return {
                ...this.$listeners,
                input: this.input,
                focus: this.focus,
                blur: this.blur,
                keydown: this.keyDown,
            }
        },
        filteredItems(): ComboboxItem[] {
            const limit = (this.limit === null || isNaN(this.limit) || this.limit < 1) ? undefined : this.limit
            const initialText = this.initialText.toLocaleLowerCase()

            if (!this.filter || initialText === "") {
                return this.items.slice(0, limit)
            }

            if (!limit) {
                return this.items.filter((item: ComboboxItem) => {
                    if (this.isPrefixSearch) {
                        const result = item.name.replace(/<b>|<\/b>|<div class="locality">|<\/div>/g, "").toLocaleLowerCase()

                        return this.isSearchedAnyMatch ? result.includes(initialText) : result.indexOf(initialText) === 0
                    } else {
                        const result = item.name.toLocaleLowerCase()

                        return this.isSearchedAnyMatch ? result.includes(initialText) : result.indexOf(initialText) !== -1
                    }
                })
            }

            const result: ComboboxItem[] = []

            for (const item of this.items) {
                if (
                    this.isPrefixSearch
                        ? item.name
                            .replace(/<b>|<\/b>|<div class="locality">|<\/div>/g, "")
                            .toLocaleLowerCase()
                            .indexOf(initialText) === 0
                        : item.name.toLocaleLowerCase().indexOf(initialText) !== -1
                ) {
                    result.push(item)
                }

                if (result.length >= this.limit) {
                    return result
                }
            }

            return result
        },
    },
    watch: {
        value(newValue: number) {
            if (this.initialValue === newValue) {
                return
            }

            this.initialText = ""
            for (let i = 0; i < this.items.length; i++) {
                if (this.items[i].value === newValue) {
                    this.setValue(i, true, false, true)
                    return
                }
            }

            this.setValue(null, true, false)
        },
        items() {
            if (this.initialValue === null && this.value !== null) {
                for (let i = 0; i < this.items.length; i++) {
                    if (this.items[i].value === this.value) {
                        this.setValue(i, true, false, true)

                        return
                    }
                }
            }

            this.setValue(null, true, false)
        },
        selectedItemIndex(newValue: number) {
            if (!this.isOpenned || this.isSelectedByMouse || newValue === null) {
                return
            }

            const menu: HTMLUListElement = this.$refs.menu as HTMLUListElement
            const selected: HTMLLIElement | null = (menu.children[newValue] || null) as HTMLLIElement | null

            if (selected === null) {
                return
            }

            if (selected.offsetTop + selected.clientHeight > menu.scrollTop + menu.clientHeight) {
                menu.scroll(menu.clientLeft, selected.offsetTop - menu.clientHeight + selected.clientHeight)
            }

            if (selected.offsetTop < menu.scrollTop) {
                menu.scroll(menu.clientLeft, selected.offsetTop)
            }
        },
    },
    created() {
        if (this.value < 1 || this.filteredItems.length < 1) {
            return
        }

        for (let i = 0; i < this.filteredItems.length; i++) {
            if (this.items[i].value === this.value) {
                this.setValue(i, true, false, true)
            }
        }
    },
    mounted() {
        window.addEventListener("blur", this.windowBlur)
    },
    beforeDestroy() {
        window.removeEventListener("blur", this.windowBlur)
    },
    methods: {
        mdParse: (e: string) => Marked.parse(e),
        windowBlur() {
            if ((process as any).browser && document.activeElement instanceof HTMLInputElement) {
                document.activeElement.blur()
                this.isOpenned = false
            }
        },
        setValue(itemIndex: number | null = null, setText = true, emit = true, ignoreFilter = false) {
            const items = ignoreFilter ? this.items : this.filteredItems

            this.initialValue = itemIndex !== null && items && items[itemIndex] ? items[itemIndex].value : null

            if (this.initialValue !== null) {
                this.isOpenned = false
            }

            if (setText) {
                this.initialText =
                    this.initialValue !== null
                        ? items[itemIndex as number].name.replace(/<b>|<\/b>|<div class="locality">|<\/div>/g, "")
                        : ""
            }

            if (this.isOpenned && setText) {
                this.selectedItemIndex = null
            }

            if (emit) {
                this.$emit("update:value", this.initialValue)
            }

            if (itemIndex !== null && (process as any).browser && document.activeElement instanceof HTMLInputElement) {
                document.activeElement.blur()
            }
        },
        input(e: Event) {
            this.$emit("input", e)

            if (this.initialValue !== null) {
                this.setValue(null, false)
            }

            this.isOpenned = true
        },
        focus(e: FocusEvent) {
            this.$emit("focus", e)

            if (this.filteredItems.length < 1 || this.isOpenned) {
                return
            }

            if (!this.isOpenned) {
                this.selectedItemIndex = null
            }

            this.isOpenned = true
        },
        blur(e: FocusEvent) {
            if (this.isChildrenActive) {
                this.isChildrenActive = false
                ;(e.target as HTMLElement).focus()

                return
            }

            this.$emit("blur", e)

            if (!this.isOpenned) {
                return
            }

            this.isOpenned = this.$el.contains(e.relatedTarget as Node)
        },
        keyDown(e: KeyboardEvent) {
            this.$emit("keydown", e)

            if (e.code === "ArrowUp") {
                if (this.filteredItems.length < 1 || !this.isOpenned) {
                    e.preventDefault()
                    e.stopPropagation()

                    return
                }

                if (this.isOpenned && this.selectedItemIndex === null) {
                    this.isOpenned = false
                    e.preventDefault()
                    e.stopPropagation()

                    return
                }

                this.isSelectedByMouse = false
                this.selectedItemIndex =
                    this.selectedItemIndex !== 0
                        ? (this.selectedItemIndex as number) > 0
                            ? (this.selectedItemIndex as number) - 1
                            : 0
                        : null
                e.preventDefault()
                e.stopPropagation()
            }

            if (e.code === "ArrowDown") {
                if (this.filteredItems.length < 1) {
                    e.preventDefault()
                    e.stopPropagation()

                    return
                }

                if (!this.isOpenned) {
                    this.isOpenned = true
                } else {
                    this.isSelectedByMouse = false
                    this.selectedItemIndex =
                        this.selectedItemIndex !== null
                            ? this.selectedItemIndex < this.filteredItems.length - 1
                                ? this.selectedItemIndex + 1
                                : this.selectedItemIndex
                            : 0
                }
                e.preventDefault()
                e.stopPropagation()
            }

            if (e.code === "Home" && e.ctrlKey && e.altKey) {
                if (this.filteredItems.length < 1 || !this.isOpenned) {
                    e.preventDefault()
                    e.stopPropagation()

                    return
                }

                this.isSelectedByMouse = false
                this.selectedItemIndex = 0
                e.preventDefault()
                e.stopPropagation()

                return
            }

            if (e.code === "End" && e.ctrlKey && e.altKey) {
                if (this.filteredItems.length < 1 || !this.isOpenned) {
                    e.preventDefault()
                    e.stopPropagation()

                    return
                }

                this.isSelectedByMouse = false
                this.selectedItemIndex = this.filteredItems.length - 1
                e.preventDefault()
                e.stopPropagation()

                return
            }

            if (e.code === "PageUp" && e.ctrlKey && e.altKey) {
                if (this.filteredItems.length < 1 || !this.isOpenned) {
                    e.preventDefault()
                    e.stopPropagation()

                    return
                }

                this.isSelectedByMouse = false
                this.selectedItemIndex = this.selectedItemIndex !== null && this.selectedItemIndex >= 10 ? this.selectedItemIndex - 10 : 0
                e.preventDefault()
                e.stopPropagation()

                return
            }

            if (e.code === "PageDown" && e.ctrlKey && e.altKey) {
                if (this.filteredItems.length < 1 || !this.isOpenned) {
                    e.preventDefault()
                    e.stopPropagation()

                    return
                }

                this.isSelectedByMouse = false
                this.selectedItemIndex =
                    this.selectedItemIndex !== null && this.selectedItemIndex < this.filteredItems.length - 10
                        ? this.selectedItemIndex + 10
                        : this.filteredItems.length - 1
                e.preventDefault()
                e.stopPropagation()

                return
            }

            if (e.code === "Escape" && this.isOpenned) {
                this.isOpenned = false
                e.preventDefault()
                e.stopPropagation()

                return
            }

            if (e.code === "Enter" && this.isOpenned) {
                if (this.filteredItems.length === 1) {
                    this.selectedItemIndex = 0
                }

                if (this.selectedItemIndex !== null) {
                    this.setValue(this.selectedItemIndex)
                }

                e.preventDefault()
                e.stopPropagation()

                return
            }
        },
        childrenMouseDown() {
            this.isChildrenActive = true
        },
        mouseDown() {
            if (this.filter) {
                return
            }

            this.isOpenned = !this.isOpenned
        },
        mousemove(index: number) {
            if (this.selectedItemIndex === index) {
                return
            }

            this.isSelectedByMouse = true
            this.selectedItemIndex = index
        },
    },
})
</script>

<style lang="scss">
@import "../styles/colors";

.ui-combobox {
    position: relative;
    width: fit-content;

    & > .icon-select {
        width: 20px;
        height: 40px;
        position: absolute;
        pointer-events: none;
        top: 0;
        right: 6px;
        background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjOTY5Njk2IiBkPSJNMjU2IDI5NC4xTDM4MyAxNjdjOS40LTkuNCAyNC42LTkuNCAzMy45IDBzOS4zIDI0LjYgMCAzNEwyNzMgMzQ1Yy05LjEgOS4xLTIzLjcgOS4zLTMzLjEuN0w5NSAyMDEuMWMtNC43LTQuNy03LTEwLjktNy0xN3MyLjMtMTIuMyA3LTE3YzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEyNy4xIDEyN3oiLz48L3N2Zz4=")
            center no-repeat;
        opacity: 0.6;
        transform: rotate(0deg);
        transition: 0.2s;
    }

    & > .icon-select.opened {
        opacity: 1;
        transform: rotate(180deg);
        transition: 0.2s;
    }

    & > .icon-clear {
        width: 20px;
        height: 100%;
        position: absolute;
        top: -1px;
        right: 6px;
        cursor: pointer;
        opacity: 0.6;
        background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjOTY5Njk2IiBkPSJNMjU2IDI5NC4xTDM4MyAxNjdjOS40LTkuNCAyNC42LTkuNCAzMy45IDBzOS4zIDI0LjYgMCAzNEwyNzMgMzQ1Yy05LjEgOS4xLTIzLjcgOS4zLTMzLjEuN0w5NSAyMDEuMWMtNC43LTQuNy03LTEwLjktNy0xN3MyLjMtMTIuMyA3LTE3YzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEyNy4xIDEyN3oiLz48L3N2Zz4=")
            center no-repeat;
        transition: 0.2s;
    }

    &:hover {
        & > .icon-clear {
            background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjOTY5Njk2IiBkPSJNMjU2IDQ4QzE0MC41NTkgNDggNDggMTQwLjU1OSA0OCAyNTZjMCAxMTUuNDM2IDkyLjU1OSAyMDggMjA4IDIwOCAxMTUuNDM1IDAgMjA4LTkyLjU2NCAyMDgtMjA4IDAtMTE1LjQ0MS05Mi41NjQtMjA4LTIwOC0yMDh6bTEwNC4wMDIgMjgyLjg4MWwtMjkuMTIgMjkuMTE3TDI1NiAyODUuMTE3bC03NC44ODEgNzQuODgxLTI5LjEyMS0yOS4xMTdMMjI2Ljg4MSAyNTZsLTc0Ljg4My03NC44ODEgMjkuMTIxLTI5LjExNkwyNTYgMjI2Ljg4MWw3NC44ODEtNzQuODc4IDI5LjEyIDI5LjExNkwyODUuMTE5IDI1Nmw3NC44ODMgNzQuODgxeiIvPjwvc3ZnPg==")
                center no-repeat;

            &:hover {
                opacity: 1;
                transition: 0.2s;
            }
        }
    }

    & > .c-edit {
        width: 100%;
        padding-right: 26px;

        & input {
            width: 100%;
            background-color: $gray-000;
            border: 1px solid $gray-400;
        }
    }

    & > .menu {
        position: absolute;
        padding: 0;
        margin: 0;
        width: 100%;
        top: calc(100% + 5px);
        max-height: 300px;
        overflow: auto;
        z-index: 2;
        background-color: $gray-000;
        box-sizing: border-box;
        border-radius: 4px;
        box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
        color: #1e1e1e;

        &::-webkit-scrollbar {
            width: 8px;
        }

        &::-webkit-scrollbar-track {
            background-color: $gray-000;
            border-radius: 0 5px 5px 0;
        }

        &::-webkit-scrollbar-thumb {
            height: 20px;
            border-radius: 5px;
            background-color: $gray-350;
        }

        & > li {
            cursor: pointer;
            list-style: none;

            & > p {
                padding: 0;
                margin: 0;
            }

            &.active {
                background-color: $gray-200;
                transition: 0.2s;
            }

            &.s {
                padding: 5px 12px;
                font-size: 12px;
            }

            &.m {
                padding: 7px 16px;
                font-size: 14px;
            }

            &.l {
                padding: 10px 12px;
                font-size: 16px;
            }
        }
    }
}
</style>
