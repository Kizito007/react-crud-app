import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { getTodos, deleteTodo } from "./Api"
import { useRouteMatch } from "react-router-dom"

export const TodoList = () => {

    const [items, setItems] = useState([]);
    const match = useRouteMatch();

    useEffect(() => {

        const fetchItems = async () => {
            const todos = await getTodos()
            // console.log(todos)
            setItems(todos.allTodos)
        }
        fetchItems()
        
    }, [])

    const removeTodo = async (id) => {
        console.log(id)
        await deleteTodo(id, match.params.id)
        const todos = await getTodos()
        setItems(todos.allTodos)
    }

    return (
        <div className="container">
            <div className="mt-3">
                <h3>Todo List</h3>
                <table className="table table-striped mt-3">
                    <thead>
                        <tr>
                            <th>Text</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map( todo => (

                                <tr key={todo._id}>
                                    <td> 
                                        {todo.title} 
                                    </td> 
                                    <td> 
                                        <Link to={`/edit/${todo._id}`}>Edit</Link>
                                    </td>
                                    <td> 
                                        <button onClick={() => removeTodo(todo._id)} >Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}