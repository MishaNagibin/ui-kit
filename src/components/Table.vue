<template>
    <table
        :align="align"
        :width="isFullWidth ? '100%' : 'fit-content'"
        :style="{ '--borderRadius': borderRadius, '--headerBackgroundColor': headerBackgroundColor, '--headerColor': headerColor, '--sortedArrowColor': sortedArrowColor, '--rowBackgroundColor': rowBackgroundColor, '--rowColor': rowColor }"
        class="ui-table"
    >
        <caption
            v-if="hasCaption"
            :style="{ '--titleSize': titleSize, '--titlePosition': titlePosition }"
        >{{ title }}</caption>
        <tr class="header">
            <td
                v-for="(c, i) of filteredColumns"
                :key="`column-${i}`"
                :class="{ active: needSorted && sortKey === c.key, 'not-sorted': !needSorted }"
                :width="c.width || 100"
                :style="{ '--align': c.align || 'left' }"
                @click="sortBy(c.key)"
            >
                {{ c.title }}
                <span
                    v-if="needSorted"
                    :class="['arrow', sortOrders[c.key] > 0 ? 'asc' : 'desc']"
                />
            </td>
            <td
                v-if="hasCustomSlot"
                :width="customColumn.width || 100"
                :style="{ '--align': customColumn.align || 'left' }"
                class="not-sorted"
            >{{ customColumn.title || "" }}</td>
        </tr>
        <tr
            v-for="(entry, index) in preparedItems"
            :key="`entry-${index}`"
        >
            <td
                v-for="(c, i) in filteredColumns"
                :key="i"
                :width="c.width"
                :style="{ '--align': c.align || 'left' }"
            >{{ entry[c.key] }}</td>
            <td
                v-if="hasCustomSlot"
                :data-index="index"
                :width="customColumn.width || 100"
                :style="{ '--align': customColumn.align || 'left' }"
            >
                <slot name="custom" />
            </td>
        </tr>
    </table>
</template>

<script lang="ts">
import Vue from "vue"
import { arrays } from "@/utils"
import { Prop } from "vue/types/options"
import { TableColumn } from "@/../types/table"

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
        titleSize: {
            type: String,
            default: "14px",
        },
        titlePosition: {
            type: String,
            default: "center",
            validator: (v: string) => ["left", "center", "right", "end", "start", "unset"].includes(v),
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
            validator: (v: string) => ["left", "center", "right"].includes(v),
        },
        borderRadius: {
            type: String,
            default: "0px",
        },
        headerBackgroundColor: {
            type: String,
            default: "#4e62d1",
        },
        headerColor: {
            type: String,
            default: "#ffffff",
        },
        sortedArrowColor: {
            type: String,
            default: "#ffffff",
        },
        rowBackgroundColor: {
            type: String,
            default: "#3f51b511",
        },
        rowColor: {
            type: String,
            default: "#1e1e1e",
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
            hasCustomSlot: !!this.$slots.custom,
        }
    },
    computed: {
        hasCaption(): boolean {
            return (this.title ?? "").length > 0
        },
        filteredColumns(): TableColumn[] {
            return this.columns.filter((c) => c.key !== "custom")
        },
        customColumn(): TableColumn {
            return this.columns.find((c) => c.key === "custom") ?? ({} as TableColumn)
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
    mounted() {
        this.checkSlots()
    },
    updated() {
        this.checkSlots()
    },
    methods: {
        checkSlots() {
            this.hasCustomSlot = !!this.$slots.custom
        },
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
    $borderRadius: var(--borderRadius);
    $headerBackgroundColor: var(--headerBackgroundColor);
    $headerColor: var(--headerColor);
    $sortedArrowColor: var(--sortedArrowColor);
    $rowBackgroundColor: var(--rowBackgroundColor);
    $rowColor: var(--rowColor);
    overflow: hidden;
    border-collapse: collapse;

    & > caption {
        $titleSize: var(--titleSize);
        $titlePosition: var(--titlePosition);
        text-align: $titlePosition;
        font-size: $titleSize;
        padding: 8px;
        font-weight: 600;
    }

    & > tr {
        &.header {
            background-color: $headerBackgroundColor !important;
            color: $headerColor !important;
            overflow: hidden;

            & > td {
                font-weight: 600;
                opacity: 0.8;

                &:first-of-type {
                    border-top-left-radius: $borderRadius;
                }

                &:last-of-type {
                    border-top-right-radius: $borderRadius;
                }

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
                        border-bottom: 5px solid $sortedArrowColor;
                    }

                    &.desc {
                        border-left: 5px solid transparent;
                        border-right: 5px solid transparent;
                        border-top: 5px solid $sortedArrowColor;
                    }
                }

                &:not(.not-sorted) {
                    &:hover {
                        cursor: pointer;
                    }
                }
            }
        }

        &:last-of-type {
            & > td {
                &:first-of-type {
                    border-bottom-left-radius: $borderRadius;
                }

                &:last-of-type {
                    border-bottom-right-radius: $borderRadius;
                }
            }
        }

        &:nth-of-type(2n + 1) {
            background: $rowBackgroundColor;
            color: $rowColor;
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
