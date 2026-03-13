function AiPanel() {

  return (
    <div className="ai-panel">

      <h2>AI Assistant</h2>

      <div className="chat-box">
        <p>Ask me anything about DSA...</p>
      </div>

      <input
        type="text"
        placeholder="Type your question..."
      />

      <button>Send</button>

    </div>
  );
}

export default AiPanel;