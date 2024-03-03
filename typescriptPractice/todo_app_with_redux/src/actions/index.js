// Todoを追加するときに使うAction
let nextTodoId = 0
export const addTodo = text => ({
    type: 'ADD_TODO',
    // Todoを追加するたびにidは1ずつ増やすようにします。
    id: nextTodoId++,
    text
})

// Todoの完了・未完了を操作するときに使うAction
export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})