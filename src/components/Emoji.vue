<template>
    <div
        class="ui-emoji"
        @click="positionEmojiWindow()"
        @mouseenter="positionEmojiWindow()"
    >
        <button
            class="icon smile"
            type="button"
            ref="emojiButton"
        />
        <div ref="emojiWrapper">
            <div :class="{ 'has-often-used': hasOftenUsed }">
                <div class="menu">
                    <template v-for="(e, i) of emoji">
                        <div
                            v-if="e.items.length > 0"
                            :key="i"
                            :data-tooltip="e.name"
                            @click.prevent="goToCategory(i)"
                        >
                            <span :class="['icon', i]" />
                        </div>
                    </template>
                </div>
                <div
                    class="items"
                    ref="items"
                >
                    <template v-for="(e, i) of emoji">
                        <div
                            v-if="e.items.length > 0"
                            :key="i"
                            :class="i"
                        >
                            <span
                                :data-tooltip="e.isItemsCollapsed ? 'Показать' : 'Скрыть'"
                                @click.prevent="[collapse(i, e.isItemsCollapsed), toggleCollapse(i)]"
                            >
                                <span>{{ e.name }}</span>
                                <span :class="['icon', 'arrow-down', { collapsed: e.isItemsCollapsed }]" />
                            </span>
                            <div
                                :data-key="i"
                                :data-collapsed="e.isItemsCollapsed ? 'true' : 'false'"
                                ref="emojiIconsListWrapper"
                            >
                                <div
                                    v-for="(item, index) of e.items"
                                    :key="index"
                                    @click="e => select(e, item)"
                                >
                                    <span>{{ item }}</span>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import { Emoji } from "@/../types/emoji"

