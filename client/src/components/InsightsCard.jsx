function InsightsCard({ insights }) {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="insights-card">
      <div className="insight-block">
        <h3>AI Summary</h3>
        <p>{insights.summary}</p>
      </div>

      <div className="insight-block">
        <h3>Resume Blurb</h3>
        <p>{insights.resumeBlurb}</p>
        <button onClick={() => copyToClipboard(insights.resumeBlurb)}>
          Copy to clipboard
        </button>
      </div>
    </div>
  );
}

export default InsightsCard;