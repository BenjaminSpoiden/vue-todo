<template>
    <div id="app">
    <ul>
      <li v-for="todo in todos" :key="todo.id" >
        <span
            @click="isCompleted(todo)"
        >
            {{todo.label}}
        </span>
        <span @click="deleteTodo(todo)" >
            Delete
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    name: "Todos",
    data() {
        return {
            todos: this.$store.state.todoItems
        }
    },
    methods: {
        isCompleted(todo) {
            this.$store.commit("markItCompleted", todo.id)
        }, 
        deleteTodo(todo) {
            this.$store.commit("deleteTodo", todo.id)
        }
    },
    computed: {
        ...mapGetters(["completedTodos", "activeTodos"])
    }
}
</script>
