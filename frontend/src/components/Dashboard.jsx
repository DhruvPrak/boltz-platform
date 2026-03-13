function Dashboard() {

  const boltz = 120;
  const streak = 5;
  const lastTopic = "Linked Lists";

  return (
    <div className="dashboard">

      <h1>Boltz Dashboard</h1>

      <div className="card">
        <h2>Boltz⚡ Credits</h2>
        <p>{boltz}</p>
      </div>

      <div className="card">
        <h2>🔥 Streak</h2>
        <p>{streak} Days</p>
      </div>

      <div className="card">
        <h2>Last Topic</h2>
        <p>{lastTopic}</p>
      </div>

      <button className="resume">
        Continue Learning →
      </button>

    </div>
  );
}

export default Dashboard;