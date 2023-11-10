import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = ({ label }) => {
  const { logout } = useAuth0();

  return (
    <button
      type="button"
      className="btn btn-main "
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      {label}
    </button>
  );
};

export default LogoutButton;
