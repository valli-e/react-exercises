import React, { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      newItem: ""
    };
  }

  handleChange = event => {
    this.setState({ newItem: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { newItem } = this.state;
    if (newItem.trim() === "") {
      return;
    }
    this.setState(prevState => ({
      items: [...prevState.items, newItem],
      newItem: "" // clear the input field after adding new item
    }));
  };

  render() {
    const { items, newItem } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={newItem} onChange={this.handleChange} />
          <button type="submit">Add Item</button>
        </form>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;



// Modify the TodoList component so that the input clears every time a Todo is added to the items array
