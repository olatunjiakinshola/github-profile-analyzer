const express = require('express');
const router = express.Router();
const { getUserProfile, getUserRepos } = require('../services/githubService');
const { processRepoStats } = require('../services/statsProcessor');
const { generateInsights } = require('../services/aiService');

router.get('/profile/:username', async (req, res) => {
  try {
    const data = await getUserProfile(req.params.username);
    res.json(data);
  } catch (error) {
    console.error('GitHub API error:', error.response?.status, error.response?.data || error.message);
    res.status(500).json({ error: error.response?.data?.message || error.message });
  }
});

router.get('/repos/:username', async (req, res) => {
  try {
    const data = await getUserRepos(req.params.username);
    res.json(data);
  } catch (error) {
    console.error('GitHub API error:', error.response?.status, error.response?.data || error.message);
    res.status(500).json({ error: error.response?.data?.message || error.message });
  }
});

router.get('/analyze/:username', async (req, res) => {
  try {
    const username = req.params.username;
    const [profile, repos] = await Promise.all([
      getUserProfile(username),
      getUserRepos(username),
    ]);

    const stats = processRepoStats(repos);
    const insights = await generateInsights(profile, stats);

    res.json({
      profile: {
        name: profile.name,
        bio: profile.bio,
        avatar_url: profile.avatar_url,
        followers: profile.followers,
        following: profile.following,
        public_repos: profile.public_repos,
        html_url: profile.html_url,
      },
      stats,
      insights,
    });
  } catch (error) {
    console.error('GitHub API error:', error.response?.status, error.response?.data || error.message);
    res.status(500).json({ error: error.response?.data?.message || error.message });
  }
});

module.exports = router;