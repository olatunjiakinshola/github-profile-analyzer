const axios = require('axios');

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token ${process.env.GITHUB_TOKEN}`,
  },
});

async function getUserProfile(username) {
  const response = await githubApi.get(`/users/${username}`);
  return response.data;
}

async function getUserRepos(username) {
  const response = await githubApi.get(`/users/${username}/repos`, {
    params: {
      per_page: 100,   
      sort: 'updated',
    },
  });
  return response.data;
}

module.exports = { getUserProfile, getUserRepos };