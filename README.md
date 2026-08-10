# GitHub Profile Analyzer

A full-stack web app that analyzes any public GitHub profile and generates an AI-powered summary of the developer's coding style, complete with stats, a language breakdown chart, and a ready-to-use resume blurb.

 ##The Features##

- 🔍 Search any public GitHub username
- 📊 View repo stats: total stars, forks, repo count, and most-starred repo
- 🥧 Visual language breakdown (pie chart) across all public repos
- 🤖 AI-generated summary of the developer's strengths and coding style
- 📋 One-click copyable resume/portfolio blurb
- 📱 Fully responsive — works cleanly on mobile, tablet, and desktop

## Tech Stack

**Frontend:** React (Vite), Recharts, Axios
**Backend:** Node.js, Express
**APIs:** GitHub REST API, Google Gemini API

## Project Structure
github-profile-analyzer/
├── client/ # React frontend
│ └── src/
│ ├── components/
│ └── App.jsx
├── server/ # Express backend
│ ├── routes/
│ └── services/

