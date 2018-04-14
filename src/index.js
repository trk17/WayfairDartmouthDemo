import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import App from './components/app'
import ParentChartComponent from './components/chartExample/parentChartComponent'
import ParentComponent from './components/componentsExample/parentComponent'

//EXAMPLE 1:HELLO WORLD
//
// ReactDOM.render(
//     <h1> Hi Dartmouth Hackathon, lets do better than plain html.</h1>
//   , document.querySelector('.container')
// );


//EXAMPLE 2: Single Component
//
// ReactDOM.render(
//   <App/>
//   , document.querySelector('.container')
// )


//REST OF EXAMPLES

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
        <Route exact path="/chart" component={ParentChartComponent} />
        <Route path="/componentExample" component={ParentComponent} />
    </div>
  </Router>
  , document.querySelector('.container')
);