export default Vue.extend({
    name: "cEmoji",
    data() {
        return {
            emoji: {
                clock: {
                    name: "Часто используемые",
                    items: [],
                    isItemsCollapsed: false
                },
                smileys: {
                    name: "Смайлы",
                    items: ["😄","😃","😀","😊","😉","😍","😘","😚","😗","😙","😜","😝","😛","😳","😁","😔","😌","😒","😞","😣","😢","😂","😭","😪","😥","😰","😅","😓","😩","😫","😨","😱","😠","😡","😤","😖","😆","😋","😷","😎","😴","😵","😲","😟","😦","😧","👿","😮","😬","😐","😕","😯","😏","😑","👲","👳","👮","👷","💂","👶","👦","👧","👨","👩","👴","👵","👱","👼","👸","😺","😸","😻","😽","😼","🙀","😿","😹","😾","👹","👺","🙈","🙉","🙊","💀","👽"],
                    isItemsCollapsed: false,
                },
                animals: {
                    name: "Животные",
                    items: ["🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼","🐻‍","❄️","🐨","🐯","🦁","🐮","🐷","🐽","🐸","🐵","🙈","🙉","🙊","🐒","🐔","🐧","🐦","🐤","🐣","🐥","🦆","🦅","🦉","🦇","🐺","🐗","🐴","🦄","🐝","🐛","🦋","🐌","🐞","🐜","🦟","🦗","🕷","🕸","🦂","🐢","🐍","🦎","🦖","🦕","🐙","🦑","🦐","🦞","🦀","🐡","🐠","🐟","🐬","🐳","🐋","🦈","🐊","🐅","🐆","🦓","🦍","🦧","🐘","🦛","🦏","🐪","🐫","🦒","🦘","🐃","🐂","🐄","🐎","🐖","🐏","🐑","🦙","🐐","🦌","🐕","🐩","🦮","🐕‍🦺","🐈","🐈","🐓","🦃","🦚","🦜","🦢","🦩","🐇","🦝","🦨","🦡","🦦","🦥","🐁","🐀","🐿","🦔","🐾","🐉","🐲"],
                    isItemsCollapsed: false
                },
                nature: {
                    name: "Природа",
                    items: ["🌵","🎄","🌲","🌳","🌴","🌱","🌿","☘️","🍀","🎍","🎋","🍃","🍂","🍁","🍄","🐚","🌾","💐","🌷","🌹","🥀","🌺","🌸","🌼","🌻","🌞","🌝","🌛","🌜","🌚","🌕","🌖","🌗","🌘","🌑","🌒","🌓","🌔","🌙","🌎","🌍","🌏","🪐","💫","⭐️","🌟","✨","⚡️","☄️","💥","🔥","🌪","🌈","☀️","🌤","⛅️","🌥","☁️","🌦","🌧","⛈","🌩","🌨","❄️","☃️","⛄️","💨","💧","💦","☔️","☂️","🌊","💩","💢","💤"],
                    isItemsCollapsed: false
                },
                food: {
                    name: "Еда",
                    items: ["🍏","🍎","🍐","🍊","🍋","🍌","🍉","🍇","🍓","🍈","🍒","🍑","🥭","🍍","🥥","🥝","🍅","🍆","🥑","🥦","🥬","🥒","🌶","🌽","🥕","🧄","🧅","🥔","🍠","🥐","🥯","🍞","🥖","🥨","🧀","🥚","🍳","🧈","🥞","🧇","🥓","🥩","🍗","🍖","🦴","🌭","🍔","🍟","🍕","🥪","🥙","🧆","🌮","🌯","🥗","🥘","🥫","🍝","🍜","🍲","🍛","🍣","🍱","🥟","🦪","🍤","🍙","🍚","🍘","🍥","🥠","🥮","🍢","🍡","🍧","🍨","🍦","🥧","🧁","🍰","🎂","🍮","🍭","🍫","🍿","🍩","🍪","🌰","🥜","🍯","🥛","🍼","☕️","🍵","🧃","🥤","🍶","🍺","🍻","🥂","🍷","🥃","🍸","🍹","🧉","🍾","🧊","🥄","🍴","🍽","🥣","🥡","🥢","🧂"],
                    isItemsCollapsed: false
                },
                gestures: {
                    name: "Жесты",
                    items: ["👋","🤚","🖐","✋","🖖","👌","🤏","✌️","🤞","🤟","🤘","🤙","👈","👉","👆","🖕","👇","☝️","👍","👎","✊","👊","🤛","🤜","👏","🙌","👐","🤲","🤝","🙏","✍️","💅","🤳","💪","🦾","🦵","🦿","🦶","👣","👂","🦻","👃","🧠","🦷","🦴","👀","👁","👅","👄","💋","🩸"],
                    isItemsCollapsed: false
                },
                clothing: {
                    name: "Одежда и аксессуары",
                    items: ["🧳","🌂","☂️","🧵","🧶","👓","🥽","🎀","🥼","🦺","👔","👕","👖","🧣","🧤","🧥","🧦","👗","👘","🥻","🩱","🩲","🩳","👙","👚","👛","👜","👝","🎒","👞","👟","🥾","🥿","👠","👡","🩰","👢","👑","👒","🎩","🎓","🧢","⛑","💄","💍","💼"],
                    isItemsCollapsed: false
                },
                objects: {
                    name: "Объекты",
                    items: ["⌚️","📱","📲","💻","⌨️","🕹","🗜","💽","💾","💿","📀","📼","📷","📸","📹","🎥","📽","📞","☎️","📟","📠","📺","📻","🧭","⏱","⏲","⏰","🕰","⌛️","⏳","📡","🔋","🔌","💡","🔦","🪔","🧯","🛢","💸","💵","💴","💶","💷","💰","💳","💎","⚖️","🧰","🔧","🔨","⚒","🛠","⛏","🔩","⚙️","🧱","⛓","🧲","🔫","💣","🧨","🪓","🔪","🗡","⚔️","🚬","⚰️","⚱️","🏺","🔮","📿","🧿","💈","⚗️","🔭","🔬","🩹","🩺","💊","💉","🩸","🧬","🦠","🧫","🧪","🌡","🧹","🧺","🧻","🚽","🚰","🚿","🛁","🛀","🧼","🪒","🧽","🧴","🔑","🗝","🚪","🪑","🛋","🛏","🛌","🧸","🛒","🎁","🎈","🎏","🎀","🎊","🎉","🎎","🏮","🎐","🧧","✉️","📩","📨","📧","💌","📥","📤","📦","📪","📫","📬","📭","📮","📯","📜","📃","📄","📑","🧾","📊","📈","📉","🗒","🗓","📆","📅","🗑","📇","🗃","🗳","📋","📁","📂","🗂","📰","📓","📔","📒","📕","📗","📘","📙","📚","📖","🔖","🧷","🔗","📎","🖇","📐","📏","🧮","📌","📍","✂️","🖊","🖋","✒️","🖌","🖍","📝","✏️","🔍","🔎","🔏","🔐","🔒","🔓"],
                    isItemsCollapsed: false
                },
                symbols: {
                    name: "Символы",
                    items: ["❤️","🧡","💛","💚","💙","💜","🖤","🤍","🤎","💔","❣️","💕","💞","💓","💗","💖","💘","💝","💟","☮️","✝️","☪️","🕉","☸️","✡️","🔯","🕎","☯️","☦️","🛐","⛎","♈️","♉️","♊️","♋️","♌️","♍️","♎️","♏️","♐️","♑️","♒️","♓️","🆔","⚛️","🉑","☢️","☣️","📴","📳","🈶","🈚️","🈸","🈺","🈷️","✴️","🆚","💮","🉐","㊙️","㊗️","🈴","🈵","🈹","🈲","🅰️","🅱️","🆎","🆑","🅾️","🆘","❌","⭕️","🛑","⛔️","📛","🚫","💯","💢","♨️","🚷","🚯","🚳","🚱","🔞","📵","🚭","❗️","❕","❓","❔","‼️","⁉️","🔅","🔆","〽️","⚠️","🚸","🔱","⚜️","🔰","♻️","✅","🈯️","💹","❇️","✳️","❎","🌐","💠","Ⓜ️","🌀","💤","🏧","🚾","♿️","🅿️","🈳","🈂️","🛂","🛃","🛄","🛅","🚹","🚺","🚼","⚧","🚻","🚮","🎦","📶","🈁","🔣","ℹ️","🔤","🔡","🔠","🆖","🆗","🆙","🆒","🆕","🆓","0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣","🔟","🔢","#️⃣","*️⃣","⏏️","▶️","⏸","⏯","⏹","⏺","⏭","⏮","⏩","⏪","⏫","⏬","◀️","🔼","🔽","➡️","⬅️","⬆️","⬇️","↗️","↘️","↙️","↖️","↕️","↔️","↪️","↩️","⤴️","⤵️","🔀","🔁","🔂","🔄","🔃","🎵","🎶","➕","➖","➗","✖️","♾","💲","💱","™️","©️","®️","〰️","➰","➿","🔚","🔙","🔛","🔝","🔜","✔️","☑️","🔘","🔴","🟠","🟡","🟢","🔵","🟣","⚫️","⚪️","🟤","🔺","🔻","🔸","🔹","🔶","🔷","🔳","🔲","▪️","▫️","◾️","◽️","◼️","◻️","🟥","🟧","🟨","🟩","🟦","🟪","⬛️","⬜️","🟫","🔈","🔇","🔉","🔊","🔔","🔕","📣","📢","👁‍🗨","💬","💭","🗯","♠️","♣️","♥️","♦️","🃏","🎴","🀄️","🕐","🕑","🕒","🕓","🕔","🕕","🕖","🕗","🕘","🕙","🕚","🕛","🕜","🕝","🕞","🕟","🕠","🕡","🕢","🕣","🕤","🕥","🕦","🕧"],
                    isItemsCollapsed: false
                },
            } as Emoji,
            positionListenerAttached: false as boolean,
        }
    },
    computed: {
        hasOftenUsed(): boolean {
            return this.emoji.clock.items.length > 0
        },
    },
    beforeMount() {
        const oftenUsed = JSON.parse(localStorage.getItem("ui-kit-often-used-emoji") ?? "[]")
        if (oftenUsed.length > 0) {
            this.emoji.clock.items = oftenUsed
        }
    },
    methods: {
        select(e: Event, item: any) {
            const target =
                (e.target as HTMLElement).nodeName === "SPAN"
                    ? ((e.target as HTMLElement).parentElement as HTMLElement)
                    : (e.target as HTMLElement)
            target.classList.add("press")
            setTimeout(() => {
                target.classList.remove("press")
            }, 200)
            this.$emit("select", item)
            if (this.hasOftenUsed) {
                if (!this.emoji.clock.items.includes(item)) {
                    if (this.emoji.clock.items.length === 50) {
                        this.emoji.clock.items.pop()
                    }
                    this.emoji.clock.items.unshift(item)
                }
            } else {
                this.emoji.clock.items = [item]
            }
            localStorage.setItem("ui-kit-often-used-emoji", JSON.stringify(this.emoji.clock.items))
        },
        collapse(key: string, value: boolean) {
            this.$data.emoji[key].isItemsCollapsed = !value
        },
        toggleCollapse(key: string) {
            const emojiLists: HTMLDivElement | any = this.$refs.emojiIconsListWrapper

            const collapse = (element: HTMLDivElement | any) => {
                requestAnimationFrame(() => {
                    element.style.height = `${element.scrollHeight}px`

                    requestAnimationFrame(() => {
                        element.style.height = "0"
                    })
                })
            }

            const expand = (element: HTMLDivElement | any) => {
                element.style.height = `${element.scrollHeight}px`

                element.addEventListener("transitionend", function transition() {
                    element.removeEventListener("transitionend", transition)
                    element.style.height = null
                })
            }

            for (let listIndex = 0; listIndex < emojiLists.length; listIndex++) {
                if (
                    key === emojiLists[listIndex].getAttribute("data-key") &&
                    emojiLists[listIndex].getAttribute("data-collapsed") === "true"
                ) {
                    expand(emojiLists[listIndex])
                    emojiLists[listIndex].isItemsCollapsed = false
                    break
                }

                if (
                    key === emojiLists[listIndex].getAttribute("data-key") &&
                    emojiLists[listIndex].getAttribute("data-collapsed") === "false"
                ) {
                    collapse(emojiLists[listIndex])
                    emojiLists[listIndex].isItemsCollapsed = true
                    break
                }
            }
        },
        goToCategory(category: string) {
            const items = this.$refs.items as HTMLElement
            const target = items.querySelector(`.${category}`) as HTMLElement
            items.scrollTo({
                top: target.offsetTop - 40,
                behavior: "smooth",
            })
        },
        positionEmojiWindow() {
            if (typeof window !== "undefined") {
                const positionCallback = () => {
                    const button: HTMLButtonElement | any = this.$refs.emojiButton
                    const emojiWrapper: HTMLDivElement | any = this.$refs.emojiWrapper
                    const DesktopLeftOffset: number = 260 // menu width + padding
                    const MobileLeftOffset: number = 60 // menu width + padding
                    const rightOffset: number = 10
                    const buttonPosition = button.getBoundingClientRect()
                    const emojiWrapperPosition = emojiWrapper.getBoundingClientRect()

                    // left position
                    if (
                        ((window.innerWidth > 700 && buttonPosition.left < DesktopLeftOffset + emojiWrapperPosition.width / 1.25) ||
                            (window.innerWidth <= 700 && buttonPosition.left < MobileLeftOffset + emojiWrapperPosition.width / 1.25)) &&
                        window.innerWidth - buttonPosition.right > emojiWrapperPosition.width + rightOffset
                    ) {
                        emojiWrapper.style.left = ""
                    }

                    // center position
                    if (
                        ((window.innerWidth > 700 && buttonPosition.left > DesktopLeftOffset + emojiWrapperPosition.width / 1.25) ||
                            (window.innerWidth <= 700 && buttonPosition.left > MobileLeftOffset + emojiWrapperPosition.width / 1.25)) &&
                        window.innerWidth - buttonPosition.right > emojiWrapperPosition.width + rightOffset
                    ) {
                        emojiWrapper.style.left = `-${emojiWrapperPosition.width / 2}px`
                    }

                    // right position
                    if (
                        ((window.innerWidth > 700 && buttonPosition.left > DesktopLeftOffset + emojiWrapperPosition.width / 1.25) ||
                            (window.innerWidth <= 700 && buttonPosition.left > MobileLeftOffset + emojiWrapperPosition.width / 1.25)) &&
                        window.innerWidth - buttonPosition.right < emojiWrapperPosition.width / 1.25 + rightOffset
                    ) {
                        emojiWrapper.style.left = `-${emojiWrapperPosition.width - buttonPosition.width}px`
                    }
                }

                try {
                    positionCallback()

                    if (!this.positionListenerAttached) {
                        this.positionListenerAttached = true
                        window.addEventListener("resize", positionCallback)
                    }
                } catch (error) {}
            }
        },
    },
})
</script>

