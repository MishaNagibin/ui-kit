<template>
    <div
        class="ui-drop-down"
        :style="{ left: `${left}%`, 'margin-left': `${marginLeft}px`  }"
        ref="drop-down"
    >
        <span :style="{ left: `${taleLeft}%` }" />
        <div>
            <div>
                <slot />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
    name: "cDropDown",
    props: {
        position: {
            type: String,
            default: "left",
            validator: (v: string) => ["left", "center", "right"].includes(v),
        },
    },
    data() {
        return {
            left: 0,
            marginLeft: 0,
            taleLeft: 10,
        }
    },
    mounted() {
        const width = (this.$refs["drop-down"] as HTMLElement).offsetWidth

        if (this.position === "center") {
            this.left = 45
            this.taleLeft = 50
            this.marginLeft = -width * 0.5
        }

        if (this.position === "right") {
            this.left = 90
            this.taleLeft = 90
            this.marginLeft = -width * 0.9
        }
    },
})
</script>

<style lang="scss" scoped>
@import "../styles/colors";

.ui-drop-down {
    position: absolute;
    top: 20px;
    padding-top: 17px;
    filter: drop-shadow(3px 3px 15px rgba(0, 0, 0, 0.2));
    z-index: 5;

    & > span {
        display: block;
        content: "";
        position: absolute;
        top: 6px;
        transform: translateX(-50%);
        background: hsla(0, 0%, 100%, 0);
        border-color: hsla(0, 0%, 100%, 0) hsla(0, 0%, 100%, 0) #fff;
        border-style: solid;
        border-width: 0 12px 12px;
    }

    & > div {
        background-color: $gray-000;
        border-radius: 5px;
    }
}
</style>
