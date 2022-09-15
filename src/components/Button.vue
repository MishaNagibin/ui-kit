<template>
    <button
        v-on="listeners"
        :class="['ui-button', mode, size, { active: isTouch, touch: isTouch, loading: isLoading, mobile: isMobile, gradient: (customStyle || {}).position !== undefined, 'not-color': customStyle !== undefined && customStyle.color === undefined, 'not-position': customStyle !== undefined && customStyle.position === undefined, 'not-upper-case': dontUpperCase, 'just-text': isJustText }]"
        :disabled="disabled"
        :style="customStyle ? { '--background': customStyle.background, '--hover': customStyle.hover, '--active': customStyle.active, '--color': customStyle.color, '--position': customStyle.position } : {}"
        ref="btn"
        @touchstart="touchStart"
        @touchend="touchEnd"
        @touchcancel="touchEnd"
        @touchmove="touchMove"
        @mousedown="mouseDown"
        @mouseup="mouseUp"
        @mouseout="mouseUp"
    >
        <span
            v-show="isLoading"
            class="icon spinner"
        />
        <div
            v-show="!isLoading"
            class="caption"
        >
            <slot />
        </div>
    </button>
</template>

<script lang="ts">
import Vue from "vue"
import { ButtonCustomStyle } from "@/../types/button"
import { Prop } from "vue/types/options"

export default Vue.extend({
    name: "cButton",
    props: {
        mode: {
            type: String,
            default: "normal",
            validator: (v: string) =>
                [
                    "normal",
                    "orange",
                    "primary",
                    "gradient",
                    "crimson",
                    "disabled",
                    "custom",
                    "custom gradient",
                    "white-to-crimson",
                    "red",
                    "green",
                    "white",
                ].includes(v),
        },
        type: {
            type: String,
            default: "button",
            validator: (v: string) => ["button", "submit", "reset"].includes(v),
        },
        isLoading: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        size: {
            type: String,
            default: "m",
            validator: (v: string) => ["s", "m", "l", "xl"].includes(v),
        },
        customStyle: {
            type: Object as Prop<ButtonCustomStyle>,
        },
        dontUpperCase: {
            type: Boolean,
            default: false,
        },
        isMobile: {
            type: Boolean,
            default: false,
        },
        isJustText: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            isTouch: false,
        }
    },
    computed: {
        listeners(): Record<string, Function | Function[]> {
            return {
                ...this.$listeners,
                click: this.click,
            }
        },
    },
    methods: {
        click(e: MouseEvent) {
            this.$emit("click", e)
        },
        touchStart() {
            this.isTouch = true
        },
        touchEnd() {
            setTimeout(
                () => {
                    this.isTouch = false
                },
                ["white-to-crimson", "gradient"].includes(this.mode) ? 300 : 100,
            )
        },
        mouseDown() {
            this.isTouch = true
        },
        mouseUp() {
            setTimeout(
                () => {
                    this.isTouch = false
                },
                ["white-to-crimson", "gradient"].includes(this.mode) ? 300 : 100,
            )
        },
        touchMove(e: TouchEvent) {
            const btn = this.$refs.btn as HTMLElement
            const isAbove = e.changedTouches[0].pageY < btn.offsetTop
            const isBelow = e.changedTouches[0].pageY > btn.offsetTop + btn.offsetHeight
            const isLeft = e.changedTouches[0].pageX < btn.offsetLeft
            const isRight = e.changedTouches[0].pageX > btn.offsetLeft + btn.offsetWidth

            if (isAbove || isBelow || isLeft || isRight) {
                this.isTouch = false
            }
        },
    },
})
</script>

<style lang="scss" scoped>
@import "../styles/colors";
@import "../styles/icons";

