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

  handleRemove = index => {
    this.setState(prevState => ({
      items: prevState.items.filter((_, i) => i !== index)
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
            <li key={index}>
              {item}
              <button onClick={() => this.handleRemove(index)}>Remove</button>
            </li>
          ))}
        </ul>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default TodoList;




// Modify the TodoList by adding a "remove" button to each li tag. When clicked, the event handler should remove corresponding item from the items array.
