function processRepoStats(repos) {
  let totalStars = 0;
  let totalForks = 0;
  const languageCounts = {};
  let mostStarredRepo = null;

  repos.forEach((repo) => {
    totalStars += repo.stargazers_count;
    totalForks += repo.forks_count;

    // Count languages (skip repos with no primary language, e.g. empty repos)
    if (repo.language) {
      languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
    }

    // Track the most starred repo
    if (!mostStarredRepo || repo.stargazers_count > mostStarredRepo.stargazers_count) {
      mostStarredRepo = repo;
    }
  });

  // Convert language counts into percentages
  const totalReposWithLanguage = Object.values(languageCounts).reduce((a, b) => a + b, 0);
  const languageBreakdown = Object.entries(languageCounts)
    .map(([language, count]) => ({
      language,
      count,
      percentage: totalReposWithLanguage
        ? Math.round((count / totalReposWithLanguage) * 100)
        : 0,
    }))
    .sort((a, b) => b.count - a.count); // most-used language first

  return {
    totalRepos: repos.length,
    totalStars,
    totalForks,
    languageBreakdown,
    mostStarredRepo: mostStarredRepo
      ? {
          name: mostStarredRepo.name,
          stars: mostStarredRepo.stargazers_count,
          url: mostStarredRepo.html_url,
        }
      : null,
  };
}

module.exports = { processRepoStats };