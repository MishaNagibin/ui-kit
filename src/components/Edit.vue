<template>
    <label
        v-if="isMultiline"
        class="ui-edit textarea"
    >
        <div>
            <span
                v-if="placeholder || required"
                :class="['placeholder', { hide: isFocus || value.length > 0 }]"
                :style="{ '--placeholderColor': placeholderColor }"
            >
                {{ placeholder }}
                <span
                    v-if="required && !isHideRequired"
                    data-tooltip="Обязательно к заполнению"
                >*</span>
            </span>
            <textarea
                v-if="isLazy"
                v-model="text"
                v-on="listeners"
                v-bind="multilineBinds"
            />
            <textarea
                v-else-if="isMultiline"
                v-on="listeners"
                v-bind="multilineBinds"
            />
            <span
                v-if="isShowIcon"
                :class="['icon', 'input-icon', { 'input-error': isError, 'input-warning': isWarning, 'input-valid': isValid }]"
            />
            <span
                v-if="isClear && !readonly && !disabled"
                :class="['icon', 'input-icon', { close: value.length > 0 }]"
                :style="{ right: isError || isWarning || isValid ? '32px' : enableEmoji ? '6px' : '10px', '--clearIconColor': clearIconColor, '--clearIconHoverColor': clearIconHoverColor }"
                data-tooltip="Очистить"
                @click="clear"
            />
            <cEmoji
                v-if="enableEmoji && !readonly && !disabled"
                :style="{ right: isClear && value.length > 0 ? '32px' : '10px', '--emojiIconColor': emojiIconColor, '--emojiIconHoverColor': emojiIconHoverColor }"
                @click="e => e.preventDefault()"
                @select="selectEmoji"
            />
        </div>
        <div
            v-if="!isHideStatus"
            :class="['status-text', { show: hasStatusText, error: isError, warning: isWarning }]"
        >
            <slot name="status-text" />
        </div>
    </label>
    <label
        v-else-if="isConfirmationCode"
        class="ui-edit code"
        ref="ui-edit"
    >
        <div>
            <input
                v-for="i in codeLength"
                v-model="code[i]"
                v-on="listeners"
                v-bind="singlelineBinds"
                :key="i"
                :data-id="i"
                maxlength="1"
                pattern="\d*"
                inputmode="numeric"
            />
        </div>
        <div
            v-if="!isHideStatus"
            :class="['status-text', { show: hasStatusText, error: isError, warning: isWarning }]"
        >
            <slot name="status-text" />
        </div>
    </label>
    <label
        v-else
        class="ui-edit"
    >
        <div :class="{ 'has-left-icon': iconName }">
            <span
                v-if="iconName"
                :class="['icon', iconName]"
                :style="{ left: '10px', backgroundColor: iconColor }"
            />
            <span
                v-if="placeholder || required"
                :class="['placeholder', { hide: isFocus || value.length > 0, phone: isPhone, 'search-left': isSearchLeft }]"
                :style="{ '--placeholderColor': placeholderColor }"
            >
                {{ placeholder }}
                <span
                    v-if="required && !isHideRequired"
                    data-tooltip="Обязательно к заполнению"
                >*</span>
            </span>
            <input
                v-if="isLazy"
                v-model.lazy="text"
                v-on="listeners"
                v-bind="singlelineBinds"
            />
            <input
                v-else-if="isPhone"
                v-model="formattedPhone"
                v-on="listeners"
                v-bind="singlelineBinds"
            />
            <input
                v-else-if="mask !== undefined"
                v-model="formattedMask"
                v-on="listeners"
                v-bind="singlelineBinds"
            />
            <input
                v-else
                v-on="listeners"
                v-bind="singlelineBinds"
            />
            <span
                v-if="isPhone"
                :class="['code-country', { show: isFocus || formattedPhone.length > 0, error: isError, warning: isWarning, disabled }]"
            >+7</span>
            <span
                v-if="isShowIcon"
                :class="['icon', 'input-icon', { 'input-error': isError, 'input-warning': isWarning, 'input-valid': isValid }]"
            />
            <span
                v-if="isClear && !readonly && !disabled"
                :class="['icon', 'input-icon', { close: value.length > 0 }]"
                :style="{ right: isError && isShowIcon || isWarning && isShowIcon || isValid && isShowIcon ? '32px' : (enableEmoji && !isPhone) ? '6px' : '10px', '--clearIconColor': clearIconColor, '--clearIconHoverColor': clearIconHoverColor }"
                data-tooltip="Очистить"
                @click="clear"
            />
            <span
                v-if="isPassword"
                :class="['icon', { 'eye-closed': !isShowPassword, 'eye-open': isShowPassword, show: value.length > 0 }]"
                :style="{ right: isClear && (isError || isWarning || isValid || (enableEmoji && !isPhone)) ? '60px' : isError || isWarning || isValid || isClear ? '40px' : '10px' }"
                :data-tooltip="iconTitle"
                @click.prevent="showPassword"
            />
            <span
                v-if="isSearch"
                :class="['icon', 'input-icon', { hide: value.length > 0 || isSearchLeft && isFocus, left: isSearchLeft, 'search-small': !isSearchIconBold, 'search-bold': isSearchIconBold }]"
            />
            <cEmoji
                v-if="enableEmoji && !readonly && !disabled && !isPhone"
                :style="{ right: isClear && value.length > 0 ? '32px' : '10px', '--emojiIconColor': emojiIconColor, '--emojiIconHoverColor': emojiIconHoverColor }"
                @click="e => e.preventDefault()"
                @select="selectEmoji"
            />
        </div>
        <div
            v-if="!isHideStatus"
            :class="['status-text', { show: hasStatusText, error: isError, warning: isWarning }]"
        >
            <slot name="status-text" />
        </div>
    </label>
