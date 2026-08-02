function StatsGrid({ stats }) {
  return (
    <div className="stats-grid">
      <div className="stat-box">
        <span className="stat-value">{stats.totalRepos}</span>
        <span className="stat-label">Repositories</span>
      </div>

      <div className="stat-box">
        <span className="stat-value">{stats.totalStars.toLocaleString()}</span>
        <span className="stat-label">Total Stars</span>
      </div>

      <div className="stat-box">
        <span className="stat-value">{stats.totalForks.toLocaleString()}</span>
        <span className="stat-label">Total Forks</span>
      </div>

      {stats.mostStarredRepo && (
        <div className="stat-box highlight">
          <span className="stat-label">Most Starred Repo</span>
          <a href={stats.mostStarredRepo.url} target="_blank" rel="noopener noreferrer">
            {stats.mostStarredRepo.name}
          </a>
          <span className="stat-value small">
            ⭐ {stats.mostStarredRepo.stars.toLocaleString()}
          </span>
        </div>
      )}
    </div>
  );
}

export default StatsGrid;