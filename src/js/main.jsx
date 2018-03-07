import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Landing from 'pages/Landing'
import About from 'pages/About'
import Routes from 'Routes'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render((
  <BrowserRouter>
    <MuiThemeProvider>
      <div className="app">
        <Route exact path={Routes.LANDING} component={Landing}/>
        <Route exact path={'/about'} component={About}/>
      </div>
    </MuiThemeProvider>
  </BrowserRouter>
),
  document.getElementById('app'));
/*

<MuiThemeProvider>
  <ul>
    <li><Link to={Routes.LANDING}>Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/topics">Topics</Link></li>
  </ul>

  <hr/>

  <Route exact path={Routes.LANDING} component={Home}/>
  <Route path="/about" component={() => {
    return <About dumb={`this is dumb`} dumber={`this is dumber`} />
  }}/>
  <Route path="/topics" component={() => <div>This is topics so what is your problem</div>}/>
</MuiThemeProvider>

*/