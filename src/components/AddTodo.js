import React, {Component} from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class AddTodo extends Component {
  constructor(props){
    super(props)
    this.state= {
      title: '',
      description: '',
      due_date: undefined,
      status: '0',
    }
}
handleChange = date => {
  console.log(date);
  this.setState({
    due_date: date
  });
};


handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })

}
  // return true if state.title.length < 1
  validateInput = () => {
    let isError = false;
    if (this.state.due_date === undefined) {
      console.log(this.state.due_date, "date")
      isError = true;
    }
    if (this.state.title.length < 1) {
      console.log('there was an error');
      console.log('length of input', this.state.title.length);
      isError = true;
    }
    return isError;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let form = document.querySelector('form');
    // error validation
    
    let err = this.validateInput();
    if (!err) {
      console.log('no error');
      // call parent component function to update state
      this.props.addTodo(this.state);
      // clear form
      this.setState({
        title: '',
        description: '',
        due_date: undefined,
      });
    } else {
      console.log('there was an error');
      // set materialize css class for error
      form.todo.classList.add('invalid');
    }
    return;
  }
  render() {
    const {title } = this.state;
    const {description } = this.state;
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s3">
              <input
                type="text"
                id="todo"
                className="validate"
                name="title"
                placeholder="<CLICK TO ADD TASK>"
                onChange={this.handleInputChange}
                value={title}
              />
              <label htmlFor="todo">TODO:</label>
              <span
                className="helper-text"
                data-error="Please enter a valid todo and due date"
                data-success="success"
              ></span>
            </div>
            <div className="input-field col s5">
              <input
                type="text"
                id="description"
                className="validate"
                name="description"
                placeholder="Task Description"
                onChange={this.handleInputChange}
                value={description}
              />
              <label htmlFor="description">Description</label>
              <span
                className="helper-text"
                data-error="Please enter a valid description"
                data-success="success"
              ></span>
            </div>
            <div className="input-field col s3">
              <DatePicker
                name="due_date"
                id="due_date"
                selected={this.state.due_date}
                onChange={this.handleChange}
                dateFormat="yyyy/MM/dd"
                minDate={new Date()+1}
                placeholderText="Click to select a due date"
          /></div>
          <div className="input-field col s1">
          <button className="btn waves-effect waves-light" type="submit">
            ADD
            <i title="Add todo" className="material-icons right">send</i>
          </button>
            </div>
            </div>  
        </form>
      </div>
    );
  }
};

export default AddTodo;
