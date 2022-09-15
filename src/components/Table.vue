<template>
    <table
        :align="align"
        :width="isFullWidth ? '100%' : 'fit-content'"
        class="ui-table"
    >
        <caption v-if="hasCaption">{{ title }}</caption>
        <tr class="header">
            <td
                v-for="(c, i) of columns"
                :key="`column-${i}`"
                :class="{ active: needSorted && sortKey === c.key, 'not-sorted': !needSorted }"
                :width="c.width"
                :style="{ '--align': c.align || 'left' }"
                @click="sortBy(c.key)"
            >
                {{ c.title }}
                <span
                    v-if="needSorted"
                    :class="['arrow', sortOrders[c.key] > 0 ? 'asc' : 'desc']"
                />
            </td>
        </tr>
        <tr
            v-for="(entry, index) in preparedItems"
            :key="`entry-${index}`"
        >
            <td
                v-for="(c, i) in columns"
                :key="i"
                :width="c.width"
                :style="{ '--align': c.align || 'left' }"
            >{{ entry[c.key] }}</td>
        </tr>
    </table>
</template>

<script lang="ts">
import Vue from "vue"
import { Prop } from "vue/types/options"
import { arrays } from "@/utils"
import { TableColumn } from "@/models"

export default Vue.extend({
    name: "cTable",
    props: {
        isFullWidth: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: "",
        },
        columns: {
            type: Array as Prop<TableColumn[]>,
            default: (): TableColumn[] => [],
        },
        items: {
            type: Array as Prop<any[]>,
            default: (): any[] => [],
        },
        needSorted: {
            type: Boolean,
            default: false,
        },
        align: {
            type: String,
            default: "left",
        },
    },
    data() {
        const sortOrders = {} as { [key: string]: number }
        this.columns.forEach((c) => {
            sortOrders[c.key] = 1
        })
        return {
            sortKey: this.columns[0].key,
            sortOrders,
        }
    },
    computed: {
        hasCaption(): boolean {
            return (this.title ?? "").length > 0
        },
        preparedItems(): any[] {
            const order = this.sortOrders[this.sortKey] ?? 1
            return this.needSorted
                ? arrays.clone(this.items).sort((a, b) => {
                    a = parseInt(a[this.sortKey]) !== NaN ? parseInt(a[this.sortKey]) : a[this.sortKey]
                    b = parseInt(b[this.sortKey]) !== NaN ? parseInt(b[this.sortKey]) : b[this.sortKey]

                    return (a === b ? 0 : a > b ? 1 : -1) * order
                })
                : this.items
        },
    },
    methods: {
        sortBy(key: string) {
            if (this.needSorted) {
                this.sortKey = key
                this.sortOrders[key] = this.sortOrders[key] * -1
            }
        },
    },
})
</script>

<style lang="scss" scoped>
@import "../styles/colors";

.ui-table {
    border-collapse: collapse;

    & > caption {
        padding: 8px;
        height: 30px;
        font-weight: 600;
    }

    & > tr {
        &.header {
            background-color: $primary-300 !important;
            color: $gray-000;

            & > td {
                font-weight: 600;
                opacity: 0.8;

                &.active,
                &.not-sorted {
                    opacity: 1;
                }

                & > .arrow {
                    display: inline-block;
                    vertical-align: middle;
                    width: 0;
                    height: 0;
                    margin-left: 5px;

                    &.asc {
                        border-left: 5px solid transparent;
                        border-right: 5px solid transparent;
                        border-bottom: 5px solid #fff;
                    }

                    &.desc {
                        border-left: 5px solid transparent;
                        border-right: 5px solid transparent;
                        border-top: 5px solid #fff;
                    }
                }

                &:not(.not-sorted) {
                    &:hover {
                        cursor: pointer;
                    }
                }
            }
        }

        &:nth-of-type(2n + 1) {
            background: #3f51b511;
        }

        & > td {
            $align: var(--align);
            text-align: $align;
            padding: 8px;
            height: 40px;
        }
    }
}
</style>
