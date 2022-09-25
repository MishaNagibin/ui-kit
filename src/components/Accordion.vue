<script lang="ts">
import Vue from "vue"
import { Prop } from "vue/types/options"

export default Vue.extend({
    name: "cAccordion",
    functional: true,
    props: {
        title: {
            type: String,
        },
        maxWidth: {
            type: String,
            default: "unset",
        },
        headerName: {
            type: String,
        },
        onlyOneCanActive: {
            type: Boolean,
            default: false,
        },
        headers: {
            type: Array as Prop<string[]>,
            default: (): string[] => [],
        },
        headersByIndexes: {
            type: Object as Prop<{ [key: number]: string }>,
        },
        notActiveColor: {
            type: String,
            default: "#1e1e1e",
        },
        hoverNotActiveColor: {
            type: String,
            default: "#1e1e1e",
        },
        activeColor: {
            type: String,
            default: "#3f51b5",
        },
        hoverActiveColor: {
            type: String,
            default: "#4960df",
        },
        iconNotActiveColor: {
            type: String,
            default: "#e7e7ea",
        },
        iconHoverNotActiveColor: {
            type: String,
            default: "#8e8e8e",
        },
    },
    render(h, ctx) {
        let activeElements = [] as HTMLElement[]
        const resize = () => {
            for (let a of activeElements) {
                const currentHeight = a.getClientRects()[0].height
                let newHeight = 15

                for (let i of Array.from(a.children)) {
                    newHeight += i.clientHeight
                }

                if (currentHeight !== newHeight) {
                    a.style.height = `${newHeight}px`
                }
            }
        }
        window.addEventListener("resize", resize)
        const setActive = (e: HTMLElement) => {
            const isActive = e.classList.contains("active")
            if (ctx.props.onlyOneCanActive && !isActive) {
                if (activeElements.length > 0) {
                    for (let a of activeElements) {
                        a.style.height = "24px"
                        a.classList.remove("active")
                    }
                    activeElements = []
                }
            }
            if (!isActive) {
                const items = e.children
                let height = 15
                for (let i of Array.from(items)) {
                    height += i.clientHeight
                }
                e.style.height = `${height}px`
                e.classList.add("active")
                activeElements.push(e)
            } else {
                e.style.height = "24px"
                e.classList.remove("active")
                activeElements = activeElements.filter((i) => i !== e)
            }
        }
        const renderItems = [
            h("ul", [
                ctx.children.map((v, i) => {
                    return h(
                        "li",
                        {
                            style: {
                                "--notActiveColor": ctx.props.notActiveColor,
                                "--hoverNotActiveColor": ctx.props.hoverNotActiveColor,
                                "--activeColor": ctx.props.activeColor,
                                "--hoverActiveColor": ctx.props.hoverActiveColor,
                                "--iconNotActiveColor": ctx.props.iconNotActiveColor,
                                "--iconHoverNotActiveColor": ctx.props.iconHoverNotActiveColor,
                            },
                            ref: `item${i + 1}`,
                            on: {
                                click: (e: any) => {
                                    if (e.target.localName === "header") {
                                        setActive(e.target.parentElement)
                                    }
                                },
                            },
                        },
                        [
                            h("header", [
                                `${
                                    ctx.props.headersByIndexes !== undefined
                                        ? `${ctx.props.headersByIndexes[i]}`
                                        : ctx.props.headers.length > 0
                                            ? `${ctx.props.headers[i]}`
                                            : `${ctx.props.headerName ?? ""} ${i + 1}`
                                }`,
                            ]),
                            v,
                        ],
                    )
                }),
            ]),
        ]
        if ((ctx.props.title ?? "").length > 0) {
            renderItems.unshift(h("h2", [`${ctx.props.title}`]))
        }
        return h("div", { class: "ui-accordion", style: { "--maxWidth": ctx.props.maxWidth } }, [...renderItems])
    },
})
</script>

<style lang="scss" scoped>
@import "../styles/colors";

.ui-accordion {
    $maxWidth: var(--maxWidth);
    display: flex;
    flex-flow: column;
    max-width: $maxWidth;

    & > h2 {
        padding-bottom: 10px;
        margin-bottom: 10px;
        border-bottom: 1px solid $gray-400;
    }

    & > ul {
        margin-top: 0;
        padding: 0;
        display: block;
        list-style: none;

        & > li {
            $notActiveColor: var(--notActiveColor);
            $hoverNotActiveColor: var(--hoverNotActiveColor);
            $activeColor: var(--activeColor);
            $hoverActiveColor: var(--hoverActiveColor);
            $iconNotActiveColor: var(--iconNotActiveColor);
            $iconHoverNotActiveColor: var(--iconHoverNotActiveColor);

            padding: 10px;
            border-bottom: 1px solid #e7e7ea;
            height: 24px;
            overflow: hidden;
            transition: all 0.3s ease-in-out;

            &:last-of-type {
                border-bottom: none;
            }

            &.active {
                & > header {
                    color: $activeColor;

                    &::after {
                        transform: rotate(-90deg);
                        background-color: $activeColor;
                    }

                    &:hover {
                        color: $hoverActiveColor;

                        &::after {
                            background-color: $hoverActiveColor;
                        }
                    }
                }
            }

            & > header {
                position: relative;
                cursor: pointer;
                font-weight: 600;
                display: flex;
                justify-content: space-between;
                margin-bottom: 16px;
                transition: color 0.3s ease-in-out;
                color: $notActiveColor;

                &::after {
                    height: 30px;
                    width: 30px;
                    top: -2px;
                    right: -2px;
                    content: "";
                    position: absolute;
                    mask-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBkPSJNMjk0LjEsMjU2TDE2NywxMjljLTkuNC05LjQtOS40LTI0LjYsMC0zMy45czI0LjYtOS4zLDM0LDBMMzQ1LDIzOWM5LjEsOS4xLDkuMywyMy43LDAuNywzMy4xTDIwMS4xLDQxNw0KCWMtNC43LDQuNy0xMC45LDctMTcsN2MtNi4xLDAtMTIuMy0yLjMtMTctN2MtOS40LTkuNC05LjQtMjQuNiwwLTMzLjlMMjk0LjEsMjU2eiIvPg0KPC9zdmc+");
                    background-color: $iconNotActiveColor;
                    transform: rotate(90deg);
                    transition: 0.3s;
                }

                & > .icon {
                    mask-repeat: no-repeat;
                    mask-position: center;
                    mask-size: 100%;
                    transition: all 0.3s ease-in-out;
                    cursor: pointer;
                    margin-right: 35px;

                    &.trash {
                        mask-size: 80%;
                    }

                    &:hover {
                        background-color: $hoverActiveColor;
                    }
                }

                &:hover {
                    color: $hoverNotActiveColor;

                    &::after {
                        background-color: $iconHoverNotActiveColor;
                    }
                }
            }
        }
    }

    & > .hidden {
        visibility: hidden;
        opacity: 0;
        height: 0;
    }
}
</style>
