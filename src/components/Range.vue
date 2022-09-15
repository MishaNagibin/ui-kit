<template>
    <div :class="['ui-range', { disabled: inOnePrice, one: isOnlyOneRange }]">
        <span
            v-if="isOnlyOneRange"
            class="name"
        >{{ name }}</span>
        <div
            v-else
            class="values"
        >
            <span>{{ min }} {{ isPrice ? currencySymbol : "" }}</span>
            <span>{{ max }} {{ isPrice ? currencySymbol : "" }}</span>
        </div>
        <div
            :style="{ '--color':color, '--activeColor': activeColor }"
            class="slider"
            ref="slider"
        >
            <span
                :style="{ left: `${start}%`, right: `${end}%` }"
                class="current-range"
            />
            <span
                v-if="!isOnlyOneRange"
                :style="{ left: `${start}%` }"
                class="slider-handle"
                @mousedown="e => mouseDown(e, true)"
                @touchstart="e => mouseDown(e, true)"
            />
            <span
                :style="{ right: `${end}%` }"
                class="slider-handle"
                @mousedown="e => mouseDown(e, false)"
                @touchstart="e => mouseDown(e, false)"
            />
        </div>
        <div
            v-if="!isOnlyDraging && !isOnlyOneRange"
            class="editors"
        >
            <div :class="['min', { changed: currentMin !== min } ]">
                <cEdit
                    :class="[isPrice ? currency: '', { 'show-border': isChanginMin }]"
                    :placeholder="`${currentMin}`"
                    :value="`${currentMin}`"
                    is-hide-status
                    @change="changeMin"
                />
            </div>
            <div :class="['max', { changed: currentMax !== max } ]">
                <cEdit
                    :class="[isPrice ? currency: '', { 'show-border': isChanginMax }]"
                    :placeholder="`${currentMax}`"
                    :value="`${currentMax}`"
                    is-hide-status
                    @change="changeMax"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import cEdit from "@/components/Edit.vue"

