# GitHub Profile Analyzer

A full-stack web app that analyzes any public GitHub profile and generates an AI-powered summary of the developer's coding style, complete with stats, a language breakdown chart, and a ready-to-use resume blurb.

Live demo: https://github-profile-analyzerr.netlify.app

Note: The backend runs on Render's free tier, which spins down after 15 minutes of inactivity. The first search after idle time may take 20-30 seconds to respond while it wakes up - this is expected, not a bug.

## Screenshot

![GitHub Profile Analyzer screenshot](client/src/assets/screenshot)

## Features

- Search any public GitHub username
- View repo stats: total stars, forks, repo count, and most-starred repo
- Visual language breakdown (pie chart) across all public repos
- AI-generated summary of the developer's strengths and coding style
- One-click copyable resume/portfolio blurb
- Fully responsive - works cleanly on mobile, tablet, and desktop

## Tech Stack

**Frontend:** React (Vite), Recharts, Axios - deployed on Netlify
**Backend:** Node.js, Express - deployed on Render
**APIs:** GitHub REST API, Groq API

## Project Structure

github-profile-analyzer/
- client/ (React frontend)
  - src/components/
  - src/App.jsx
- server/ (Express backend)
  - routes/
  - services/

## Getting Started (Local Development)

### Prerequisites

- Node.js installed
- A GitHub Personal Access Token (classic, scopes: public_repo, read:user)
- A Groq API key (free tier available)

### 1. Clone the repo

git clone https://github.com/olatunjiakinshola/github-profile-analyzer.git
cd github-profile-analyzer

### 2. Set up the backend

cd server
npm install

Create a .env file in server/ with:

GITHUB_TOKEN=your_github_token
GROQ_API_KEY=your_groq_api_key
PORT=5000

Run the backend:

npm run dev

### 3. Set up the frontend

cd client
npm install

Create a .env file in client/ with:

VITE_API_URL=http://localhost:5000

Run the frontend:

npm run dev

## API Endpoints

| Endpoint | Description |
|---|---|
| GET /api/github/profile/:username | Raw GitHub profile data |
| GET /api/github/repos/:username | Raw repo list |
| GET /api/github/analyze/:username | Combined profile + stats + AI insights |

## License

MIT