</template>

<script lang="ts">
import Vue from "vue"
import cEmoji from "@/components/Emoji.vue"

export default Vue.extend({
    name: "cEdit",
    components: { cEmoji },
    model: {
        prop: "value",
        event: "update:value",
    },
    props: {
        cols: {
            type: Number,
            default: 42,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        readonly: {
            type: Boolean,
            default: false,
        },
        isClear: {
            type: Boolean,
            default: false,
        },
        isConfirmationCode: {
            type: Boolean,
            default: false,
        },
        isError: {
            type: Boolean,
            default: false,
        },
        isLazy: {
            type: Boolean,
            default: false,
        },
        isPassword: {
            type: Boolean,
            default: false,
        },
        isShowIcon: {
            type: Boolean,
            default: false,
        },
        isValid: {
            type: Boolean,
            default: false,
        },
        isWarning: {
            type: Boolean,
            default: false,
        },
        mode: {
            type: String,
            default: "singleline",
            validator: (v: string) => ["singleline", "multiline"].includes(v),
        },
        placeholder: {
            type: String,
        },
        required: {
            type: Boolean,
            default: false,
        },
        resize: {
            type: String,
            default: "vertical",
            validator: (v: string) => ["vertical", "horizontal", "none", "both"].includes(v),
        },
        rows: {
            type: Number,
            default: 4,
        },
        type: {
            type: String,
            default: "text",
            validator: (v: string) => ["text", "number", "password", "email", "tel"].includes(v),
        },
        value: {
            type: String,
            default: "",
        },
        codeLength: {
            type: Number,
            default: 6,
        },
        inputmode: {
            type: String,
            default: "text",
        },
        isHideStatus: {
            type: Boolean,
            default: false,
        },
        isSearch: {
            type: Boolean,
            default: false,
        },
        isSearchLeft: {
            type: Boolean,
            default: false,
        },
        isSearchIconBold: {
            type: Boolean,
            default: true,
        },
        iconName: {
            type: String,
        },
        iconColor: {
            type: String,
            default: "#3F51B5",
        },
        autocomplete: {
            type: String,
            default: "off",
        },
        isHideRequired: {
            type: Boolean,
            default: false,
        },
        enableEmoji: {
            type: Boolean,
            default: false,
        },
        emojiIconColor: {
            type: String,
            default: "#3f51b5",
        },
        emojiIconHoverColor: {
            type: String,
            default: "#4960df",
        },
        width: {
            type: String,
            default: "360px",
        },
        backgroundColor: {
            type: String,
            default: "#ebf0f9",
        },
        placeholderColor: {
            type: String,
            default: "#818ca9",
        },
        color: {
            type: String,
            default: "#1e1e1e",
        },
        borderActiveColor: {
            type: String,
            default: "#3f51b5",
        },
        borderWidth: {
            type: String,
            default: "1px",
        },
        clearIconColor: {
            type: String,
            default: "#818ca9",
        },
        clearIconHoverColor: {
            type: String,
            default: "#3f51b5",
        },
        mask: {
            type: String,
        },
    },
    data() {
        return {
            text: "",
            isShowPassword: false,
            isFocus: false,
            hasStatusText: false,
            formattedPhone: "",
            formattedMask: "",
            formattedCode: "",
            code: Object.fromEntries(Array.from({ length: this.codeLength }, (_, i) => [i + 1, ""])) as { [key: number]: string },
        }
    },
    computed: {
        iconTitle(): string {
            return this.isShowPassword ? "Скрыть пароль" : "Показать пароль"
        },
        isMultiline(): boolean {
            return this.mode === "multiline"
        },
        isPhone(): boolean {
            return this.type === "tel"
        },
        passwordMode(): string {
            return this.isShowPassword ? "text" : "password"
        },
        listeners(): Record<string, Function | Function[]> {
            return {
                ...this.$listeners,
                input: this.input,
                change: this.change,
                focus: this.focus,
                blur: this.blur,
                keydown: this.keyDown,
            }
        },
        multilineBinds(): any {
            const style = {
                "--backgroundColor": this.backgroundColor,
                "--color": this.color,
                "--borderActiveColor": this.borderActiveColor,
                "--borderWidth": this.borderWidth,
            } as { [key: string]: string }

            if (this.isMultiline && this.cols === 42 && this.width !== "360px") {
                style["--width"] = this.width
            }
            const binds = [
                { style: `resize: ${this.readonly ? "none" : this.resize}` },
                { required: this.required },
                { disabled: this.disabled },
                { readonly: this.readonly },
                { rows: this.rows },
                { cols: this.cols },
                {
                    class: {
                        error: this.isError,
                        warning: this.isWarning,
                        readonly: this.readonly,
                        "no-resize": this.resize === "none" || this.readonly,
                        "custom-width": this.isMultiline && this.cols === 42 && this.width !== "360px",
                    },
                },
                { autocomplete: this.autocomplete },
                { ref: "input" },
                { inputmode: this.inputmode },
                { style: style },
            ] as any

            if (!this.isLazy) {
                binds.push({ value: this.value })
            }

            return binds
        },
        singlelineBinds(): any {
            const binds = [
                { type: this.isPassword ? this.passwordMode : this.type },
                { required: this.required },
                { disabled: this.disabled },
                { readonly: this.readonly },
                {
                    class: {
                        code: this.isConfirmationCode,
                        phone: this.isPhone,
                        password: this.isPassword,
                        error: this.isError,
                        warning: this.isWarning,
                        readonly: this.readonly,
                        entered: this.value.length > 0 || this.formattedPhone.length > 0 || this.formattedMask.length > 0,
                    },
                },
                { autocomplete: this.autocomplete },
                { ref: "input" },
                { inputmode: this.inputmode },
                {
                    style: {
                        "--width": this.width,
                        "--backgroundColor": this.backgroundColor,
                        "--color": this.color,
                        "--borderActiveColor": this.borderActiveColor,
                        "--borderWidth": this.borderWidth,
                    },
                },
            ] as any

            if (!this.isPhone) {
                binds.push({ value: this.value })
            }

            return binds
        },
        maskNumbers(): number[] {
            return (this.mask ?? "").split(/\D/).reduce((acc, cur) => {
                if (/\d/g.test(cur)) {
                    acc.push(Number(cur))
                }
                return acc
            }, [] as number[])
        },
        maskSeparators(): string[] {
            return (this.mask ?? "").split("").reduce((acc, cur) => {
                if (/\D/g.test(cur)) {
                    acc.push(cur)
                }
                return acc
            }, [] as string[])
        },
    },
    watch: {
        value: {
            immediate: true,
            handler() {
                this.text = this.value
                if (this.isPhone) {
                    if ((this.value || "").length !== 0) {
                        this.phoneFormatting("value")
                    }
                } else if (this.mask !== undefined) {
                    if ((this.value || "").length !== 0) {
                        this.maskFormatting("value")
                    }
                }
            },
        },
    },
    mounted() {
        this.checkSlots()
    },
    updated() {
        this.checkSlots()
    },
    methods: {
        selectEmoji(emoji: any) {
            const textarea = this.isMultiline ? (this.$refs.textarea as HTMLTextAreaElement) : (this.$refs.input as HTMLInputElement)
            const start = textarea.selectionStart as number
            const end = textarea.selectionEnd as number
            if (this.isLazy) {
                this.text = `${this.text.slice(0, start)}${emoji}${this.text.slice(end)}`
            } else {
                this.$emit("update:value", `${this.value.slice(0, start)}${emoji}${this.value.slice(end)}`)
            }
            textarea.setRangeText(emoji, start, end, "end")
        },
        blur(e: FocusEvent) {
            this.isFocus = false
            this.$emit("blur", e)
        },
        change(e: Event) {
            if (this.isLazy) {
                this.$emit("update:value", this.text)
            }
            this.$emit("change", e)
        },
        checkSlots() {
            this.hasStatusText = !!this.$slots["status-text"]
        },
        clear() {
            this.$emit("update:value", "")
            if (this.isPhone) {
                this.formattedPhone = ""
            } else if (this.mask !== undefined) {
                this.formattedMask = ""
            }
            this.$emit("input", "")
            this.isFocus = false
            setTimeout(() => {
                ;(this.$refs.input as HTMLInputElement).blur()
            }, 100)
        },
        focus(e: FocusEvent) {
            this.isFocus = true
            this.$emit("focus", e)
        },
        input(e: InputEvent) {
            if (this.isPhone) {
                if (e.inputType === "deleteContentBackward" && this.formattedPhone.length < 1) {
                    this.$emit("update:value", "")
                    return
                }

                this.phoneFormatting("formattedPhone")
                this.$emit("input", e)

                return
            }
            if (!this.isPhone && this.mask !== undefined) {
                if (e.inputType === "deleteContentBackward" && this.formattedMask.length < 1) {
                    this.$emit("update:value", "")
                    return
                }

                this.maskFormatting("formattedMask")
                this.$emit("input", e)

                return
            }

            if (this.isConfirmationCode) {
                const index = Number((e.target as HTMLInputElement).dataset.id)
                this.code[index] = this.code[index].replace(/\D/g, "")
                const refs = this.$refs["ui-edit"] as HTMLInputElement

                if (this.code[index].length > 0 && index !== Object.keys(this.code).length) {
                    const next = refs.querySelector(`input[data-id="${index + 1}"]`) as HTMLElement
                    next.focus()
                }

                const result = Object.values(this.code).reduce((a, b) => a + b)
                this.$emit("update:value", result)

                return
            }

            if (!this.isLazy) {
                this.$emit("update:value", (e.target as HTMLInputElement | HTMLTextAreaElement).value)
            }
            this.$emit("input", e)
        },
        keyDown(e: KeyboardEvent) {
            if (this.isConfirmationCode) {
                const index = Number((e.target as HTMLInputElement).dataset.id)
                const refs = this.$refs["ui-edit"] as HTMLInputElement
                const prev = refs.querySelector(`input[data-id="${index - 1}"]`) as HTMLElement
                const next = refs.querySelector(`input[data-id="${index + 1}"]`) as HTMLElement

                if (["Backspace", "Delete"].includes(e.code)) {
                    if (this.code[index].length > 0) {
                        this.code[index] = ""
                        setTimeout(() => {
                            if (index !== 1) {
                                prev.focus()
                            }
                        }, 1)
                    } else {
                        if (index !== 1) {
                            this.code[index - 1] = ""

                            prev.focus()
                        }
                    }

                    const result = Object.values(this.code).reduce((a, b) => a + b)
                    this.$emit("update:value", result)
                }

                if (e.code === "ArrowRight" && index !== Object.keys(this.code).length) {
                    next.focus()
                }

                if (e.code === "ArrowLeft" && index !== 1) {
                    prev.focus()
                }
            }
            this.$emit("keydown", e)
        },
        phoneFormatting(phone: keyof { formattedPhone: string; value: string }) {
            let p = this[phone].replace(/\D/g, "")

            if (p.length > 10 && ["7", "8"].includes(p[0])) {
                p = p.slice(1)
            }
            const match = this.maskNumbers.reduce((acc, cur) => (acc += `${`(\\d{0,${cur}})`}`), "")

            const m = match.length > 0 ? p.match(new RegExp(match)) : p.match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/)

            if (m === null) {
                return
            }

            let res = ""
            if (match.length > 0) {
                for (let i = 1; i < m.length; i++) {
                    res +=
                        m[i] +
                        (m[i].length === Number(this.maskNumbers[i - 1])
                            ? this.maskSeparators[i - 1] !== undefined && m[i + 1]
                                ? this.maskSeparators[i - 1]
                                : ""
                            : "")
                }
            }

            this.formattedPhone = res || (!m[2] ? m[1] : m[1] + " " + m[2] + (m[3] ? "-" + m[3] : "") + (m[4] ? "-" + m[4] : ""))
            this.$emit("update:value", m[0])
        },
        maskFormatting(text: keyof { formattedMask: string; value: string }) {
            let val = this[text].replace(/\D/g, "")
            const match = this.maskNumbers.reduce((acc, cur) => (acc += `${`(\\d{0,${cur}})`}`), "")
            const m = val.match(new RegExp(match))

            if (m === null) {
                return
            }

            let res = ""
            for (let i = 1; i < m.length; i++) {
                res +=
                    m[i] +
                    (m[i].length === Number(this.maskNumbers[i - 1])
                        ? this.maskSeparators[i - 1] !== undefined && m[i + 1]
                            ? this.maskSeparators[i - 1]
                            : ""
                        : "")
            }
            this.formattedMask = res
            this.$emit("update:value", m[0])
        },
        showPassword() {
            this.isShowPassword = !this.isShowPassword
        },
    },
})
</script>

