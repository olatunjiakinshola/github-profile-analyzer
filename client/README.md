# GitHub Profile Analyzer

A full-stack web app that analyzes any public GitHub profile and generates an AI-powered summary of the developer's coding style, complete with stats, a language breakdown chart, and a ready-to-use resume blurb.

🔗 **Live demo:** [github-profile-analyzerr.netlify.app](https://github-profile-analyzerr.netlify.app)

> ⚠️ **Note:** The backend runs on Render's free tier, which spins down after 15 minutes of inactivity. The first search after idle time may take 20–30 seconds to respond while it wakes up — this is expected, not a bug.

## Screenshot

![GitHub Profile Analyzer screenshot](client/src/assets/screenshot.png)

## Features

- 🔍 Search any public GitHub username
- 📊 View repo stats: total stars, forks, repo count, and most-starred repo
- 🥧 Visual language breakdown (pie chart) across all public repos
- 🤖 AI-generated summary of the developer's strengths and coding style
- 📋 One-click copyable resume/portfolio blurb
- 📱 Fully responsive — works cleanly on mobile, tablet, and desktop

## Tech Stack

**Frontend:** React (Vite), Recharts, Axios — deployed on Netlify
**Backend:** Node.js, Express — deployed on Render
**APIs:** GitHub REST API, Groq API (Llama/GPT-OSS)

## Project Structure

github-profile-analyzer/
├── client/ # React frontend
│ └── src/
│ ├── components/
│ └── App.jsx
├── server/ # Express backend
│ ├── routes/
│ └── services/

## Getting Started (Local Development)

### Prerequisites
- Node.js installed
- A [GitHub Personal Access Token](https://github.com/settings/tokens) (classic, scopes: `public_repo`, `read:user`)
- A [Groq API key](https://console.groq.com) (free tier available)

### 1. Clone the repo

```bash
git clone https://github.com/olatunjiakinshola/github-profile-analyzer.git
cd github-profile-analyzer
```

### 2. Set up the backend

```bash
cd server
npm install
```

Create a `.env` file in `server/` (use `.env.example` as a reference):

Run the backend:

```bash
npm run dev
```

### 3. Set up the frontend

In a separate terminal:

```bash
cd client
npm install
```

Create a `.env` file in `client/`:

Run the frontend:

```bash
npm run dev
```

Visit the URL Vite gives you (usually `http://localhost:5173`).

## API Endpoints

| Endpoint | Description |
|---|---|
| `GET /api/github/profile/:username` | Raw GitHub profile data |
| `GET /api/github/repos/:username` | Raw repo list |
| `GET /api/github/analyze/:username` | Combined profile + stats + AI insights |

## License
