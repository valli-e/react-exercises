import React from "react";
import Container from "./Сontainer";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <h1>Hello,World</h1>
          <p>This is my content</p>
        </Container>
      </div>
    );
  }
}

export default App;
