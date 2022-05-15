import React, { useContext } from "react";
import { AuthContext } from "../App";

function Dashboard() {
  const { onLogout } = useContext(AuthContext);
  return (
    <div>
      Dashboard
      <div onClick={onLogout}>Logout</div>
    </div>
  );
}

export default Dashboard;
