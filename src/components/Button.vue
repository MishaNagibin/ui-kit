<template>
    <button
        v-on="listeners"
        :class="['ui-button', size, mode, { active: isTouch, touch: isTouch, loading: isLoading, mobile: isMobile, 'not-upper-case': dontUpperCase }]"
        :disabled="disabled"
        :style="styles"
        ref="btn"
        @touchstart="touchStart"
        @touchend="touchEnd"
        @touchcancel="touchEnd"
        @touchmove="touchMove"
        @mousedown="mouseDown"
        @mouseup="mouseUp"
        @mouseleave="mouseUp"
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
                    "white-to-crimson",
                    "red",
                    "green",
                    "white",
                    "just-text",
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
        background: {
            type: String,
        },
        backgroundHoverColor: {
            type: String,
        },
        backgroundActiveColor: {
            type: String,
        },
        color: {
            type: String,
        },
        colorHover: {
            type: String,
        },
        colorActive: {
            type: String,
        },
        backgroundPosition: {
            type: String,
        },
        fontSize: {
            type: String,
            default: "12px",
        },
        fontWeight: {
            type: String,
            default: "600",
        },
        padding: {
            type: String,
            default: "8px 4px 8px 4px",
        },
        lineHeight: {
            type: String,
            default: "15px",
        },
        border: {
            type: String,
        },
        borderWidth: {
            type: String,
        },
        borderColor: {
            type: String,
        },
        borderHoverColor: {
            type: String,
        },
        borderActiveColor: {
            type: String,
        },
        iconColor: {
            type: String,
        },
        iconHoverColor: {
            type: String,
        },
        borderRadius: {
            type: String,
            default: "5px",
        },
        dontUpperCase: {
            type: Boolean,
            default: false,
        },
        isMobile: {
            type: Boolean,
            default: false,
        },
        width: {
            type: String,
        },
        height: {
            type: String,
        },
    },
    data() {
        return {
            isTouch: false,
            modeProperties: {
                normal: {
                    background: "transparent",
                    borderColor: "#3f51b5",
                    color: "#3f51b5",
                    iconColor: "#3f51b5",
                    borderHoverColor: "#4960df",
                    colorHover: "#4960df",
                    iconHoverColor: "#4960df",
                    borderActiveColor: "#818ca9",
                    colorActive: "#818ca9",
                },
                orange: {
                    background: "#ff7a00",
                    borderColor: "#ff7a00",
                    color: "#ffffff",
                    iconColor: "#ffffff",
                    borderHoverColor: "#ffae63",
                    backgroundHoverColor: "#ffae63",
                    borderActiveColor: "#dd6a00",
                    backgroundActiveColor: "#dd6a00",
                },
                primary: {
                    background: "#3f51b5",
                    borderColor: "#3f51b5",
                    color: "#ffffff",
                    iconColor: "#ffffff",
                    borderHoverColor: "#4960df",
                    backgroundHoverColor: "#4960df",
                    borderActiveColor: "#32408f",
                    backgroundActiveColor: "#32408f",
                },
                red: {
                    background: "#f14a4a",
                    borderColor: "#f14a4a",
                    color: "#ffffff",
                    iconColor: "#ffffff",
                    borderHoverColor: "#f36363",
                    backgroundHoverColor: "#f36363",
                    borderActiveColor: "#db3a3a",
                    backgroundActiveColor: "#db3a3a",
                },
                white: {
                    background: "#ffffff",
                    borderColor: "transparent",
                    color: "#1e1e1e",
                    iconColor: "#ffffff",
                    borderHoverColor: "#4960df",
                    borderActiveColor: "#32408f",
                },
                green: {
                    background: "#19be6b",
                    borderColor: "#19be6b",
                    color: "#ffffff",
                    iconColor: "#ffffff",
                    borderHoverColor: "#07d088",
                    backgroundHoverColor: "#07d088",
                    borderActiveColor: "#008000",
                    backgroundActiveColor: "#008000",
                },
                crimson: {
                    background: "#ff0089",
                    borderColor: "#ff0089",
                    color: "#ffffff",
                    iconColor: "#ffffff",
                    borderHoverColor: "#cc006e",
                    backgroundHoverColor: "#cc006e",
                    borderActiveColor: "#cc006e",
                    backgroundActiveColor: "#cc006e",
                },
                "white-to-crimson": {
                    background: "#ffffff",
                    borderColor: "#ff0089",
                    color: "#ff0089",
                    iconColor: "#ff0089",
                    borderHoverColor: "#ff0089",
                    backgroundHoverColor: "#ff0089",
                    colorHover: "#ffffff",
                    iconHoverColor: "#ffffff",
                    borderActiveColor: "#cc006e",
                    backgroundActiveColor: "#cc006e",
                },
                gradient: {
                    background: "linear-gradient(92.59deg, #f9028a, #484db2, #f841aa, #5c45fb) 0% 50% / 300% 100%",
                    border: "none",
                    color: "#ffffff",
                    iconColor: "#ffffff",
                    backgroundPosition: "55% 50%",
                },
                "just-text": {
                    background: "unset",
                    border: "none",
                    colorHover: "#4960df",
                },
                disabled: {
                    background: "#d6d6e1",
                    borderColor: "#d6d6e1",
                    color: "#ffffff",
                    iconColor: "#ffffff",
                },
            } as { [key: string]: { [key: string]: string } },
        }
    },
    computed: {
        listeners(): Record<string, Function | Function[]> {
            return {
                ...this.$listeners,
                click: this.click,
            }
        },
        styles(): { [key: string]: string } {
            const style = {} as { [key: string]: string }
            style["--background"] = this.background ?? this.modeProperties[this.mode].background ?? ""
            style["--backgroundHoverColor"] =
                this.mode === "gradient"
                    ? this.background ?? this.modeProperties[this.mode].background ?? ""
                    : this.backgroundHoverColor ??
                      this.modeProperties[this.mode].backgroundHoverColor ??
                      this.modeProperties[this.mode].background ??
                      ""
            style["--backgroundActiveColor"] =
                this.mode === "gradient"
                    ? this.background ?? this.modeProperties[this.mode].background ?? ""
                    : this.backgroundActiveColor ??
                      this.modeProperties[this.mode].backgroundActiveColor ??
                      this.modeProperties[this.mode].background ??
                      ""
            style["--backgroundPosition"] = this.backgroundPosition ?? this.modeProperties[this.mode].backgroundPosition ?? ""
            style["--color"] = this.color ?? this.modeProperties[this.mode].color ?? ""
            style["--colorHover"] =
                this.colorHover ?? this.modeProperties[this.mode].colorHover ?? this.modeProperties[this.mode].color ?? ""
            style["--colorActive"] =
                this.colorActive ??
                this.modeProperties[this.mode].colorActive ??
                this.modeProperties[this.mode].colorHover ??
                this.modeProperties[this.mode].color ??
                ""
            style["--borderColor"] = this.borderColor ?? this.modeProperties[this.mode].borderColor ?? ""
            style["--borderHoverColor"] =
                this.borderHoverColor ?? this.modeProperties[this.mode].borderHoverColor ?? this.modeProperties[this.mode].borderColor ?? ""
            style["--borderActiveColor"] =
                this.borderActiveColor ??
                this.modeProperties[this.mode].borderActiveColor ??
                this.modeProperties[this.mode].borderColor ??
                ""
            style["--iconColor"] = this.iconColor ?? this.modeProperties[this.mode].iconColor ?? ""
            style["--iconHoverColor"] =
                this.iconHoverColor ?? this.modeProperties[this.mode].iconHoverColor ?? this.modeProperties[this.mode].iconColor ?? ""
            style["--border"] = this.border ?? this.modeProperties[this.mode].border ?? "1px solid"
            style.borderRadius = this.borderRadius
            style.fontWeight = this.fontWeight
            style.padding = this.padding
            style.lineHeight = this.lineHeight
            if (this.fontSize !== undefined) {
                style.fontSize = this.fontSize
            }
            if (this.borderWidth !== undefined) {
                style.borderWidth = this.borderWidth
            }
            if (this.width !== undefined) {
                style.width = this.width
                style.maxWidth = "unset"
            }
            if (this.height !== undefined) {
                style.height = this.height
            }
            return style
        },
    },
    methods: {
        click(e: MouseEvent) {
            if (this.isMobile) {
                setTimeout(
                    () => {
                        this.$emit("click", e)
                    },
                    this.mode === "gradient" ? 300 : 100,
                )
            } else {
                this.$emit("click", e)
            }
        },
        touchStart() {
            this.isTouch = true
        },
        touchEnd() {
            setTimeout(
                () => {
                    this.isTouch = false
                },
                this.mode === "gradient" ? 300 : 300,
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
                this.mode === "gradient" ? 300 : 300,
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
    $background: var(--background);
    $backgroundHoverColor: var(--backgroundHoverColor);
    $backgroundActiveColor: var(--backgroundActiveColor);
    $backgroundPosition: var(--backgroundPosition);
    $color: var(--color);
    $colorHover: var(--colorHover);
    $colorActive: var(--colorActive);
    $border: var(--border);
    $borderColor: var(--borderColor);
    $borderHoverColor: var(--borderHoverColor);
    $borderActiveColor: var(--borderActiveColor);
    $iconColor: var(--iconColor);
    $iconHoverColor: var(--iconHoverColor);

    border: $border;
    background: $background;
    border-color: $borderColor;
    color: $color;

    font-family: "Montserrat", sans-serif;
    position: relative;
    display: inline-flex;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    user-select: none;
    cursor: pointer;
    transition: all 0.3s, color 0.3s, background 0.3s ease-in-out;
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

    & .icon {
        background-color: $iconColor;
    }

    &:not(.mobile) {
        &:hover {
            background: $backgroundHoverColor;
            border-color: $borderHoverColor;
            color: $colorHover;

            & .icon {
                background-color: $iconHoverColor;
            }
        }

        &.active,
        &.touch,
        &.loading {
            background: $backgroundActiveColor;
            border-color: $borderActiveColor;
            color: $colorActive;
        }
    }

    &.white-to-crimson {
        transition: all 0.3s ease-in-out, color 0.3s ease-in-out;
    }

    &.gradient {
        &:not(.mobile) {
            &:hover {
                background-position: $backgroundPosition !important;
            }
        }

        &.touch {
            background-position: $backgroundPosition !important;
        }
    }

    &.just-text {
        text-transform: unset;
    }

    &:disabled,
    &.disabled {
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

        &.touch,
        &.loading {
            background: $backgroundActiveColor;
            border-color: $borderActiveColor;
            color: $colorActive;
        }

        &.s,
        &.m,
        &.l,
        &.xl {
            height: 38px;
        }

        &.s {
            max-width: 124px;
        }

        &.xl {
            max-width: 314px;
        }

        & > .caption {
            & > .icon {
                mask-size: 90%;
            }
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
