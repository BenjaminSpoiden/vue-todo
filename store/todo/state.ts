import uniqueId from "lodash.uniqueid"

export interface TodoItem {
    id: string,
    label?: string,
    completed: boolean
}

export interface State {
    todoItems?: TodoItem[]
}

export default (): State => ({
    todoItems: [
        { id: uniqueId('todo-'), label: "Vuex todo", completed: false },
        { id: uniqueId('todo-'), label: 'Second todo', completed: true },
        { id: uniqueId('todo-'), label: 'Third todo', completed: true}
    ]
})