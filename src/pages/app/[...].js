import React from "react"
import { Router } from "@reach/router"
import Layout from "../../components/Layout"
import PrivateRoute from "../../components/PrivateRoute"
import Calendar from "../../components/Calendar"
import Resource from "../../components/Resource"

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <PrivateRoute path="/" component={Calendar}/>
        <PrivateRoute path="/resource" component={Resource}/>
      </Router>
    </Layout>
  )
}

export default App