export default Vue.extend({
    name: "cRange",
    components: { cEdit },
    props: {
        max: {
            type: Number,
        },
        min: {
            type: Number,
        },
        minRange: {
            type: Number,
            default: 10,
        },
        resetID: {
            type: Number,
        },
        internalMax: {
            type: Number,
        },
        internalMin: {
            type: Number,
        },
        isPrice: {
            type: Boolean,
            default: false,
        },
        currency: {
            type: String,
            default: "RUB",
            validator: (v: string) => ["RUB", "USD", "EUR"].includes(v),
        },
        isOnlyDraging: {
            type: Boolean,
            default: false,
        },
        isOnlyOneRange: {
            type: Boolean,
            default: false,
        },
        name: {
            type: String,
        },
        color: {
            type: String,
            default: "#eeeeee",
        },
        activeColor: {
            type: String,
            default: "#3f51b5",
        },
    },
    data() {
        return {
            currentMax: this.max,
            currentMin: this.min,
            cursorLeft: undefined as number | undefined,
            isDragging: false,
            isLeft: false,
            startPercent: undefined as number | undefined,
            isChanginMin: false,
            isChanginMax: false,
        }
    },
    computed: {
        end(): number {
            const end = 100 - (this.max - this.min - (this.max - this.currentMax)) / this.weight

            return end >= 0 ? end : 0
        },
        start(): number {
            const start = (this.currentMin - this.min) / this.weight

            return start >= 0 ? start : 0
        },
        weight(): number {
            return (this.max - this.min) / 100
        },
        inOnePrice(): boolean {
            return this.max === this.min
        },
        currencySymbol(): string {
            let symbol = ""
            if (this.isPrice) {
                switch (this.currency) {
                case "USD":
                    symbol = "$"
                    break
                case "EUR":
                    symbol = "€"
                    break
                default:
                    symbol = "₽"
                }
            }

            return symbol
        },
    },
    watch: {
        max(n) {
            this.currentMax = isFinite(n) ? n : ""
        },
        min(n) {
            this.currentMin = isFinite(n) ? n : ""
        },
        resetID() {
            this.currentMin = this.min
            this.currentMax = this.max
        },
        internalMax(n) {
            if (n !== this.currentMax && n !== undefined) {
                this.changeMax(n)
            }

            if (n === undefined) {
                this.currentMax = this.max
            }
        },
        internalMin(n) {
            if (n !== this.currentMin && n !== undefined) {
                this.changeMin(n)
            }

            if (n === undefined) {
                this.currentMin = this.min
            }
        },
    },
    methods: {
        change(min: number, max: number, needEmit = true) {
            if (this.isDragging === false && this.currentMin === min && this.currentMax === max) {
                this.$forceUpdate()
            }

            this.currentMin = min
            this.currentMax = max

            if (this.isDragging === false && needEmit) {
                if (this.currentMin === this.min && this.currentMax === this.max) {
                    this.$emit("change", undefined, undefined)
                } else {
                    this.$emit("change", this.currentMin, this.currentMax)
                }
            }
        },
        changeCurrentMax(v: number, needEmit = true) {
            let currentMax = Math.round(v)
            let currentMin = this.currentMin

            if (currentMax > this.max) {
                currentMax = this.max
            } else if (currentMax <= this.min + this.minRange) {
                currentMax = this.min + this.minRange
                currentMin = this.min
            } else if (currentMax <= this.currentMin + this.minRange) {
                currentMin = currentMax - this.minRange
            } else if (isNaN(currentMax)) {
                currentMax = this.currentMax
            }

            this.change(currentMin, currentMax, needEmit)
        },
        changeCurrentMin(v: number, needEmit = true) {
            let currentMin = Math.round(v)
            let currentMax = this.currentMax

            if (currentMin < this.min) {
                currentMin = this.min
            } else if (currentMin >= this.max - this.minRange) {
                currentMin = this.max - this.minRange
                currentMax = this.max
            } else if (currentMin >= currentMax - this.minRange) {
                currentMax = currentMin + this.minRange
            } else if (isNaN(currentMin)) {
                currentMin = this.currentMin
            }

            this.change(currentMin, currentMax, needEmit)
        },
        changeMax(e: Event | number) {
            if (typeof e === "number") {
                this.changeCurrentMax(e, false)
            } else {
                this.changeCurrentMax(Number((e.target as HTMLInputElement).value))
            }
        },
        changeMin(e: Event | number) {
            if (typeof e === "number") {
                this.changeCurrentMin(e, false)
            } else {
                this.changeCurrentMin(Number((e.target as HTMLInputElement).value))
            }
        },
        mouseDown(e: MouseEvent | TouchEvent, isLeft: boolean) {
            const ev = (e as TouchEvent).changedTouches ? (e as TouchEvent).changedTouches[0] : e
            this.isLeft = isLeft
            this.isDragging = true
            this.cursorLeft = (ev as MouseEvent | Touch).pageX
            this.startPercent = isLeft ? this.start : this.end

            if (isLeft) {
                this.isChanginMin = true
            } else {
                this.isChanginMax = true
            }

            document.addEventListener("mousemove", this.mouseMove)
            document.addEventListener("mouseup", this.mouseUp)
            document.addEventListener("touchmove", this.mouseMove)
            document.addEventListener("touchend", this.mouseUp)
            document.body.style.userSelect = "none"
            this.$emit("dragging", this.isDragging)
        },
        mouseMove(e: MouseEvent | TouchEvent) {
            const ev = (e as TouchEvent).changedTouches ? (e as TouchEvent).changedTouches[0] : e
            const pixelsWeight = (this.$refs.slider as HTMLDivElement).clientWidth / 100
            const diff = (ev as MouseEvent | Touch).pageX - (this.cursorLeft as number)
            const percent = this.isLeft ? diff / pixelsWeight : -(diff / pixelsWeight)

            this.isLeft
                ? this.changeCurrentMin(this.min + ((this.startPercent as number) + percent) * this.weight)
                : this.changeCurrentMax(this.max - ((this.startPercent as number) + percent) * this.weight)
        },
        mouseUp() {
            this.isDragging = false
            this.cursorLeft = undefined
            this.startPercent = undefined
            this.isChanginMin = false
            this.isChanginMax = false

            if (this.currentMin === this.min && this.currentMax === this.max) {
                this.$emit("change", undefined, undefined)
            } else {
                this.$emit("change", this.currentMin, this.currentMax)
            }

            document.removeEventListener("mousemove", this.mouseMove)
            document.removeEventListener("touchmove", this.mouseMove)
            document.removeEventListener("mouseup", this.mouseUp)
            document.removeEventListener("touchend", this.mouseUp)
            document.body.style.userSelect = ""
            this.$emit("dragging", this.isDragging)
        },
    },
})
</script>
<style lang="scss" scoped>
@import "../styles/colors";

