const Groq = require('groq-sdk');

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function generateInsights(profile, stats) {
  const prompt = `
You are analyzing a developer's GitHub profile. Here is their data:

Name: ${profile.name || 'Unknown'}
Bio: ${profile.bio || 'No bio provided'}
Public repos: ${stats.totalRepos}
Total stars earned: ${stats.totalStars}
Total forks: ${stats.totalForks}
Top languages: ${stats.languageBreakdown.slice(0, 3).map(l => `${l.language} (${l.percentage}%)`).join(', ')}
Most starred repo: ${stats.mostStarredRepo ? `${stats.mostStarredRepo.name} (${stats.mostStarredRepo.stars} stars)` : 'None'}

Respond ONLY in valid JSON, no markdown, no extra text, in this exact shape:
{
  "summary": "A 2-3 sentence summary of this developer's coding style and strengths, written in third person",
  "resumeBlurb": "A single polished sentence suitable for a resume or portfolio 'About' section, written in first person"
}
`;

  const response = await groq.chat.completions.create({
    model: 'openai/gpt-oss-120b',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 400,
  });

  const rawText = response.choices[0].message.content;

  try {
    return JSON.parse(rawText);
  } catch (e) {
    console.error('Failed to parse AI response:', rawText);
    return {
      summary: 'AI summary unavailable right now.',
      resumeBlurb: 'AI resume blurb unavailable right now.',
    };
  }
}

module.exports = { generateInsights };