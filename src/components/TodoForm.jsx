import React, { useState } from 'react'


function TodoForm({ addTodos }) {

  const [newItem, setNewItem] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newItem === '') return
    addTodos(newItem)

    setNewItem('')
  }

  return (
    <form onSubmit={handleSubmit} className='new-item-form' autoComplete='off'>
      <div className='form-row'>
        <label htmlFor="item"><h2 className='label'>Enter a Todo Item</h2></label>
        <input type="text" id="item" value={newItem} onChange={e => setNewItem(e.target.value)} />
      </div>
      <button className="btn add">Add Todo</button>
      
    </form>
  )
}

export default TodoForm