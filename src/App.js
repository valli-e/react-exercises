import { Route } from 'react-router-dom';
import ShowGithubUser from './ShowGithubUser';

function App() {
  return (
    <div>
      <Route path="/users/:username" component={ShowGithubUser} />
    </div>
  );
}

export default App;
