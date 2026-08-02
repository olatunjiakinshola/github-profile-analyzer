import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#ef4444'];

function LanguageChart({ languageBreakdown }) {
  if (!languageBreakdown || languageBreakdown.length === 0) {
    return <p>No language data available</p>;
  }

  return (
    <div className="language-chart">
      <h3>Language Breakdown</h3>
      <ResponsiveContainer width="100%" height={typeof window !== 'undefined' && window.innerWidth < 480 ? 240 : 300}>
        <PieChart>
          <Pie
            data={languageBreakdown}
            dataKey="percentage"
            nameKey="language"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label={(entry) => `${entry.language} ${entry.percentage}%`}
          >
            {languageBreakdown.map((entry, index) => (
              <Cell key={entry.language} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LanguageChart;