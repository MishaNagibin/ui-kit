<template>
    <label
        v-if="isMultiline"
        class="ui-edit textarea"
    >
        <div>
            <span
                v-if="placeholder || required"
                :class="['placeholder', { hide: isFocus || value.length > 0 }]"
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
                v-if="isClear"
                :class="['icon', 'input-icon', { close: value.length > 0 }]"
                :style="{ right: isError || isWarning || isValid ? '32px' : '10px'}"
                data-tooltip="Очистить"
                @click="clear"
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
        :class="['ui-edit', 'code', { reg: codeLength < 6 }]"
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
                v-if="isClear"
                :class="['icon', 'input-icon', { close: value.length > 0 }]"
                :style="{ right: isError && isShowIcon || isWarning && isShowIcon || isValid && isShowIcon ? '32px' : '10px'}"
                data-tooltip="Очистить"
                @click="clear"
            />
            <span
                v-if="isPassword"
                :class="['icon', { 'eye-closed': !isShowPassword, 'eye-open': isShowPassword, show: value.length > 0 }]"
                :style="{ right: isClear && (isError || isWarning || isValid) ? '60px' : isError || isWarning || isValid || isClear ? '40px' : '10px' }"
                :data-tooltip="iconTitle"
                @click.prevent="showPassword"
            />
            <span
                v-if="isSearch"
                :class="['icon', 'input-icon', { hide: value.length > 0 || isSearchLeft && isFocus, left: isSearchLeft, 'search-mobile': isSearchIconBold, search2: !isSearchIconBold }]"
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

export default Vue.extend({
    name: "cEdit",
    model: {
        prop: "value",
        event: "update:value",
    },
    props: {
        cols: {
            type: Number,
            default: 20,
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
            default: 1,
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
    },
    data() {
        return {
            text: "",
            isShowPassword: false,
            isFocus: false,
            hasStatusText: false,
            formattedPhone: "",
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
            const binds = [
                { style: this.resize },
                { required: this.required },
                { disabled: this.disabled },
                { readonly: this.readonly },
                { rows: this.rows },
                { cols: this.cols },
                {
                    class: {
                        error: this.isError,
                        warning: this.isWarning,
                    },
                },
                { autocomplete: this.autocomplete },
                { ref: "input" },
                { inputmode: this.inputmode },
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
                        entered: this.value.length > 0 || this.formattedPhone.length > 0,
                    },
                },
                { autocomplete: this.autocomplete },
                { ref: "input" },
                { inputmode: this.inputmode },
            ] as any

            if (!this.isPhone) {
                binds.push({ value: this.value })
            }

            return binds
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
            }
            this.$emit("input", "")
            this.isFocus = false
            setTimeout(() => {
                (this.$refs.input as HTMLInputElement).blur()
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

                if (e.code === "Backspace") {
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

            const m = p.match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/)
            if (m === null) {
                return
            }

            this.formattedPhone = !m[2] ? m[1] : m[1] + " " + m[2] + (m[3] ? "-" + m[3] : "") + (m[4] ? "-" + m[4] : "")
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
    display: flex;
    flex-flow: column;

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
            color: #818ca9;
            position: absolute;
            top: 10px;
            left: 10px;
            transition: opacity 0.2s ease-in-out;
            z-index: 2;
            pointer-events: none;

            &.search-left {
                left: 46px;
            }

            &.hide {
                opacity: 0;
            }

            &:deep(span) {
                color: $orange-600;
                margin-left: -3px;
            }
        }

        & > input[type="password"]:not(:placeholder-shown) {
            font-family: Verdana, Geneva, sans-serif;
            letter-spacing: 2px;
        }

        & > .code-country {
            position: absolute;
            top: 10px;
            left: 16px;
            opacity: 0;
            transition: opacity 0.2s ease-in-out;
            user-select: none;

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
            background-color: #ebf0f9;
            height: 58px;
            width: 360px;
            border: 1px solid transparent;
            transition: all 0.3s ease-in-out, height 0s, width 0s;

            &:focus {
                border: 1px solid #3f51b5;
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
            width: 360px;
            padding: 0 10px;
            background-color: #ebf0f9;
            transition: all 0.3s ease-in-out, letter-spacing 0s;

            &.password {
                z-index: 1;

                &.entered {
                    z-index: 0;
                }
            }

            &.phone {
                padding-left: 35px;
            }

            &:focus {
                border: 1px solid #3f51b5;

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
                background-color: #ebf0f9;
                border: none;
                padding: 0;
                text-align: center;

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

            &.search-mobile {
                opacity: 1;
                background-color: #818ca9;
                transition: all 0.3s ease-in-out;

                &.hide {
                    opacity: 0;
                    z-index: 0;
                }
            }

            &.close {
                background-color: #818ca9;
                transition: all 0.3s ease-in-out;
                width: 24px;
                height: 24px;
                top: 8px;
                right: 8px;
                opacity: 1;

                &:hover {
                    cursor: pointer;
                    background-color: #3f51b5;
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

            &.search2 {
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
    }

    &.code {
        align-items: center;

        & > div {
            align-items: center;
            width: 100%;
            justify-content: space-between;
        }

        &.reg {
            & > div {
                justify-content: space-evenly;
            }
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
