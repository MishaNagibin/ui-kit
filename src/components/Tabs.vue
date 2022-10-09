<script lang="ts">
import Vue, { VNode, VNodeData, VNodeChildren } from "vue"

export default Vue.extend({
    name: "cTabs",
    props: {
        tabIndex: {
            type: Number,
            default: undefined,
        },
        isBorderFitContent: {
            type: Boolean,
            default: false,
        },
        isNoBorder: {
            type: Boolean,
            default: false,
        },
        isNotStretchTabs: {
            type: Boolean,
            default: false,
        },
        activeColor: {
            type: String,
            default: "#3f51b5",
            validator: (v: string) => ![""].includes(v),
        },
        hoverColor: {
            type: String,
            default: "#3f51b5",
            validator: (v: string) => ![""].includes(v),
        },
        borderActiveColor: {
            type: String,
            default: "#3f51b5",
            validator: (v: string) => ![""].includes(v),
        },
        borderColor: {
            type: String,
            default: "#d6d6e1",
            validator: (v: string) => ![""].includes(v),
        },
        renderAllTabs: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            internalTabIndex: this.tabIndex as number | undefined,
        }
    },
    watch: {
        internalTabIndex(n?: number) {
            this.$emit("tab-index-change", n)
        },
        tabIndex(n?: number) {
            if (this.internalTabIndex === n) {
                return
            }

            this.internalTabIndex = n
        },
    },
    mounted() {
        window.addEventListener("resize", this.resize)
        setTimeout(() => {
            this.resize()
        }, 300)
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.resize)
    },
    methods: {
        resize() {
            setTimeout(() => {
                this.updateSliderPos()
            }, 200)
        },
        changeTabIndex(i: number) {
            this.internalTabIndex = i
        },
        updateSliderPos() {
            if (typeof window === "undefined") {
                return
            }

            const slider = this.$refs.slider as HTMLDivElement
            const border = this.$refs.border as HTMLDivElement
            if (this.internalTabIndex === undefined) {
                slider.style.display = "none"

                return
            }

            const tabs = this.$refs.tabs as HTMLUListElement
            const children = tabs.children[this.internalTabIndex] as HTMLElement
            if (!children) {
                slider.style.display = "none"

                return
            }

            if (!this.isNoBorder) {
                if (this.isBorderFitContent) {
                    let fitWidth = 0
                    for (const i of tabs.children as any) {
                        fitWidth += i.offsetWidth
                    }
                    border.style.width = `${fitWidth}px`
                } else {
                    border.style.width = `100%`
                }
                border.style.display = "block"
                border.style.top = `${children.offsetTop + children.offsetHeight - 1 - 10}px`
            }

            slider.style.display = "block"
            slider.style.backgroundColor = this.borderActiveColor
            slider.style.left = `${children.offsetLeft + (this.internalTabIndex !== 0 ? 15 : 0)}px`
            slider.style.width = `${
                children.offsetWidth -
                ([0, tabs.children.length - 1].includes(this.internalTabIndex)
                    ? 15
                    : ![0, tabs.children.length - 1].includes(this.internalTabIndex)
                        ? 30
                        : 0)
            }px`
            slider.style.top = `${children.offsetTop + children.offsetHeight - 1 - 10}px`
        },
    },
    render(h) {
        const slots: VNode[] = (this.$slots.default || []).filter(
            (v) => v.componentOptions !== undefined && v.componentOptions.tag === "cTab",
        )

        if (slots.length < 1) {
            return h(undefined)
        }

        const tabNames = slots.map((v, i) => {
            if (!v.data || !v.data.scopedSlots || !v.data.scopedSlots.caption) {
                return undefined
            }

            const isActive = i === this.internalTabIndex

            const caption = h("div", v.data.scopedSlots.caption(null) as VNodeData | undefined)
            const classes: { [key: string]: boolean } = {
                ["active"]: isActive,
            }

            return h(
                "li",
                {
                    class: classes,
                    style: { "--activeColor": this.activeColor, "--hoverColor": this.hoverColor },
                    on: { click: () => this.changeTabIndex(i) },
                },
                [caption].filter((i) => i !== undefined),
            )
        })

        const main: VNodeChildren = []
        if (this.internalTabIndex !== undefined && this.internalTabIndex < tabNames.length) {
            for (let i = 0; i < (this.renderAllTabs ? slots.length : 1); i++) {
                const currentTab = slots[this.renderAllTabs ? i : this.internalTabIndex]
                const body: VNode[] = currentTab.componentOptions ? currentTab.componentOptions.children ?? [] : []
                const staticClass = (currentTab.data ?? {}).staticClass
                const dynamicClasses: any[] = (currentTab.data ?? {}).class ?? []
                const bodyClasses: any[] = [staticClass, ...dynamicClasses].filter((i) => i !== undefined)
                main.push(
                    h(
                        "div",
                        { style: { display: !this.renderAllTabs || this.internalTabIndex === i ? "block" : "none" }, class: bodyClasses },
                        body,
                    ),
                )
            }
        }

        this.$nextTick(() => this.updateSliderPos())

        const renderItems = [h("ul", { class: "tabs", ref: "tabs" }, tabNames), h("div", { class: "slider", ref: "slider" })]
        if (!this.isNoBorder) {
            renderItems.push(h("div", { style: { "--borderColor": this.borderColor }, class: "border", ref: "border" }))
        }
        return h("div", { class: ["ui-tabs", { "not-stretch-tabs": this.isNotStretchTabs || this.isBorderFitContent }] }, [
            ...renderItems,
            ...main,
        ])
    },
})
</script>

<style lang="scss" scoped>
@import "../styles/colors";

.ui-tabs {
    position: relative;
    display: flex;
    flex-flow: column nowrap;

    &.not-stretch-tabs {
        width: -webkit-fill-available;
        width: -moz-available;
        -webkit-tap-highlight-color: transparent;

        & > .tabs {
            justify-content: unset;
        }
    }

    & > .tabs {
        position: relative;
        display: flex;
        flex-shrink: 0;
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        user-select: none;
        transition: 0.2s;
        list-style: none;
        justify-content: space-between;
        letter-spacing: 0.06em;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;

        li {
            display: flex;
            flex-shrink: 0;
            padding: 15px;
            cursor: pointer;
            $activeColor: var(--activeColor);
            transition: color 0.3s;

            &:first-of-type {
                padding-left: 0;
            }

            &:last-of-type {
                padding-right: 0;
            }

            &:hover {
                color: var(--hoverColor);
            }

            &.active {
                color: $activeColor;
                filter: drop-shadow(0px 0px 0px $activeColor);
            }
        }
    }

    & > .slider,
    & > .border {
        position: absolute;
        height: 2px;
        flex-shrink: 0;
        transition: 0.2s;
        border-radius: 5px;
        z-index: 2;
    }

    & > .border {
        background-color: var(--borderColor);
        z-index: 1;
    }

    &.code {
        & > .tabs,
        & > .slider,
        & > .border {
            display: none !important;
        }
    }
}
</style>
