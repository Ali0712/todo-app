
import { useEffect, useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Header from './components/Header'

function App() {

  const [todos, setTodos] = useState(()=>{
    const local = localStorage.getItem('items')
    if (local === null) return []
    return JSON.parse(local)
  })


  useEffect(()=>{
    localStorage.setItem('items', JSON.stringify(todos))
  },[todos])

  const addTodos= (title) => {
    setTodos((currentTodos) => {
      return [...currentTodos, { id: crypto.randomUUID(), title: title, completed: false}]
    })
  }

  const toggleTodo = (id) => {

    let a = document.getElementById(id)
    a.classList.add('cross')
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed:true}
        }

        return todo
      })
  })
}
  const deleteTodo = (id) => {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)

  })
}

  return (
    <>
    <Header />
    <div className='container'>
    <TodoForm addTodos={addTodos}/>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>

      

    </>
  )
}

export default App
