<template>
    <div id="app">
        <cAccordion
            title="Это боян епта"
            headerName="элемент бояна номер"
            notActiveColor="green"
            hoverNotActiveColor="blue"
            activeColor="purple"
            hoverActiveColor="violet"
            iconNotActiveColor="green"
            iconHoverNotActiveColor="blue"
            maxWidth="400px"
            :headersByIndexes="{4:'первый',2:'two',1:'третий блят',0:'4тыре нах',3:'5ть'}"
        >
            <div
                v-for="(a,i) of 5"
                :key="i"
                style="display:flex;flex-wrap:wrap;"
            >
                <div
                    v-for="(v,n) of 2"
                    :key="n"
                    style="width:300px;height:200px;background:url(https://www.legato.su/products_pictures/Weltmeister_Romance_602_Black_001_bb.jpg);backgroundSize:contain;backgroundRepeat:no-repeat;marginRight:20px;marginBottom:20px;"
                ></div>
            </div>
        </cAccordion>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import cAccordion from "@/components/Accordion.vue"

export default Vue.extend({
    name: "App",
    components: { cAccordion },
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
