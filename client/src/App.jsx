import { useState } from 'react';
import axios from 'axios';
import ProfileCard from './components/ProfileCard';
import StatsGrid from './components/StatsGrid';
import InsightsCard from './components/InsightsCard';
import LanguageChart from './components/LanguageChart';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!username.trim()) return;

    setLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await axios.get(
  `${import.meta.env.VITE_API_URL}/api/github/analyze/${username}`
);
      setData(response.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className="app">
      <h1>GitHub Profile Analyzer</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSearch}>Analyze</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {data && (
        <>
          <ProfileCard profile={data.profile} />
          <StatsGrid stats={data.stats} />
          <LanguageChart languageBreakdown={data.stats.languageBreakdown} />
          <InsightsCard insights={data.insights} />
        </>
      )}
    </div>
  );
}

export default App;