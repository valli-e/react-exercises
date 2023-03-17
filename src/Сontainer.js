import React, { Component } from 'react'
import './custom.css';

 class Сontainer extends Component {
  render() {
    return (
      <div className='custom-container'>
       {this.props.children}
      </div>
    )
  }
}

export default Сontainer

// Create a Container component that renders its children within a div tag. 
// Have the div tag use a white background and a red border,
//  either with a custom class or by using tailwindcss.