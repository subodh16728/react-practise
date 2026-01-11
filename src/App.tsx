import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hooks from "./components/Hooks";
import Profile from "./components/Profile";
import { UserContext } from "./context/UserContext";

function App() {
  const [userName, setUserName] = useState("Subodh");
  return (
    <>
      {/* <Header /> */}
      {/* <Hooks /> */}
      <UserContext.Provider value={{ userName, setUserName }}>
        <Profile />
      </UserContext.Provider>
    </>
  );
}

export default App;
