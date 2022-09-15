<template>
    <div
        v-show="show"
        :class="['ui-alert', status, { 'hide-icon': hideIcon, closeable, closing: isClosing, custom: hasCustomBackgroundColor, 'icon-center': iconPositionCenter }]"
        :style="{ '--backgroundColor': backgroundColor, '--borderRadius': borderRadius || 0 }"
    >
        <span
            v-if="!hideIcon"
            :class="['icon', `${status}-alert`, { custom: hasCustomIconColor }]"
            :style="{ '--iconColor': iconColor }"
        />
        <div class="message">
            <div
                v-if="showTitle"
                :class="['title', { custom: hasCustomTitleColor || hasCustomTitleSize }]"
                :style="{ '--titleColor': titleColor || '#000', '--titleSize': titleSize || '16px' }"
            >
                <slot name="title" />
            </div>
            <div
                v-if="showDesc"
                :class="['desc', { custom: hasCustomDescColor || hasCustomDescSize }]"
                :style="{ '--descColor': descColor || '#636363', '--descSize': descSize || '12px' }"
            >
                <slot name="desc" />
            </div>
        </div>
        <span
            v-if="closeable"
            :style="{ '--iconCloseColor': iconCloseColor || '#636363', '--iconCloseHoverColor': iconCloseHoverColor || '#636363', '--iconCloseSize': iconCloseSize || '24px' }"
            class="icon close-alert"
            @click="close"
        />
    </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
    name: "cAlert",
    props: {
        closeable: {
            type: Boolean,
            default: false,
        },
        hideIcon: {
            type: Boolean,
            default: false,
        },
        status: {
            type: String,
            validator: (v: string) => ["info", "success", "warning", "error"].includes(v),
        },
        backgroundColor: {
            type: String,
        },
        titleColor: {
            type: String,
        },
        titleSize: {
            type: String,
        },
        descColor: {
            type: String,
        },
        descSize: {
            type: String,
        },
        iconColor: {
            type: String,
        },
        iconCloseColor: {
            type: String,
        },
        iconCloseHoverColor: {
            type: String,
        },
        iconCloseSize: {
            type: String,
        },
        borderRadius: {
            type: String,
        },
        iconPositionCenter: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            isClosing: false,
            show: false,
            showDesc: false,
            showTitle: false,
        }
    },
    computed: {
        hasCustomBackgroundColor(): boolean {
            return (this.backgroundColor ?? "").length > 0
        },
        hasCustomIconColor(): boolean {
            return (this.iconColor ?? "").length > 0
        },
        hasCustomTitleColor(): boolean {
            return (this.titleColor ?? "").length > 0
        },
        hasCustomDescColor(): boolean {
            return (this.descColor ?? "").length > 0
        },
        hasCustomTitleSize(): boolean {
            return (this.titleSize ?? "").length > 0
        },
        hasCustomDescSize(): boolean {
            return (this.descSize ?? "").length > 0
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
            this.showTitle = !!this.$slots.title
            this.showDesc = !!this.$slots.desc
            this.show = this.showTitle || this.showDesc
        },
        close() {
            this.isClosing = true
            setTimeout(() => {
                this.show = false
                this.$emit("close")
            }, 350)
        },
    },
})
</script>

<style lang="scss" scoped>
@import "../styles/colors";
@import "../styles/icons";

.ui-alert {
    $borderRadius: var(--borderRadius);
    display: flex;
    flex-flow: row nowrap;
    margin: 0 auto 8px;
    align-items: flex-start;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    width: -webkit-fill-available;
    width: -moz-available;
    padding: 10px 15px;
    font-family: "Montserrat", sans-serif;
    transition: all 0.3s ease-in-out;
    border-radius: $borderRadius;

    &.icon-center {
        align-items: center;
    }

    &.closed {
        pointer-events: none;
        opacity: 0;
    }

    &.opened {
        opacity: 1;
    }

    &.custom {
        $backgroundColor: var(--backgroundColor);
        background-color: $backgroundColor !important;
    }

    &.info {
        background-color: $info-background;
    }

    &.success {
        background-color: $success-background;
    }

    &.warning {
        background-color: #fff5eb;
    }

    &.error {
        background-color: $error-background;
    }

    & > .icon {
        margin-left: -6px;
        margin-right: 11px;
        flex-shrink: 0;
        mask-repeat: no-repeat;
        mask-position: center;
        -webkit-tap-highlight-color: transparent;

        &.custom {
            $iconColor: var(--iconColor);
            background-color: $iconColor !important;
        }

        &.info-alert {
            background-color: $primary-500;
        }

        &.success-alert {
            background-color: $green-350;
        }

        &.warning-alert {
            background-color: $orange-600;
        }

        &.error-alert {
            background-color: $red-500;
        }
    }

    & > .message {
        display: flex;
        flex-flow: column nowrap;
        flex-grow: 1;
        align-self: center;
        max-width: calc(100% - 30px);

        & > .title {
            font-size: 16px;
            color: #000;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

            &.custom {
                $titleColor: var(--titleColor);
                $titleSize: var(--titleSize);
                font-size: $titleSize;
                color: $titleColor;
            }
        }

        & > .desc {
            font-size: 12px;
            line-height: 15px;
            color: $gray-800;
            line-height: 1.3;
            margin-top: 2px;
            display: block;

            &.custom {
                $descColor: var(--descColor);
                $descSize: var(--descSize);
                font-size: $descSize;
                color: $descColor;
            }

            & > p {
                margin: 0;
            }
        }
    }

    & > .close-alert {
        $iconCloseColor: var(--iconCloseColor);
        $iconCloseHoverColor: var(--iconCloseHoverColor);
        $iconCloseSize: var(--iconCloseSize);
        cursor: pointer;
        opacity: 0.6;
        transition: 0.3s;
        mask-size: 100%;
        background-color: $iconCloseColor;
        width: $iconCloseSize;
        height: $iconCloseSize;

        &:hover {
            opacity: 1;
            background-color: $iconCloseHoverColor;
        }
    }

    &.hide-icon {
        & > .message {
            max-width: 100%;
        }
    }

    &.closing {
        animation: alert-out 0.3s ease-in-out both running;
    }
}

@keyframes alert-out {
    0% {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
}
</style>
