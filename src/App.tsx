import { useState } from "react";
import "./App.css";
import withAuth from "./auth/withAuth";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Hooks from "./components/Hooks";
import Profile from "./components/Profile";
import { UserContext } from "./context/UserContext";

const ProtectedDashboard = withAuth(Dashboard); // till here - the unexecuted component is returned. Nothing inside it has been executed. It will be executed when this component is rendered. That is below

function App() {
  const [userName, setUserName] = useState("Subodh");
  return (
    <>
      {/* <Header /> */}
      {/* <Hooks /> */}
      <ProtectedDashboard userName="Subodh" />
    </>
  );
}

export default App;
