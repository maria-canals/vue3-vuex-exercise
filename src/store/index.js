import { createStore } from 'vuex';

export default createStore({
    state: {
        auth: { isUserLogged: false },
        todos: [
            { id: "t1", name: "Todo 1" },
            { id: "t2", name: "Todo 2" },
            { id: "t3", name: "Todo 3" },
        ],
    },
    getters: {
        isUserLogged(state) {
            return state.auth.isUserLogged
        },
        todosList(state) {
            return state.todos
        }
    },
    mutations: {
        setLoginStatus(state, payload) {
            state.auth.isUserLogged = payload
        },
        addItem(state, payload) {
            const newTodo = { id: new Date().toString(), name: payload };
            state.todos.push(newTodo)
        },
        removeItem(state, payload) {
            const index = state.todos.findIndex(todo => todo.id == payload)
            state.todos.splice(index, 1)
        }

    }
})