<style lang="scss" scoped>
@import "../styles/colors";
@import "../styles/icons";

.ui-emoji {
    z-index: 2;

    & > div {
        position: absolute;
        width: max-content;
        filter: drop-shadow(3px 3px 10px rgba(0, 0, 0, 0.2));
        z-index: 999;
        transition: all 0.3s ease-in-out;
        opacity: 0;
        visibility: hidden;
        user-select: none;
        pointer-events: none;
        top: 0;

        &:hover {
            visibility: visible;
            opacity: 1;
            pointer-events: unset;
        }

        & > div {
            background-color: $gray-000;
            border-radius: 5px;
            margin-top: 30px;
            padding: 10px;
            display: flex;
            justify-content: center;
            overflow: hidden;
            max-height: 300px;

            &.has-often-used {
                max-height: 330px;
            }

            & > .menu {
                display: flex;
                flex-flow: column;
                width: fit-content;
                padding-right: 10px;
                border-right: 2px solid $gray-350;

                & > div {
                    border-radius: 5px;
                    width: 34px;
                    height: 34px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 5px;
                    transition: all 0.3s ease-in-out;

                    & > span {
                        transition: all 0.15s cubic-bezier(0.3, 0, 0.2, 2);
                    }

                    &:hover {
                        cursor: pointer;

                        & > span {
                            transform: scale(1.3);
                        }
                    }
                }
            }

            & > .items {
                padding-left: 7px;
                overflow-y: auto;

                &::-webkit-scrollbar {
                    width: 4px;
                }

                &::-webkit-scrollbar-thumb {
                    height: 20px;
                    background-color: $gray-350;
                }

                & > div {
                    display: flex;
                    flex-flow: column;
                    margin-bottom: 10px;

                    &:last-of-type {
                        margin-bottom: 0;
                    }

                    & > span {
                        display: flex;
                        align-items: center;
                        font-weight: 500;
                        color: $gray-900;
                        width: fit-content;

                        &:hover {
                            cursor: pointer;
                        }

                        & > .icon {
                            margin: 0;
                            mask-repeat: no-repeat;
                            mask-position: center;
                            transition: all 0.3s ease-in-out;
                            mask-size: 80%;

                            &.collapsed {
                                transform: rotate(-90deg);
                            }
                        }
                    }

                    & > div {
                        display: grid;
                        grid-template-columns: repeat(8, 1fr);
                        grid-gap: 5px;
                        overflow: hidden;
                        transition: all 0.2s ease-in-out;

                        @media screen and (max-width: 1194px) {
                            grid-template-columns: repeat(4, 1fr);
                        }

                        & > div {
                            display: flex;
                            height: 30px;
                            align-items: center;
                            justify-content: center;
                            border-radius: 5px;
                            transition: all 0.2s ease-in-out;
                            padding: 5px;

                            & > span {
                                transition: all 0.15s cubic-bezier(0.3, 0, 0.2, 2);
                            }

                            &:hover {
                                cursor: pointer;

                                & > span {
                                    transform: scale(1.3);
                                }
                            }

                            &:active,
                            &.press {
                                background-color: #b2c9f7;
                            }
                        }
                    }
                }
            }
        }
    }

    & > .icon {
        &.smile {
            padding: 0;
            margin: 0;
            border: none;
        }

        &:hover {
            ~ div {
                visibility: visible;
                opacity: 1;
                pointer-events: unset;
            }
        }
    }
}
</style>