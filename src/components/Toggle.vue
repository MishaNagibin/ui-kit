<template>
    <div :class="['ui-toggle', { disabled }]">
        <div
            :class="['toggle-button', { enabled: isEnabled }]"
            :style="{ '--color': color, '--height': height }"
            @click="toggle"
        >
            <div>
                <span class="icon checkmark3" />
            </div>
        </div>
        <div class="toggle-label">
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
    name: "cToggle",
    model: {
        prop: "isEnabled",
        event: "toggle",
    },
    props: {
        isEnabled: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        size: {
            type: String,
            default: "l",
            validator: (v: string) => ["m", "l"].includes(v),
        },
        color: {
            type: String,
            default: "#3f51b5",
        },
    },
    computed: {
        height(): string {
            return this.size === "m" ? "15px" : "20px"
        },
    },
    methods: {
        toggle() {
            if (!this.disabled) {
                this.$emit("toggle", !this.isEnabled)
            }
        },
    },
})
</script>

<style lang="scss" scoped>
@import "../styles/colors";
@import "../styles/icons";

.ui-toggle {
    margin: 10px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: fit-content;

    &.disabled {
        user-select: none;
        cursor: not-allowed;
        opacity: 0.5;

        & > .toggle-button {
            cursor: not-allowed;
        }
    }

    & > .toggle-button {
        $toggle-button-height: var(--height);
        $toggle-button-color: var(--color);
        $toggle-button-border-thickness: 2px;
        $toggle-transition: all 0.3s ease-in-out, margin-left 0s;
        $button-side-length: calc(#{$toggle-button-height} - 1px);
        height: $toggle-button-height;
        width: calc(#{$toggle-button-height} * 1.7);
        border: $toggle-button-border-thickness solid $gray-350;
        background-color: $gray-350;
        border-radius: 50px;
        transition: $toggle-transition;
        cursor: pointer;

        & > div {
            height: $button-side-length;
            width: $button-side-length;
            border-radius: 50px;
            background-color: $gray-000;
            transition: $toggle-transition;
            box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
            margin-left: 2px;
            display: flex;

            & > span {
                opacity: 0;
                transition: opacity 0.3s ease-in-out;
                background-color: $toggle-button-color;
                mask-repeat: no-repeat;
                mask-position: center;
                height: $button-side-length;
                width: $button-side-length;
                margin: 0;
                margin-left: 2px;
            }
        }

        &.enabled {
            border: $toggle-button-border-thickness solid $toggle-button-color;
            background-color: $toggle-button-color;

            & > div {
                margin-left: 3px;
                box-shadow: none;
                background-color: $gray-000;
                transform: translateX(calc(#{$toggle-button-height} - #{$button-side-length / 2}));

                & > span {
                    opacity: 1;
                }
            }
        }
    }

    & > .toggle-label {
        margin-left: 10px;
    }
}
</style>
