import { State } from "./state" 

export default {
    thisTodo: (state: State) => (todoId: string) => {
        return state.todoItems?.find(
            todo => todo.id === todoId
        )
    },
    completedTodos: (state: State) => {
        return state.todoItems?.filter(todo => todo.completed)
    },
    completedTodosCount: (state: State) => {
        var completedTodos = state.todoItems?.filter(todo => todo.completed)
        return completedTodos?.length
    },
    activeTodos: (state: State) => {
        return state.todoItems?.filter(todo => !todo.completed)
    },
    activeTodosCount: (state: State) => {
        var activeTodos = state.todoItems?.filter(todo => !todo.completed )
        return activeTodos?.length
    }
}