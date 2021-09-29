import React from "react"
import { Router } from "@reach/router"
import PrivateRoute from "../../components/PrivateRoute"
import Calendar from "../../components/Calendar"
import Resource from "../../components/Resource"

const App = () => {
  return (
    <Router basepath="/app">
      <PrivateRoute path="/" component={Calendar}/>
      <PrivateRoute path="/resource" component={Resource}/>
    </Router>
  )
}

export default App
