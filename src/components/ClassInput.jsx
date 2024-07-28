/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";

class Count extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { todos } = this.props;
    return <h3>Count: {todos.length}</h3>;
  }
}

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ["Just some demo tasks", "As an example"],
      inputVal: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(index) {
    this.setState((state) => ({
      todos: state.todos.filter((todo, i) => i !== index),
    }));
    alert("Deleted");
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
    }));
  }

  render() {
    return (
      <section>
        {/* eslint-disable-next-line react/prop-types */}
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        <p>
          <Count todos={this.state.todos}></Count>
        </p>
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {this.state.todos.map(
            (
              todo,
              index, // keep track of the index the 2nd argument of map
            ) => (
              <li key={todo}>
                {todo}
                <button onClick={() => this.handleDelete(index)} type="button">
                  Delete
                </button>
              </li>
            ),
          )}
        </ul>
      </section>
    );
  }
}

export default ClassInput;
