import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import AiPanel from "../components/AiPanel";
import "../styles/layout.css";

function Home() {

  return (
    <div className="container">

      <Sidebar />

      <Dashboard />

      <AiPanel />

    </div>
  );
}

export default Home;