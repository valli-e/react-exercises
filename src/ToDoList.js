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



 // Create a TodoList component that renders a ul tag with a li tag
// for each item contained in the items state variable. 
//The items state variable should be an array of strings.
//  The TodoList component should also contain an input tag and a button.
//   When the button is clicked, the event handler should add
// the value of the input tag to the items array.