.ui-button {
    font-family: "Montserrat", sans-serif;
    position: relative;
    display: inline-flex;
    text-align: center;
    box-sizing: border-box;
    border: 1px solid;
    border-radius: 5px;
    outline: none;
    user-select: none;
    cursor: pointer;
    transition: all 0.3s, color 0s, background 0.3s ease-in-out;
    padding: 8px 4px 8px 4px;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.065em;
    text-transform: uppercase;
    width: 100%;

    &.not-upper-case {
        text-transform: unset;
    }

    & > .spinner {
        margin: auto;
        mask-size: 100%;
        background-color: $gray-000;
    }

    & > .caption {
        position: relative;
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
        justify-content: space-evenly;

        & > .icon {
            mask-size: 100%;
            background-color: $gray-000;
        }
    }

    &.loading {
        pointer-events: none;
    }

    &.loading:before {
        content: "";
        box-sizing: border-box;
        z-index: 1;
        display: block;
        border-radius: inherit;
        position: absolute;
        left: -1px;
        top: -1px;
        right: -1px;
        bottom: -1px;
    }

    &.loading {
        cursor: default;
    }

    &.normal {
        background: transparent;
        border-color: $primary-500;
        color: $primary-500;

        & .icon {
            background-color: $primary-500;
        }

        &:not(.mobile) {
            &:hover {
                border-color: $primary-350;
                color: $primary-350;

                & .icon {
                    background-color: $primary-350;
                }
            }

            &.active {
                border-color: #818ca9;
                color: #818ca9;
            }
        }

        &.touch {
            border-color: #818ca9;
            color: #818ca9;
        }
    }

    &.orange {
        background: $orange-600;
        border-color: $orange-600;
        color: $gray-000;

        & .icon {
            background-color: $gray-000;
        }

        &:not(.mobile) {
            &:hover {
                background-color: #ffae63;
                border-color: #ffae63;
                color: $gray-000;

                & .icon {
                    background-color: $gray-000;
                }
            }

            &.active {
                background-color: #dd6a00;
            }
        }

        &.touch {
            background-color: #dd6a00;
        }
    }

    &.primary {
        background-color: $primary-500;
        border-color: $primary-500;
        color: $gray-000;

        &:not(.mobile) {
            &:hover {
                background-color: $primary-350;
            }

            &.active {
                background-color: $primary-700;
            }
        }

        &.loading,
        &.touch {
            background-color: $primary-700;
        }
    }

    &.red {
        background-color: $red-500;
        border-color: $red-500;
        color: $gray-000;

        &:not(.mobile) {
            &:hover {
                background-color: $red-400;
            }

            &.active {
                background-color: $red-600;
            }
        }

        &.loading,
        &.touch {
            background-color: $red-600;
        }
    }

    &.white {
        background-color: $gray-000;
        border-color: transparent;
        color: #1e1e1e;
        font-weight: 500;

        &:not(.mobile) {
            &:hover {
                border-color: $primary-350;
            }

            &.active {
                border-color: $primary-700;
            }
        }

        &.loading,
        &.touch {
            border-color: $primary-350;
        }
    }

    &.green {
        background-color: $green-400;
        border-color: $green-400;
        color: $gray-000;

        &:not(.mobile) {
            &:hover {
                background-color: $green-350;
            }

            &.active {
                background-color: $green-500;
            }
        }

        &.loading,
        &.touch {
            background-color: $green-500;
        }
    }

    &.crimson {
        background-color: $pink-500;
        border-color: $pink-500;
        color: $gray-000;

        &:not(.mobile) {
            &:hover {
                background-color: #cc006e;
                border-color: #cc006e;
            }
        }

        &.touch {
            background-color: #cc006e;
            border-color: #cc006e;
        }
    }

    &.white-to-crimson {
        background: transparent;
        border-color: $pink-500;
        color: $pink-500;
        transition: all 0.3s ease-in-out, color 0.3s ease-in-out;

        &:not(.mobile) {
            &:hover {
                background-color: $pink-500;
                border-color: $pink-500;
                color: $gray-000;
            }

            &.active {
                background-color: #cc006e;
                border-color: #cc006e;
                color: $gray-000;
            }
        }

        &.touch {
            background-color: #cc006e;
            border-color: #cc006e;
            color: $gray-000;
        }
    }

    &.gradient {
        background: linear-gradient(92.59deg, #f9028a, #484db2, #f841aa, #5c45fb) 0% 50% / 300% 100%;
        border: none;
        color: $gray-000;

        &:not(.mobile) {
            &:hover {
                background-position: 55% 50% !important;
            }
        }

        &.touch {
            background-position: 55% 50% !important;
        }
    }

    &.custom {
        $background: var(--background);
        $hover: var(--hover);
        $active: var(--active);
        $color: var(--color);
        $position: var(--position);

        background: $background;
        border-color: $background;
        color: $color;

        &.not-color {
            color: $gray-000;
        }

        &:not(.mobile) {
            &.gradient {
                &:hover {
                    background-position: $position !important;

                    &.not-position {
                        background-position: 55% 50% !important;
                    }
                }
            }

            &:not(.gradient) {
                &.not-position {
                    &:hover {
                        background: $hover;
                        border-color: $hover;
                    }
                }

                &.active {
                    &.not-position {
                        background: $active;
                        border-color: $active;
                    }
                }
            }
        }

        &.touch {
            &:not(.gradient) {
                &.not-position {
                    background: $active;
                    border-color: $active;
                }
            }
        }
    }

    &.just-text {
        border: none;
        text-transform: unset;
    }

    &:disabled,
    &.disabled {
        color: $gray-000;
        background-color: $gray-350;
        border-color: $gray-350;
        pointer-events: none;

        &.just-text {
            cursor: not-allowed;
            background-color: unset;
            color: $gray-700;
            border-color: unset;
            pointer-events: unset;
        }
    }

    &.disabled {
        font-size: 10px;
    }

    &.s {
        max-width: 120px;
        height: 40px;
    }

    &.m {
        max-width: 166px;
        height: 40px;
    }

    &.l {
        max-width: 188px;
        height: 40px;
    }

    &.xl {
        max-width: 304px;
        height: 40px;
    }

    &.mobile {
        font-size: 10px;
        -webkit-tap-highlight-color: transparent;

        &.s {
            max-width: 124px;
            height: 38px;
        }

        & > .caption {
            & > .icon {
                mask-size: 90%;
            }
        }

        &.xl {
            max-width: 314px;
            height: 38px;
        }

        &:hover,
        &.active,
        &.touch {
            &:disabled,
            &.disabled {
                color: $gray-000;
                background-color: $gray-350;
                border-color: $gray-350;
                pointer-events: none;
            }

            &.disabled {
                font-size: 10px;
            }
        }
    }
}
</style>
