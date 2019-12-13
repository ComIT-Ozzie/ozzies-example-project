import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <Route path={'/'} exact={true}>
            <p>
              Hello to the real internet!
            </p>
            <p>
              <Link to={'/about'}>
                Go to about
              </Link>
            </p>
          </Route>

          <Route path={'/about'}>
            <p>This is an example project to demo github pages</p>

            <p>
              <Link to={'/'}>
                Go home
              </Link>
            </p>
            
            <p>
              <Link to={'/nested/route'}>
                Go even deeper
              </Link>
            </p>
          </Route>
          
          <Route path={'/nested/route'}>
            <p>Nested routes work</p>

            <p>
              <Link to={'/'}>
                Go home
              </Link>
            </p>
          </Route>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
