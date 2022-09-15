<template>
    <div id="app">
        <cTable
            :columns="columns"
            :items="items"
            needSorted
        />
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import cTable from "@/components/Table.vue"

export default Vue.extend({
    name: "App",
    components: { cTable },
    data() {
        return {
            columns: [
                { key: "code", title: "Код", align: "center", width: 120 },
                { key: "status", title: "Статус", align: "center", width: 200 },
                { title: "Масса", key: "weight", align: "center", width: 120 },
            ],
            items: [
                { ID: 1, code: "1111", status: "Готов", weight: "50кг" },
                { ID: 2, code: "222", status: "В пути", weight: "80кг" },
                { ID: 3, code: "5", weight: "150кг", status: "В обработке" },
                { ID: 4, code: "533", weight: "150кг", status: "В обработке" },
                { ID: 5, code: "995", weight: "15кг", status: "В obr" },
                { ID: 6, code: "588", weight: "750кг", status: "В 888" },
            ],
        }
    },
})
</script>

<style lang="scss">
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
}

section {
    display: flex;
    flex-flow: column;
    width: fit-content;
    margin: auto;
}
</style>
