<template>
    <div
        v-on="listeners"
        :style="{ '--color': color, '--hover-color': hoverColor }"
        :class="['ui-arrow-svg', size, mode, styled, { 'no-shadow': isNoShadow }]"
    >
        <div>
            <span class="icon arrow-part1" />
            <span class="icon arrow-part2" />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
    name: "cArrowSVG",
    props: {
        isUp: {
            type: Boolean,
            default: false,
        },
        color: {
            type: String,
            default: "#818ca9",
        },
        hoverColor: {
            type: String,
            default: "#818ca9",
        },
        size: {
            type: String,
            default: "m",
            validator: (v: string) => ["s", "m", "l"].includes(v),
        },
        mode: {
            type: String,
            default: "normal",
            validator: (v: string) => ["normal", "circle"].includes(v),
        },
        isNoShadow: {
            type: Boolean,
            default: false,
        },
        styled: {
            type: String,
            default: "normal",
            validator: (v: string) => ["normal", "primary"].includes(v),
        },
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
    },
})
</script>

<style lang="scss" scoped>
@import "../styles/colors";
@import "../styles/icons";

.ui-arrow-svg {
    $transition: 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
    $color: var(--color);
    $hoverColor: var(--hover-color);

    &.circle {
        margin-top: 9px !important;
        background-color: $gray-000;
        box-shadow: 1px 3px 10px 1px rgba(12, 7, 38, 0.15);
        justify-content: center;
        align-items: center;
        display: flex;
        border-radius: 50%;
        position: absolute;
        padding: 5px;
        z-index: 3;
        opacity: 0;
        transition: opacity 0.3s ease, transform 0.3s;
        right: 10px;
        left: auto;
        transform: translateX(10px) translateY(calc(20px - 50%));
    }

    &.no-shadow {
        box-shadow: none;
    }

    & > div {
        display: flex;

        & > span {
            transition: opacity $transition, $transition;
            background-color: $color;

            &:first-of-type {
                opacity: 0;
                mask-repeat: no-repeat;
                mask-position: center;
                mask-size: 70%;
                margin-left: 5px;
            }

            &:last-of-type {
                mask-repeat: no-repeat;
                mask-position: center;
                mask-size: 45%;
                margin-left: -25px;
            }
        }
    }

    &.primary {
        background-color: $primary-500;

        & > div {
            & > span {
                background-color: $gray-000;
            }
        }
    }

    &.s {
        &.circle {
            width: 30px;
            height: 30px;
        }

        & > div {
            & > span {
                &:first-of-type {
                    mask-size: 50%;
                    margin-left: 2px;
                }

                &:last-of-type {
                    mask-size: 35%;
                }
            }
        }
    }

    &.m {
        &.circle {
            width: 40px;
            height: 40px;
        }

        & > div {
            & > span {
                &:first-of-type {
                    mask-size: 70%;
                }

                &:last-of-type {
                    mask-size: 45%;
                }
            }
        }
    }

    &.l {
        &.circle {
            width: 50px;
            height: 50px;
        }

        & > div {
            & > span {
                &:first-of-type {
                    mask-size: 90%;
                }

                &:last-of-type {
                    mask-size: 50%;
                    margin-top: -1px;
                }
            }
        }
    }

    &.prev {
        &.circle {
            left: 10px;
            right: auto;
            transform: translateX(-10px) translateY(calc(20px - 50%));
        }

        & > div {
            transform: rotate(180deg);
        }
    }

    &.up {
        & > div {
            transform: rotate(-90deg);
        }
    }

    &.bottom-right {
        & > div {
            transform: rotate(45deg);
        }
    }

    &:hover {
        cursor: pointer;

        & > div {
            & > span {
                background-color: $hoverColor;

                &:first-of-type {
                    opacity: 1;
                }

                &:last-of-type {
                    transform: translateX(4px);
                }
            }
        }

        &.primary {
            background-color: $primary-350;

            & > div {
                & > span {
                    background-color: $gray-000;
                }
            }
        }

        &.l {
            & > div {
                & > span {
                    &:last-of-type {
                        transform: translateX(5px);
                    }
                }
            }
        }
    }
}
</style>
