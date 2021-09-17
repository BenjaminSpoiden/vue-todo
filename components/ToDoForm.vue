<template>
    
    <div>
        <h2 class="label-wrapper" >
            <label for="new-todo-input" class="label__lg" >
                Add a new todo item 
            </label>
        </h2>

        <input 
            type="text"
            id="new-todo-input" 
            name="new-todo"
            autocomplete="off" 
            v-model.trim="newTodoInput"
            v-on:keydown.enter="addTodo(newTodoInput)"
            class="input__lg"     
        />
        <button 
            @click="addTodo(newTodoInput)"
            class="btn btn__primary btn__lg" >
            Submit item
        </button>
    </div>
</template>

<script>
    export default {
        name: "ToDoForm",
        data() {
            return {
                newTodoInput: ""
            }
        },
        methods: {
            addTodo(newTodo) {
                
                this.$store.commit("addTodo", newTodo)
                this.newTodoInput = ""
            }
        },
        
    }
</script>