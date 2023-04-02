const INITIAL_STATE = {todos :[]}
function rootReducer(state=INITIAL_STATE, action) {
    if (action.type === "CREATE") {
        return { ...state, todos: [ ...state.todos, action.payload]}
    }
    if (action.type === "DELETE") {
        return { ...state, todos: state.todos.filter(task => task !== action.payload)}
    }
    return state
}

export default rootReducer
