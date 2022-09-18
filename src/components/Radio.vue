<template>
    <label
        v-on="listeners"
        :class="['ui-radio-button', !isCustom ? mode : '', { nowrap, disabled, custom: isCustom }]"
        :style="{ '--color': color, '--hoverColor': hoverColor, '--activeColor': activeColor }"
    >
        <input
            :disabled="disabled"
            :value="value"
            :checked="checked"
            type="radio"
            @change="change"
        />
        <span class="radio" />
        <slot />
    </label>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
    name: "cRadio",
    props: {
        value: {
            type: String,
            default: null,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        checked: {
            type: Boolean,
            default: false,
        },
        nowrap: {
            type: Boolean,
            default: false,
        },
        mode: {
            type: String,
            default: "primary",
            validator: (v: string) => ["primary", "red"].includes(v),
        },
        color: {
            type: String,
        },
        hoverColor: {
            type: String,
        },
        activeColor: {
            type: String,
        },
    },
    computed: {
        listeners(): Record<string, Function | Function[]> {
            return {
                ...this.$listeners,
                focus: this.focus,
                blur: this.blur,
                keydown: this.keyDown,
                change: this.change,
            }
        },
        isCustom(): boolean {
            return (this.color ?? "").length > 0 || (this.hoverColor ?? "").length > 0 || (this.activeColor ?? "").length > 0
        },
    },
    methods: {
        change() {
            this.setChecked()
            this.$emit("change", this.value)
        },
        focus(e: FocusEvent): void {
            this.$emit("focus", e)
        },
        blur(e: FocusEvent): void {
            this.$emit("blur", e)
        },
        keyDown(e: KeyboardEvent): void {
            if (e.code !== "Enter" && e.code !== "Space") {
                return
            }
            e.preventDefault()
            this.toogle()
        },
        toogle() {
            this.setChecked()
        },
        setChecked() {
            if (this.disabled) {
                return
            }
            this.$emit("update:checked", this.value)
        },
    },
})
</script>

<style lang="scss" scoped>
@import "../styles/colors";

.ui-radio-button {
    display: flex;
    outline: none;
    cursor: pointer;
    align-items: center;
    margin-bottom: 6px;

    &.nowrap {
        white-space: nowrap;
    }

    & > input {
        display: none;

        &:checked + .radio:after {
            opacity: 1;
            transform: scale(1);
            transition: all 0.3s ease-in-out;
        }
    }

    & > .radio {
        position: relative;
        width: 19px;
        height: 19px;
        margin-right: 6px;
        border-radius: 50%;
        background-color: $gray-000;
        border: 1.5px solid;
        transition: all 0.3s ease-in-out;

        &:after {
            content: "";
            position: absolute;
            width: 10px;
            height: 10px;
            left: 4.5px;
            top: 4.5px;
            border-radius: 50%;
            opacity: 0;
            transition: all 0.3s ease-in-out;
            transform: scale(0);
        }
    }

    &.custom {
        $color: var(--color);
        $hoverColor: var(--hoverColor);
        $activeColor: var(--activeColor);

        & > .radio {
            border-color: $color;

            &:after {
                background-color: $color;
            }
        }

        &:hover {
            & > .radio {
                border-color: $hoverColor;

                &:after {
                    background-color: $hoverColor;
                }
            }
        }

        &:active {
            & > .radio {
                border-color: $activeColor;

                &:after {
                    background-color: $activeColor;
                }
            }
        }
    }

    &.primary {
        & > .radio {
            border-color: $primary-500;

            &:after {
                background-color: $primary-500;
            }
        }

        &:hover {
            & > .radio {
                border-color: $primary-350;

                &:after {
                    background-color: $primary-350;
                }
            }
        }

        &:active {
            & > .radio {
                border-color: $primary-700;

                &:after {
                    background-color: $primary-700;
                }
            }
        }
    }

    &.red {
        color: #ff324b;

        & > .radio {
            border-color: #ff324b;

            &:after {
                background-color: #ff324b;
            }
        }
    }

    &.disabled {
        color: $gray-500;
        pointer-events: none;

        & > .radio {
            border-color: $gray-350;

            &:after {
                background-color: $gray-350;
            }
        }
    }
}
</style>
