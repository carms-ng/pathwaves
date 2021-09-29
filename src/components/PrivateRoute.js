import React, { useContext } from "react"
import { navigate } from "gatsby"
import { IdentityContext } from "../../identity-context"

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user, identity: netlifyIdentity } = useContext(IdentityContext)

  if (!user) {
    navigate("/", { replace: true })
    netlifyIdentity.open()
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute
