import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';

import './App.css';

import NotFoundPage from './Components/NotFound';
import TodoList from './Components/TodoList/TodoList';
import DoneListContainer from './Containers/DoneListContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, React!</h1>
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
