import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SVGImage from './SVGImage'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/:owner/:repo' component={SVGImage}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
