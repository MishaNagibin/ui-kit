<template>
    <div
        :style="{ '--color': color, position, backgroundColor: hideOverlay ? 'transparent' : '#ffffffc5', zIndex: position === 'fixed' ? 99992 : 998 }"
        :class="['ui-spinner', { mobile: isMobile }]"
    >
        <span
            :style="{ height: spinnerSize, width: spinnerSize }"
            class="icon spinner"
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
    },
    computed: {
        spinnerSize(): string {
            const s: { [key: string]: number } = { s: 38, m: 50, l: 65 }

            return `${s[this.size]}px` || `${s.m}px`
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

    &.mobile {
        z-index: 998;
        min-height: 100px;
    }

    & > span {
        margin: auto;
        mask-size: 100%;
        background-color: $color;
    }
}
</style>
