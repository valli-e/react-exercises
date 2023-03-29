import { Route } from "react-router-dom";
import { ClickCounter } from "./ClickCounter";

function App() {
  return (
    <div>
      <Route path="/counter">
        <Counter />
      </Route>
    </div>
  );
}
