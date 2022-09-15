<script lang="ts">
import Vue from "vue"

export default Vue.extend({
    name: "cTab",
    props: {
        isClosable: {
            type: Boolean,
            default: false,
        },
    },
})
</script>
