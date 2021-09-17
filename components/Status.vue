<template>
    <div>
        <span>
            Active : {{ activeTodosCount }}
        </span>
        <span>
            Done: {{ completedTodosCount }}
        </span>
    </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    name: "Status",
    computed: {
        ...mapGetters(["completedTodosCount", "activeTodosCount"])
    }
}

</script>
