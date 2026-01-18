import "./App.css";
import withAuth from "./auth/withAuth";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Hooks from "./components/Hooks";

const ProtectedDashboard = withAuth(Dashboard);

function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <Hooks /> */}
      <ProtectedDashboard userName="Subodh" />
    </>
  );
}

export default App;
