<template>
    <div id="app">
        <cEdit
            v-model="item"
            is-clear
            enableEmoji
            placeholder="text"
            background-color="purple"
            placeholder-color="lightgray"
            color="#fff"
            border-active-color="pink"
            border-width="2px"
            clear-icon-color="lightgray"
            clear-icon-hover-color="#fff"
            emojiIconColor="lightgray"
            emojiIconHoverColor="#fff"
        />
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import cEdit from "@/components/Edit.vue"

export default Vue.extend({
    name: "App",
    components: { cEdit },
    data() {
        return {
            item: "",
            columns: [
                { key: "code", title: "Код", align: "center", width: 120 },
                { key: "status", title: "Статус", align: "center", width: 200 },
                { title: "Масса", key: "weight", align: "center", width: 120 },
            ],
            items: [
                { ID: 1, code: "1111", status: "Готов", weight: "50кг" },
                { ID: 2, code: "222", status: "В пути", weight: "80кг" },
                { ID: 3, code: "5", weight: "150кг", status: "В обработке" },
                { ID: 4, code: "95", weight: "150кг", status: "В обработке" },
            ],
            isLoaded: false,
        }
    },
    beforeMount() {
        this.isLoaded = true
    },
})
</script>

<style lang="scss" scoped>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;

    & > :deep(.ui-slider) {
        & > .carousel {
            & > .list {
                & > .item {
                    min-width: 200px;
                    height: 200px;
                    border-radius: 5px;
                    margin: 0 10px;
                    background-color: pink;
                }
            }
        }
    }

    & > .filters {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 700px;

        & > div {
            position: relative;
            margin-right: 40px;
            width: 130px;
            margin: 0 20px;
            display: flex;
            justify-content: center;

            &:first-child {
                justify-content: left;
            }

            &:last-child {
                justify-content: right;
            }

            & > :deep(.ui-drop-down) {
                opacity: 0;
                transition: 0.3s;

                & .ui-checkbox {
                    padding: 10px;
                }
            }

            &:hover {
                & > :deep(.ui-drop-down) {
                    opacity: 1;
                }
            }
        }
    }
}

section {
    display: flex;
    flex-flow: column;
    width: fit-content;
    margin: auto;
}
</style>
