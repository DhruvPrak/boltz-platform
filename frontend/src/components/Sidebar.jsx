function Sidebar() {

  const topics = [
    "Arrays",
    "Linked Lists",
    "Stacks",
    "Queues",
    "Trees",
    "Graphs",
    "Recursion",
    "Dynamic Programming"
  ];

  return (
    <div className="sidebar">
      <h2>DSA Topics</h2>

      <ul>
        {topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;