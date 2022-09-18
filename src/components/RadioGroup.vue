<script lang="ts">
import Vue, { VNode } from "vue"
import cRadio from "@/components/Radio.vue"

export default Vue.extend({
    name: "cRadioGroup",
    components: { cRadio },
    model: {
        prop: "value",
        event: "update:value",
    },
    props: {
        value: {
            type: String,
            default: null,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        change(v: string) {
            this.$emit("update:value", v)
        },
    },
    render(h) {
        const slots: VNode[] = this.$slots.default || []

        if (slots.length < 1) {
            return h(undefined)
        }

        interface Props {
            [key: string]: boolean | string
        }

        const radios: (VNode | undefined)[] = slots.map((v) => {
            if (!v.data) {
                return undefined
            }

            const body: VNode[] = v.componentOptions ? v.componentOptions.children ?? [] : []
            const props: Props = v.componentOptions ? (v.componentOptions.propsData as Props) ?? {} : {}

            const staticClass = (v.data ?? {}).staticClass
            const dynamicClasses: any[] = (v.data ?? {}).class ?? []
            const classes: any[] = [staticClass, ...dynamicClasses].filter((i) => i !== undefined)

            return h(
                "cRadio",
                {
                    props: {
                        value: props.value,
                        disabled: this.disabled || props.disabled,
                        checked: props.value === this.value && (!this.disabled || !props.disabled),
                        color: props.color,
                        hoverColor: props.hoverColor,
                        activeColor: props.activeColor,
                    },
                    class: classes,
                    attrs: {
                        disabled: this.disabled || props.disabled,
                    },
                    on: {
                        ["update:checked"]: (v: string) => this.change(v),
                    },
                },
                body,
            )
        })

        return h("div", radios)
    },
})
</script>
