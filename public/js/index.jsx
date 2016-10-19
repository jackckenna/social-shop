var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Root = require('react-router').Root;
var Link = require('react-router').Link;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;
var React = require("react");
var WelcomeHome = require('./components/welcomeHome.jsx');
var Navigation = require('./components/nav.jsx');
var Login = require('./components/users/login.jsx');
var Register = require('./components/users/register.jsx')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Navigation}>
      <IndexRoute component={WelcomeHome}></IndexRoute>
       <Route path="/login" component={Login}/>
       <Route path="/register" component={Register}/>
    </Route>
  </Router>,
  document.getElementById('container')
);

// ReactDOM.render(
//   <Router>
//     <Root path='/' component={Navigation} />
//     <
//   </Router>,
//   document.getElementById('navigation')
// );
