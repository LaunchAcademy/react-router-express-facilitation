import React from 'react';
import { Switch, Route, Link } from "react-router-dom"

import BarShowContainer from './BarShowContainer'
import BarsIndexContainer from './BarsIndexContainer'

const CoffeeLayout = (props) => {
  return(
    <div className="layout">
      <div className="top-bar-coffee grid-x">
        <div className="top-bar-left">
          <Link className="site-title" to="/bars">Coffee of Boston</Link>
        </div>
      </div>

      <div className="main-body">
        Coffee Components and Route
      </div>

      <div className="top-bar-coffee">
        FOOTER
      </div>
    </div>
  )
}

export default CoffeeLayout;


// <Route exact path="/" component={BarsIndexContainer} />
// <Route exact path="/bars" component={BarsIndexContainer} />
// <Route exact path="/bars/:id" component={BarShowContainer} />