<style lang="scss" scoped>
@import "../styles/colors";
@import "../styles/icons";

.ui-edit {
    $width: var(--width);
    $backgroundColor: var(--backgroundColor);
    $color: var(--color);
    $borderActiveColor: var(--borderActiveColor);
    $borderWidth: var(--borderWidth);

    display: flex;
    flex-flow: column;
    max-width: fit-content;

    &.textarea {
        height: auto !important;
    }

    & > div {
        display: flex;
        position: relative;

        &.status-text {
            font-size: 12px;
            line-height: 15px;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
            margin-top: 4px;

            &.show {
                opacity: 1;
            }

            &.error {
                color: #ff324b;
            }

            &.warning {
                color: $orange-600;
            }
        }

        & > .placeholder {
            color: var(--placeholderColor);
            position: absolute;
            top: 0;
            left: 10px;
            transition: opacity 0.2s ease-in-out;
            z-index: 2;
            pointer-events: none;
            display: flex;
            height: 40px;
            align-items: center;

            &.search-left {
                left: 46px;
            }

            &.hide {
                opacity: 0;
            }

            &:deep(span) {
                color: $orange-600;
            }
        }

        & > input[type="password"]:not(:placeholder-shown) {
            font-family: Verdana, Geneva, sans-serif;
            letter-spacing: 2px;
        }

        & > .code-country {
            position: absolute;
            top: 0;
            left: 16px;
            opacity: 0;
            transition: opacity 0.2s ease-in-out;
            user-select: none;
            display: flex;
            height: 40px;
            align-items: center;

            &.show {
                opacity: 1;
            }

            &.error {
                color: #ff324b;
            }

            &.warning {
                color: $orange-600;
            }

            &.disabled {
                color: $gray-500;
            }
        }

        & > textarea {
            box-sizing: border-box;
            border-radius: 5px;
            outline: none;
            border: none;
            padding: 11px 30px 12px 10px;
            background-color: $backgroundColor;
            border: 1px solid transparent;
            transition: all 0.3s ease-in-out, height 0s, width 0s;
            color: $color;

            &.custom-width {
                width: $width;
            }

            &:focus:not(.readonly) {
                border: $borderWidth solid $borderActiveColor;
            }

            &:disabled {
                background-color: $gray-200;
                pointer-events: none;
                color: $gray-500;
            }

            &.error {
                background-color: #ffe1e3;
                color: #ff324b;
                border: 1px solid #ff324b;
            }

            &.warning {
                background-color: #ffebd9;
                color: $orange-600;
                border: 1px solid $orange-600;
            }

            &.readonly {
                resize: none;
                pointer-events: none;
            }

            &::-webkit-scrollbar {
                width: 10px;
            }

            &::-webkit-scrollbar-thumb {
                height: 20px;
                background-color: $gray-350;
            }

            &.no-resize {
                &::-webkit-scrollbar {
                    width: 4px;
                }
            }
        }

        & > input {
            box-sizing: border-box;
            border-radius: 5px;
            outline: none;
            border: 1px solid transparent;
            font: inherit;
            overflow-x: hidden;
            text-overflow: ellipsis;
            height: 40px;
            width: $width;
            padding: 0 10px;
            background-color: $backgroundColor;
            color: $color;
            transition: all 0.3s ease-in-out, letter-spacing 0s;

            &.readonly {
                resize: none;
                pointer-events: none;
            }

            &.password {
                z-index: 1;

                &.entered {
                    z-index: 0;
                }
            }

            &.phone {
                padding-left: 35px;
            }

            &:focus:not(.readonly) {
                border: $borderWidth solid $borderActiveColor;

                &.error,
                &.warning {
                    margin-left: unset;
                }
            }

            &.code {
                font-size: 18px;
                width: 40px;
                height: 40px;
                border-radius: 5px;
                background-color: $backgroundColor;
                border: none;
                padding: 0;
                text-align: center;
                color: $color;

                &:last-of-type {
                    margin-right: 0;
                }
            }

            &:disabled {
                background-color: $gray-200;
                color: $gray-500;
            }

            &.error {
                background-color: #ffe1e3;
                color: #ff324b;
                border: 1px solid #ff324b;
            }

            &.warning {
                background-color: #ffebd9;
                color: $orange-600;
                border: 1px solid $orange-600;
            }
        }

        &.has-left-icon {
            & > .placeholder {
                padding-left: 28px;
            }

            & > .code-country {
                left: 38px;
            }

            & > input {
                padding-left: 38px;

                &.phone {
                    padding-left: 57px;
                }
            }

            & > .icon {
                &:first-child {
                    mask-position: center;
                    mask-repeat: no-repeat;
                    mask-size: 100%;
                }
            }
        }

        & > .icon {
            $clearIconColor: var(--clearIconColor);
            $clearIconHoverColor: var(--clearIconHoverColor);

            mask-repeat: no-repeat;
            mask-position: center;
            position: absolute;
            right: 10px;
            top: 10px;
            width: 20px;
            height: 20px;

            &.input-icon {
                opacity: 0;
                background-color: transparent;
                z-index: 1;
            }

            &.input-error {
                opacity: 1;
                background-color: #ff324b;
                transition: all 0.3s ease-in-out;
            }

            &.input-warning {
                opacity: 1;
                background-color: $orange-600;
                transition: all 0.3s ease-in-out;
            }

            &.input-valid {
                opacity: 1;
                background-color: #0ada8f;
                transition: all 0.3s ease-in-out;
            }

            &.search-small {
                opacity: 1;
                background-color: #818ca9;
                transition: all 0.3s ease-in-out;

                &.hide {
                    opacity: 0;
                    z-index: 0;
                }
            }

            &.close {
                background-color: $clearIconColor;
                transition: all 0.3s ease-in-out;
                width: 24px;
                height: 24px;
                top: 8px;
                right: 8px;
                opacity: 1;

                &:hover {
                    cursor: pointer;
                    background-color: $clearIconHoverColor;
                }
            }

            &.eye-closed,
            &.eye-open {
                mask-size: contain;
                margin: 0;
                background-color: #818ca9;
                transition: all 0.3s ease-in-out;
                opacity: 0;
                z-index: 1;
                pointer-events: none;

                &.need-margin {
                    right: 40px;
                }

                &.show {
                    pointer-events: unset;
                    opacity: 1;
                }

                &:hover {
                    cursor: pointer;
                    background-color: #3f51b5;
                }
            }

            &.left {
                left: 10px;
            }

            &.search-bold {
                opacity: 1;
                transition: all 0.3s ease-in-out;
                width: 24px;
                height: 24px;
                background-color: $primary-500;
                top: 8px;
                margin: 0;
                mask-size: 100%;

                &.hide {
                    opacity: 0;
                    z-index: 0;
                }
            }
        }

        & > :deep(.ui-emoji) {
            $emojiIconColor: var(--emojiIconColor);
            $emojiIconHoverColor: var(--emojiIconHoverColor);

            position: absolute;
            right: 10px;
            top: 8px;
            width: 24px;
            transition: all 0.3s ease-in-out;

            & > .icon {
                mask-size: 100%;
                mask-repeat: no-repeat;
                mask-position: center;
                background-color: $emojiIconColor;
            }

            &:hover {
                & > .icon {
                    background-color: $emojiIconHoverColor;
                }
            }
        }
    }

    &.code {
        align-items: center;

        & > div {
            align-items: center;
            width: 100%;
            justify-content: space-between;
        }
    }

    &.pointer {
        cursor: pointer;

        & > div {
            & > input {
                cursor: pointer;
            }
        }
    }
}
</style>
