import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';

import './App.css';
import Navigation from './Components/Navigation';

import NotFoundPage from './Components/NotFound';
import TodoList from './Components/TodoList/TodoList';
import DoneListContainer from './Containers/DoneListContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        My Todo List
      </header>
      <BrowserRouter>
      <Navigation/>
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
