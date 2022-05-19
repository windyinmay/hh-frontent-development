import React, { useState } from 'react';

function Todolist() {
    const [todo, setTodo] = useState({desc: '', date: ''});
    const [todos, setTodos] = useState([]);
    
    const inputChanged = (e) => {
      setTodo({...todo, [e.target.name]: e.target.value});
    }

    const addTodo = (event) => {
      event.preventDefault();
      setTodos([todo,...todos]);
      setTodo('');
    }

    const deleteTodo = (line) => {
      setTodos(todos.filter((_,index) => index !== line));
    }

    return (
        <div className="App">
          <header className="App-header">
            Simple Todolist
          </header>

          <form onSubmit = {addTodo}>
          <legend>Add todo:</legend>
          <fieldset>
            Description: <input name="desc" type="text" value={todo.desc} onChange={inputChanged}></input>
            Date: <input name="date" type="date" value={todo.date} onChange={inputChanged}></input>
            <button onClick={addTodo}>Add</button>
            </fieldset>
          </form>
          <table>
                <tbody>
                  <tr>
                    <th><b>Date: </b></th>
                    <th><b>Desciption: </b></th>
                    </tr>
                    {
                      todos.map((todo, index) =>
                        <tr key={index}>
                            <td>{todo.date}</td>
                            <td>{todo.desc}</td>
                            <td><button onClick={() => deleteTodo(index)}>Delete</button></td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
      );
}

export default Todolist;