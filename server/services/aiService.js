const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

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

const model = genAI.getGenerativeModel({ model: 'gemini-flash-latest' });

  const result = await model.generateContent(prompt);
  const rawText = result.response.text();

  // Gemini sometimes wraps JSON in markdown code fences — strip them if present
  const cleaned = rawText.replace(/```json|```/g, '').trim();

  try {
    return JSON.parse(cleaned);
  } catch (e) {
    console.error('Failed to parse AI response:', rawText);
    return {
      summary: 'AI summary unavailable right now.',
      resumeBlurb: 'AI resume blurb unavailable right now.',
    };
  }
}

module.exports = { generateInsights };