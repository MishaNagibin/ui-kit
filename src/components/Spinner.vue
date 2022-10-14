<template>
    <div
        :class="['ui-spinner', position, { mobile: isMobile }]"
        :style="{ '--color': color, position, backgroundColor: hideOverlay ? 'transparent' : '#ffffffc5', zIndex: position === 'fixed' ? 99992 : 998, '--left': left, '--top': top }"
    >
        <span
            :style="{ height: spinnerSize, width: spinnerSize }"
            :class="`icon spinner${typeSpinner}`"
        />
    </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
    name: "cSpinner",
    props: {
        size: {
            type: String,
            default: "s",
            validator: (v: string) => ["s", "m", "l"].includes(v),
        },
        isMobile: {
            type: Boolean,
            default: false,
        },
        position: {
            type: String,
            default: "fixed",
            validator: (v: string) => ["fixed", "absolute", "relative"].includes(v),
        },
        hideOverlay: {
            type: Boolean,
            default: false,
        },
        color: {
            type: String,
            default: "#3f51b5",
        },
        customSize: {
            type: String,
        },
        left: {
            type: String,
            default: "0",
        },
        top: {
            type: String,
            default: "0",
        },
        typeSpinner: {
            type: String,
            default: "1",
        },
    },
    computed: {
        spinnerSize(): string {
            const s: { [key: string]: number } = { s: 38, m: 50, l: 65 }

            return this.customSize !== undefined ? this.customSize : `${s[this.size]}px` || `${s.m}px`
        },
    },
})
</script>

<style lang="scss" scoped>
@import "../styles/colors";
@import "../styles/icons";

.ui-spinner {
    height: 100%;
    width: 100%;
    display: flex;
    $color: var(--color);
    $left: var(--left);
    $top: var(--top);

    &.mobile {
        z-index: 998;
        min-height: 100px;
    }

    & > span {
        margin: auto;
        mask-size: 100%;
        background-color: $color;
    }

    &.absolute,
    &.fixed {
        left: $left;
        top: $top;
    }
}
</style>
