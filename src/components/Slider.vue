<template>
    <div :class="['ui-slider', { mobile: isMobile }]">
        <cArrowSVG
            v-if="!isMobile && isShowArrows && !isAutoplay"
            :size="arrowSize"
            class="prev"
            mode="circle"
            @click="prev"
        />
        <div
            class="carousel"
            ref="carousel"
            @mouseover="mouseOver"
            @mouseout="mouseOut"
        >
            <div
                :style="{ 'margin-left': isShowArrows && !isMobile && itemsCount > 2 ? `-${itemWidth}px` : 0 }"
                class="list"
                ref="items"
            >
                <slot />
            </div>
        </div>
        <cArrowSVG
            v-if="!isMobile && isShowArrows && !isAutoplay"
            :size="arrowSize"
            mode="circle"
            @click="next"
        />
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import cArrowSVG from "@/components/ArrowSVG.vue"

export default Vue.extend({
    name: "cSlider",
    components: { cArrowSVG },
    props: {
        isMobile: {
            type: Boolean,
            default: false,
        },
        itemMargin: {
            type: Number,
            default: 0,
        },
        isLoaded: {
            type: Boolean,
            default: false,
        },
        itemsCount: {
            type: Number,
            default: 0,
        },
        arrowSize: {
            type: String,
            default: "m",
            validator: (v: string) => ["s", "m", "l"].includes(v),
        },
        needReset: {
            type: Boolean,
            default: false,
        },
        isAutoplay: {
            type: Boolean,
            default: false,
        },
        autoplayDuration: {
            type: Number,
            default: 1500,
        },
    },
    data() {
        return {
            offset: 0,
            isShowArrows: true,
            itemWidth: 0,
            order: 0,
            round: 0,
            isMovementWas: false,
            intervalID: null as number | null,
        }
    },
    watch: {
        isMobile(n) {
            this.movement()
            if (n) {
                const items = this.$refs.items as HTMLElement
                if (items.style.transform.length > 0) {
                    items.style.transform = ""
                    this.order = 0
                    this.round = 0
                    this.offset = 0

                    for (let i = 0; i < this.itemsCount; i++) {
                        (items.children[i] as HTMLElement).style.transform = ""
                    }
                }
            }
        },
        isLoaded(n) {
            if (n) {
                this.$nextTick(() => {
                    this.resize()
                })
            }
        },
        itemsCount() {
            this.$nextTick(() => {
                if (this.needReset) {
                    this.reset()
                }
                this.resize()
            })
        },
        isShowArrows() {
            this.movement()
        },
    },
    mounted() {
        window.addEventListener("resize", this.resize)
        this.resize()
        if (this.isLoaded) {
            this.movement()
        }
        if (this.isAutoplay) {
            this.intervalID = window.setInterval(this.next, this.autoplayDuration)
        }
        window.addEventListener("blur", this.windowBlur)
        window.addEventListener("focus", this.windowFocus)
        document.addEventListener("visibilitychange", this.visibilityChange)
    },
    beforeDestroy() {
        if (this.intervalID !== null) {
            clearInterval(this.intervalID)
        }
        window.removeEventListener("resize", this.resize)
        window.removeEventListener("blur", this.windowBlur)
        window.removeEventListener("focus", this.windowFocus)
        document.removeEventListener("visibilitychange", this.visibilityChange)
    },
    methods: {
        windowBlur() {
            if ((process as any).browser) {
                this.mouseOver()
            }
        },
        windowFocus() {
            if ((process as any).browser) {
                this.mouseOut()
            }
        },
        visibilityChange() {
            if (document.hidden) {
                this.mouseOver()
            } else {
                this.mouseOut()
            }
        },
        mouseOver() {
            if (this.isAutoplay && this.intervalID !== null) {
                clearInterval(this.intervalID)
                this.intervalID = null
            }
        },
        mouseOut() {
            if (this.isAutoplay && this.intervalID === null) {
                this.intervalID = window.setInterval(this.next, this.autoplayDuration)
            }
        },
        reset() {
            const items = this.$refs.items as HTMLElement
            items.style.transform = "translateX(0px)"
            for (const i in items.children) {
                if (!isNaN(Number(i))) {
                    (items.children[i] as HTMLElement).style.transform = "translateX(0px)"
                }
            }
            this.order = 0
            this.round = 0
            this.offset = 0
            this.movement()
        },
        movement() {
            if (this.itemsCount > 2) {
                if (this.isShowArrows && !this.isMovementWas && !this.isMobile) {
                    const items = this.$refs.items as HTMLElement
                    const firstChild = items.firstChild as HTMLElement
                    const lastChild = items.lastChild as HTMLElement
                    if (lastChild !== null && firstChild !== null) {
                        items.removeChild(lastChild)
                        items.insertBefore(lastChild, firstChild)
                        this.isMovementWas = true
                    }
                }
                if ((!this.isShowArrows || this.isMobile) && this.isMovementWas) {
                    const items = this.$refs.items as HTMLElement
                    const item = items.firstChild as HTMLElement
                    if (item !== null) {
                        items.removeChild(item)
                        items.appendChild(item)
                        this.isMovementWas = false
                    }
                }
            }
        },
        resize() {
            const items = this.$refs.items as HTMLElement
            const carousel = this.$refs.carousel as HTMLElement
            if (this.isMobile || items === undefined || items.children.length === 0) {
                return
            }
            this.itemWidth = (items.children[0] as HTMLElement).offsetWidth + this.itemMargin
            const itemsSlideCount = Math.round(carousel.clientWidth / this.itemWidth)
            this.isShowArrows = this.itemsCount > itemsSlideCount
        },
        next() {
            const items = this.$refs.items as HTMLElement
            this.order++
            if (this.order > 0 && [0, -1].includes(this.round)) {
                this.round = 1
            }
            if ((this.itemsCount * this.round) / this.order === 1 || (this.order > this.itemsCount * (this.round + 1) && this.round < -1)) {
                this.round++
            }
            const item = items.children[this.offset] as HTMLElement
            const round =
                this.round < 0 ? this.round * -1 : this.round === 0 ? 1 : this.offset === this.itemsCount - 1 ? this.round - 1 : this.round
            const itemTranslateX =
                this.order <= 0
                    ? `${
                        this.itemWidth * (this.itemsCount * round) * -1 +
                          this.itemWidth * (this.itemsCount * (this.round < -1 && this.order * -1 >= this.itemsCount ? 1 : round))
                    }`
                    : `${this.itemWidth * (this.itemsCount * round)}`
            const itemsTranslateX = this.order < 0 ? `${-this.itemWidth * this.order}` : `-${this.itemWidth * this.order}`
            item.style.transform = `translateX(${itemTranslateX}px)`
            items.style.transform = `translateX(${itemsTranslateX}px)`
            this.offset = this.offset + 1 === this.itemsCount ? 0 : this.offset + 1
        },
        prev() {
            const items = this.$refs.items as HTMLElement
            this.order--
            if (this.order < 0 && [0, 1].includes(this.round)) {
                this.round = -1
            }
            if (
                (this.itemsCount * this.round) / this.order === -1 ||
                (this.order < 0 && (this.itemsCount * this.round * -1) / this.order === -1) ||
                (this.order < this.itemsCount * (this.round - 1) && this.round > 1)
            ) {
                this.round--
            }
            const offset = this.offset - 1 < 0 ? this.itemsCount - 1 : this.offset - 1
            const item = items.children[offset] as HTMLElement
            const round = this.round < 0 ? (offset === 0 ? this.round + 1 : this.round) * -1 : this.round === 0 ? 1 : this.round
            const itemTranslateX =
                this.order < 0
                    ? `-${this.itemWidth * (this.itemsCount * round)}`
                    : `${
                        this.itemWidth * (this.itemsCount * round) +
                          this.itemWidth *
                              (this.itemsCount * (this.round > 1 && this.order >= this.itemsCount ? round - (round - 1) : round)) *
                              -1
                    }`
            const itemsTranslateX = this.order < 0 ? `${-this.itemWidth * this.order}` : `-${this.itemWidth * this.order}`
            item.style.transform = `translateX(${itemTranslateX}px)`
            items.style.transform = `translateX(${itemsTranslateX}px)`
            this.offset = offset
        },
    },
})
</script>

<style lang="scss" scoped>
@import "../styles/colors";

.ui-slider {
    display: flex;
    flex-flow: row nowrap;
    margin: auto;
    align-items: center;
    position: relative;
    max-width: 1368px;
    margin-bottom: 30px;
    overflow: hidden;

    & > div {
        display: flex;
        flex-flow: row nowrap;
        overflow: hidden;

        &::-webkit-scrollbar {
            display: none;
        }

        & > .list {
            display: flex;
            flex-flow: row nowrap;
            transition: 0.3s;
        }
    }

    &:hover {
        &:deep(.ui-arrow-svg) {
            transform: translateX(0) translateY(calc(20px - 50%));
            opacity: 1;
        }
    }

    &.mobile {
        & > div {
            & > .list {
                overflow-x: auto;
                overflow-y: hidden;
                padding-bottom: 2px;

                &::-webkit-scrollbar {
                    display: none;
                }
            }
        }
    }
}
</style>
