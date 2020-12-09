import './App.css';
import { BrowserRouter, Link, Route, NotFoundRoute, Switch, Redirect  } from 'react-router-dom';

import TodoList from './Components/TodoList/TodoList';
import DoneList from './Components/DoneList';
import NotFoundPage from './Components/NotFound';
import DoneListContainer from './Containers/DoneListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span>TodoList</span>
      </header>
      <BrowserRouter>
        <ul>
          <li><Link to="/">go to list page</Link></li>
          <li><Link to="/done">go to done page</Link></li>
        </ul>
        <Switch>
          <Route exact path="/done" component={DoneListContainer}></Route>
          <Route exact path="/" component={TodoList}></Route>
          <Route exact path="/pagenotfound" component={NotFoundPage}></Route>
          <Redirect to="/pagenotfound" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
