import React, { Component } from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  UNSAFE_componentWillMount() {
    localStorage.getItem("todos") &&
      this.setState({
        todos: JSON.parse(localStorage.getItem("todos"))
      });
  }

  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
  };

  markCompleteTodo = (status, extraParams) => {
    let currentobj = this.state.todos.filter(todo => {return todo.id === extraParams})
    currentobj = this.state.todos.filter(todo => {
        if(todo.id === extraParams) {
          return todo.status = status
        }
        return currentobj;
    });
    localStorage.setItem("todos", JSON.stringify(currentobj));
  };
  addTodo = todo => {

    todo.id = String(Math.random()).substring(2);
    if (todo.due_date !== undefined)
    todo.due_date = todo.due_date.toISOString()
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  };

  editTodo = (value, extraParams) => {
    // console.log(value, extraParams);
    let currentobj = this.state.todos.filter(todo => {return todo.id === extraParams})
    currentobj = this.state.todos.filter(todo => {
        if(todo.id === extraParams) {
          return todo.title = value
        }
        return currentobj;
    });
    localStorage.setItem("todos", JSON.stringify(currentobj));
  };
  editDescTodo = (value, extraParams) => {
    // console.log(value, extraParams);
    let currentobj = this.state.todos.filter(todo => {return todo.id === extraParams})
    currentobj = this.state.todos.filter(todo => {
        if(todo.id === extraParams) {
          return todo.description = value
        }
        return currentobj;
    });
    localStorage.setItem("todos", JSON.stringify(currentobj));
  };

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("todos", JSON.stringify(nextState.todos));
    localStorage.setItem("todo_last_updated", Date.now());
  }

  render() {
    return (
      <div className="App container">
        <Todos todos={this.state.todos}
        deleteTodo={this.deleteTodo}
        editTodo={this.editTodo}
        editDescTodo={this.editDescTodo}
        markCompleteTodo={this.markCompleteTodo}
        />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
