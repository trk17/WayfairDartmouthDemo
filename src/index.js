import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import App from './components/app'
import ChartExample from './components/chart'
import ParentComponent from './components/componentsExample/parentComponent'

//EXAMPLE 1:HELLO WORLD

// ReactDOM.render(
//     <div> Hi Dartmouth Hackathon, lets do better than this.</div>
//   , document.querySelector('.container'));


//EXAMPLE 2: Single Component

// ReactDOM.render(
//   <App/>
//   , document.querySelector('.container')
// )


//REST OF EXAMPLES

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
        <Route exact path="/chart" component={ChartExample} />
      <Route path="/componentExample" component={ParentComponent} />
    </div>
  </Router>
  , document.querySelector('.container')
);
