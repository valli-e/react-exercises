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
      newItem: ""
    }));
  };

  handleReset = () => {
    this.setState({ items: [] });
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
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default TodoList;




// Modify the TodoList by adding a "reset" button that clears the items array when clicked.