.ui-range {
    padding: 16px;
    width: 318px;
    box-sizing: border-box;

    & > .values {
        font-weight: 400;
        font-size: 14px;
        color: $gray-900;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    & > .editors {
        display: flex;
        align-items: center;
        justify-content: space-between;

        & > div {
            margin: 0 5px;
            position: relative;

            &:deep(.ui-edit) {
                width: 112px;

                & > div {
                    & > input {
                        margin-top: 2px;
                        padding: 0 22px 0 28px;
                        text-align: right;
                        background: $gray-250;
                        font-weight: 500;
                        border-radius: 5px;
                        font-size: 14px;
                        color: #818ca9;
                        border: 1px solid $gray-250;
                        height: 34px;

                        &:focus {
                            box-shadow: none;
                            border-color: $primary-500;
                        }
                    }

                    &::after,
                    &::before {
                        font-weight: 500;
                        font-size: 14px;
                        content: "";
                        top: 10px;
                        right: -3px;
                        width: 20px;
                        position: absolute;
                        color: #818ca9;
                    }
                }

                &.show-border {
                    border-color: $primary-500;
                }

                &.RUB {
                    & > div {
                        &::after,
                        &::before {
                            content: "₽";
                        }
                    }
                }

                &.USD {
                    & > div {
                        &::after,
                        &::before {
                            content: "$";
                        }
                    }
                }

                &.EUR {
                    & > div {
                        &::after,
                        &::before {
                            content: "€";
                        }
                    }
                }
            }

            &.min {
                &:deep(.ui-edit) {
                    & > div {
                        &::before {
                            content: "от";
                            left: 7px;
                        }
                    }
                }
            }

            &.max {
                &:deep(.ui-edit) {
                    & > div {
                        &::before {
                            content: "до";
                            left: 7px;
                        }
                    }
                }
            }

            &.changed {
                &:deep(.ui-edit) {
                    color: $gray-900;

                    & > div {
                        & > input {
                            color: $gray-900;
                        }

                        &::after {
                            color: $gray-900;
                        }
                    }
                }
            }
        }
    }

    & > .slider {
        $color: var(--color);
        $activeColor: var(--activeColor);
        height: 4px;
        width: calc(100% - 25px);
        margin: 10px auto 20px auto;
        background-color: $color;
        border-radius: 5px;
        display: flex;
        position: relative;

        & > .current-range {
            background-color: $activeColor;
            position: absolute;
            height: 4px;
        }

        & > .slider-handle {
            height: 20px;
            width: 20px;
            position: absolute;
            top: -10px;
            margin: auto -10px;
            background-color: $activeColor;
            border-radius: 50%;
            cursor: pointer;
            border: 2px solid $gray-000;

            &:active {
                z-index: 1;
            }
        }
    }

    &.disabled {
        pointer-events: none;
        opacity: 0.4;
    }

    &.one {
        & > .slider {
            margin-left: 0;
        }
    }
}
</style>
