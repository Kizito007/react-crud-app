import axios from "axios"

export const getTodos = () => axios.get("http://localhost:50/todos/all")
    .then(res => res.data)

export const createTodo = (todo) => axios.post("http://localhost:50/todos", todo)

export const getTodo = (id) => axios.get(`http://localhost:50/todos/${id}`)
    .then(res => res.data)

export const updateTodo = (todo, id) => axios.put(`http://localhost:50/todos/${id}`, todo)

export const deleteTodo = (id) => axios.delete(`http://localhost:50/todos/${id}`)