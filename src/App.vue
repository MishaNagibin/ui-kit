<template>
    <div id="app">
        <cAccordion>
            <div>one</div>
            <div>
                <p>1</p>
                <cDatePicker
                    v-model="val"
                    isRelative
                    placeholder="дд.мм.гггг"
                />
            </div>
            <div>
                <cAccordion>
                    <div>
                        <cAccordion>
                            <div>one</div>
                            <div>
                                <cDatePicker
                                    v-model="val"
                                    isRelative
                                    placeholder="дд.мм.гггг"
                                />
                            </div>
                        </cAccordion>
                    </div>
                    <div>
                        <cDatePicker
                            v-model="val"
                            isRelative
                            placeholder="дд.мм.гггг"
                        />
                    </div>
                </cAccordion>
            </div>
            <div>four</div>
        </cAccordion>
        <!-- <cCombobox
            v-model="comboID"
            :items="comboItems"
            :filter="false"
        />-->
        <!-- <cEdit
            v-model="phone"
            :pattern="/^\d+(\.?)\d*$/g"
            placeholder="номер телефона"
            autocomplete="new-password"
        />
        <div>{{ phone }}</div>-->
        <!-- <cDatePicker
            v-model="date"
            :disabledDate="disabledDate"
            type="date"
            @change="changeDate"
        />-->
        <!-- <cButton
            mode="red"
            @click="clear"
        >Кастомная кнопка</cButton>-->
        <!-- <cButton
            mode="crimson"
            @click="changeDisabled"
        >Кастомная кнопка</cButton>-->
        <!-- <cButton
            mode="crimson"
            width="109px"
            height="54px"
            border-width="2px"
            border-color="red"
            border-active-color="violet"
            color="red"
            color-active="violet"
            background-color="orange"
            background-active-color="purple"
        >button</cButton>-->
        <!-- <cEdit v-model.trim="val"  enable-emoji emoji-position="top-left"/> -->
        <!-- <cTable
            :columns="columns"
            :items="preparedServices"
            is-full-width
            need-sorted
            border-radius="10px"
            title="Справочник услуг"
            titlePosition="left"
            titleSize="20px"
            @remove="removeItem"
            @open="openItem"
        >
            <template #custom="{ clicked }">
                <cButton
                    mode="red"
                    @click="clicked('remove')"
                >Удалить</cButton>
                <cButton
                    mode="primary"
                    @click="clicked('open')"
                >Открыть</cButton>
            </template>
        </cTable>-->
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import cEdit from "@/components/Edit.vue"
import cAccordion from "@/components/Accordion.vue"
import cDatePicker from "@/components/DatePicker.vue"
import cTable from "@/components/Table.vue"
import cButton from "@/components/Button.vue"
import cCombobox from "@/components/Combobox.vue"
import { TableColumn } from "types/table"

export default Vue.extend({
    name: "App",
    components: { cAccordion, cDatePicker },
    data() {
        return {
            date: null as Date | string | null,
            phone: "",
            isDisabled: false,
            isMounted: false,
            val: "",
            comboID: 1,
            comboItems: [
                { value: 1, name: "11111" },
                { value: 2, name: "22222" },
            ],
            categories: [
                { ID: 1, name: "Кондиционеры и холодосы" },
                { ID: 2, name: "Курьерские услуги" },
            ],
            services: [
                { ID: 1, name: "Установка генератора", price: 500, measure: "Час", description: "Подключение генератора", categoryID: 1 },
                { ID: 2, name: "Установка генератора214124", price: 89500, measure: "Час", description: "Подключение ыыы", categoryID: 2 },
                { ID: 3, name: "Установка ыыы", price: 1500, measure: "Час", description: " фыр фыр", categoryID: 1 },
                {
                    ID: 4,
                    name: "Доставка лекарств на дом",
                    price: 700,
                    measure: "Рубль",
                    description:
                        "доставить посылку с аптеки дсвфвсфывфывфывсфыыфвфчывфвчффычфычыфвчфываваываываыаыаыоставить посылку ссфывыфв фвфаптеки доставить посылку с аптеки",
                    categoryID: 2,
                },
            ] as any[],
            columns: [
                { key: "categoryName", title: "Категория", align: "left", width: 200 },
                { key: "name", title: "Услуга", align: "left", width: 240 },
                { key: "measure", title: "Ед. измерения", align: "center", width: 200 },
                { key: "description", title: "Описание", align: "left", width: 200 },
                { key: "price", title: "Цена без НПД", align: "center", width: 200 },
                { key: "custom", align: "center", width: 200 },
            ] as TableColumn[],
            isLoaded: false,
        }
    },
    computed: {
        preparedServices(): any[] {
            return this.services.map((s) => ({ ...s, categoryName: this.categories.find((c) => c.ID === s.categoryID)?.name }))
        },
    },
    beforeMount() {
        this.isLoaded = true
    },
    mounted() {
        this.isMounted = true
    },
    methods: {
        disabledDate(date: Date): boolean {
            const today = new Date()
            today.setHours(0, 0, 0, 0)

            // return date < today || date > new Date(today.getTime() + 365 * 24 * 3600 * 1000)
            return date < today
        },
        changeDate(date: Date | string) {
            console.log(date, "changeDate")
            this.date = date
        },
        clear() {
            this.phone = ""
        },
        changeDisabled() {
            this.isDisabled = !this.isDisabled
        },
        removeItem(item: any) {
            console.log("Удалить", item)
        },
        openItem(item: any) {
            console.log("Открыть", item)
        },
        check(e: PointerEvent) {
            const index = Number((e.target as HTMLElement).parentElement?.dataset.index ?? 0)
            console.log(this.preparedServices[index])
        },
        selectRow(item: any) {
            console.log(item, 888)
        },
    },
})
</script>

<style lang="scss" scoped>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    // margin: 860px 0;

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
