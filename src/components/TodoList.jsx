import React from 'react'

function TodoList({ todos, deleteTodo, toggleTodo }) {
    return (
        <>
            <h2 className="header">Things to do</h2>
            <ul className="list">
                {todos.length === 0 && 'Your todo list is empty. Add a task to get started!'}
                {todos.map(todo => {
                    {
                        if (todo.completed) {
                            return (
                                <>

                                    <li className='cross' id={todo.id} key={todo.id}>
                                        <div className='listItems'>
                                            📝~
                                            <p className='todo'>{todo.title}</p>
                                        </div>

                                    </li>
                                    <div className='listItems'>
                                        <button className="btn btn-success" onClick={() => toggleTodo(todo.id)}>Done ✔</button>
                                        <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete ❌</button>

                                    </div>
                                    <hr />
                                </>
                            )
                        }
                    }


                    return (
                        <>

                            <li id={todo.id} key={todo.id}>
                                <div className='listItems'>
                                    📝~
                                    <p className='todo'>{todo.title}</p>
                                </div>

                            </li>
                            <div className='listItems'>
                                <button className="btn btn-success" onClick={() => toggleTodo(todo.id)}>Done ✔</button>
                                <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete ❌</button>

                            </div>
                            <hr />
                        </>
                    )
                })}
            </ul>
        </>
    )
}

export default TodoList

