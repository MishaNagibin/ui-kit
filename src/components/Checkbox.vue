<template>
    <label
        v-on="listeners"
        :class="['ui-checkbox', !isCustom ? mode : '', size, { nowrap, disabled, custom: isCustom }]"
        :style="{ '--color': color, '--hoverColor': hoverColor, '--activeColor': activeColor }"
    >
        <input
            :checked="checked"
            :disabled="disabled"
            type="checkbox"
            @change.stop="change"
        />
        <span :class="['check-mark', { checked }]" />
        <slot />
    </label>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
    name: "cCheckbox",
    model: {
        prop: "checked",
        event: "change",
    },
    props: {
        checked: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        mode: {
            type: String,
            default: "primary",
            validator: (v: string) => ["primary", "red", "default"].includes(v),
        },
        nowrap: {
            type: Boolean,
            default: false,
        },
        size: {
            type: String,
            default: "m",
            validator: (v: string) => ["s", "sm", "m", "l"].includes(v),
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
            }
        },
        isCustom(): boolean {
            return (this.color ?? "").length > 0 || (this.hoverColor ?? "").length > 0 || (this.activeColor ?? "").length > 0
        },
    },
    methods: {
        blur(e: FocusEvent) {
            this.$emit("blur", e)
        },
        change(e: MouseEvent) {
            this.setChecked((e.target as HTMLInputElement).checked)
        },
        focus(e: FocusEvent) {
            this.$emit("focus", e)
        },
        keyDown(e: KeyboardEvent) {
            if (e.code !== "Enter" && e.code !== "Space") {
                return
            }
            this.toogle()
        },
        setChecked(v: boolean) {
            if (this.disabled) {
                return
            }
            this.$emit("change", v)
        },
        toogle() {
            this.setChecked(!this.checked)
        },
    },
})
</script>

<style lang="scss" scoped>
@import "../styles/colors";

.ui-checkbox {
    display: flex;
    outline: none;
    cursor: pointer;
    align-items: center;
    width: fit-content;

    &.nowrap {
        white-space: nowrap;
    }

    & > input {
        display: none;
    }

    & > .check-mark {
        width: 21px;
        height: 21px;
        margin: auto 9px auto 0;
        border-radius: 5px;
        background-color: $gray-000;
        border: 2px solid #596175;
        transition: all 0.2s ease-in-out;
        flex-shrink: 0;
        position: relative;

        &::after,
        &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 21px;
            height: 21px;
            display: block;
            z-index: 1;
            transition: all 0.3s ease-in-out;
            transform: scale(0);
            opacity: 0;
        }

        &::after {
            background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDEyIDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMSAxTDQuNTM4NDYgOEwxLjUgNC41IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=")
                no-repeat center center;
        }

        &::before {
            border-radius: 5px;
        }

        &.checked {
            &::after,
            &::before {
                transform: scale(1.3);
                opacity: 1;
            }
        }
    }

    &.custom {
        $color: var(--color);

        & > .check-mark {
            border-color: $color;
        }

        & > .checked {
            border-color: $color;

            &::before {
                background-color: $color;
            }
        }
    }

    &.primary {
        & > .check-mark {
            border-color: $primary-500;
        }

        & > .checked {
            border-color: $primary-500;

            &::before {
                background-color: $primary-500;
            }
        }
    }

    &.red {
        & > .check-mark {
            border-color: #ff324b;
        }

        & > .checked {
            border-color: #ff324b;

            &::before {
                background-color: #ff324b;
            }
        }
    }

    &.default {
        & > .check-mark {
            border: 1px solid #818ca9;
        }

        & > .checked {
            border-color: $primary-500;

            &::before {
                background-color: $primary-500;
            }
        }
    }

    &.disabled {
        & > .check-mark {
            border-color: $gray-350;
        }

        & > .checked {
            background-color: $gray-350;
        }
    }

    &:hover {
        & > .check-mark {
            transition: 0.2s;
        }

        &.primary {
            & > .check-mark {
                border-color: $primary-350;
            }

            & > .checked {
                border-color: $primary-350;

                &::before {
                    background-color: $primary-350;
                }
            }
        }

        &.red {
            & > .check-mark {
                border-color: #ff324b;
            }
        }

        &.custom {
            $hoverColor: var(--hoverColor);

            & > .check-mark {
                border-color: $hoverColor;
            }

            & > .checked {
                border-color: $hoverColor;

                &::before {
                    background-color: $hoverColor;
                }
            }
        }
    }

    &:active {
        &.primary {
            & > .check-mark {
                border-color: $primary-700;
            }

            & > .checked {
                border-color: $primary-700;

                &::before {
                    background-color: $primary-700;
                }
            }
        }

        &.red {
            & > .check-mark {
                border-color: #ff324b;
            }
        }

        &.custom {
            $activeColor: var(--activeColor);

            & > .check-mark {
                border-color: $activeColor;
            }

            & > .checked {
                border-color: $activeColor;

                &::before {
                    background-color: $activeColor;
                }
            }
        }
    }

    &.s {
        & > .check-mark {
            width: 16px;
            height: 16px;

            &::after,
            &::before {
                width: 16px;
                height: 16px;
            }

            &.checked {
                &::after,
                &::before {
                    transform: scale(1.18);
                }
            }
        }
    }

    &.sm {
        & > .check-mark {
            width: 18px;
            height: 18px;

            &::after,
            &::before {
                width: 18px;
                height: 18px;
            }

            &.checked {
                &::after,
                &::before {
                    transform: scale(1.22);
                }
            }
        }
    }

    &.m {
        & > .check-mark {
            width: 20px;
            height: 20px;

            &::after,
            &::before {
                width: 20px;
                height: 20px;
            }
        }
    }

    &.l {
        & > .check-mark {
            width: 25px;
            height: 25px;

            &::after,
            &::before {
                width: 25px;
                height: 25px;
            }
        }
    }
}
</style>
