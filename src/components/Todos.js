import React from 'react';
import EditInPlace from "react-edit-in-place";
import Moment from 'react-moment';


const Todos = ({ todos, deleteTodo, editTodo, editDescTodo }) => {

  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item avatar" key={todo.id}>
          <img src="notepad.png" alt="" className="circle"/>
          <a href="#!" onClick={()=>{ deleteTodo(todo.id) }} 
            className="secondary-content material-icons cancel">
              <i class="material-icons">cancel</i>
          </a>
          <b>
          <EditInPlace
            value={todo.title}
            name={todo.id}
            type="text"
            placeholder=""
            className="title"
            style={{color:"green"}}
            errorStyle={{color:"red"}}
            isDisabled={false}
            validate={(value) => true}
            extraParams={{id:todo.id}}
            onChange={(value, extraParams) => editTodo(value, extraParams)}
            />
            </b>
          <EditInPlace
            value={todo.description}
            name={todo.id}
            type="text"
            placeholder=""
            className="title"
            style={{color:"blue"}}
            errorStyle={{color:"red"}}
            isDisabled={false}
            validate={(value) => true}
            extraParams={{id:todo.id}}
            onChange={(value, extraParams) => editDescTodo(value, extraParams)}
          />
            <Moment format="YYYY-MM-DD">{todo.due_date}</Moment>
        </div>
      );
    })
  ) : (
    <div align="center">
    <p className="center">You have nothing left, yay!</p>
    <img src="sun.jpg" height="100" alt="no todos"></img>
    </div>
  )


  return (
    <div>
      <div className="todos collection with-header">
      <li className="collection-header"><h4>Todos</h4></li>
        {todoList}
      </div>
    </div>
  )
};


export default Todos;
