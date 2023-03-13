import React, { Component } from 'react'
import Welcome from './Welcome'

export class InteractiveWelcome extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: ''
      }
    }
    handle = (event) => {
        const value = event.target.value
        this.setState({
            name:value
        })
       
    }
  render() {
      return (
          <div>
            <input type ="text" name="name" onChange={this.handle}/>
            < Welcome name = {this.state.name} />
          </div>
     )
  }
}

export default InteractiveWelcome

// Create an InteractiveWelcome component that renders an input tag and the Welcome component.
//  Pass the current content of the input tag to the name prop of the Welcome component. 
// The input tag should be a controlled component.
