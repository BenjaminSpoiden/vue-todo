import { State } from "./state"
import uniqueId from "lodash.uniqueid"
import { store } from "../index"

export default {
    addTodo: (state: State, todoText: string) => {
        console.log(todoText)
        state.todoItems?.push({
            id: uniqueId('todo-'),
            label:  todoText,
            completed: false
        })
        console.log(state.todoItems)
    },
    deleteTodo: (state: State, todoId: string) => {
        if(!state.todoItems) return
        let index = state.todoItems.indexOf(
            store.getters.thisTodo(todoId)
        )
        state.todoItems.splice(index, 1)
    },
    markItCompleted: (_: State, todoId: string) => {
        let todo = store.getters.thisTodo(todoId)
        todo.completed = !todo.completed
    }
}