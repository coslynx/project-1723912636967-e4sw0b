<h1 align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
  <br>project-1723912636967-e4sw0b
</h1>
<h4 align="center">A web application for fitness goal tracking and social sharing.</h4>
<h4 align="center">Developed with the software and tools below.</h4>
<p align="center">
  <img src="https://img.shields.io/badge/Framework-Next.js-blue" alt="Framework used for the project">
  <img src="https://img.shields.io/badge/Frontend-TypeScript,_HTML,_CSS-red" alt="Frontend technologies used">
  <img src="https://img.shields.io/badge/Backend-Node.js-blue" alt="Backend technology used">
  <img src="https://img.shields.io/badge/Database-PostgreSQL-blue" alt="Database used">
  <img src="https://img.shields.io/badge/LLMs-Custom,_Gemini,_OpenAI-black" alt="LLMs used for development">
</p>
<p align="center">
  <img src="https://img.shields.io/github/last-commit/spectra-ai-codegen/project-1723912636967-e4sw0b?style=flat-square&color=5D6D7E" alt="Last commit date" />
  <img src="https://img.shields.io/github/commit-activity/m/spectra-ai-codegen/project-1723912636967-e4sw0b?style=flat-square&color=5D6D7E" alt="Commit activity" />
  <img src="https://img.shields.io/github/languages/top/spectra-ai-codegen/project-1723912636967-e4sw0b?style=flat-square&color=5D6D7E" alt="Top programming language" />
</p>


## 📑 Table of Contents
- 📍 Overview
- 📦 Features
- 📂 Structure
- 💻 Installation
- 🏗️ Usage
- 🌐 Hosting
- 📄 License
- 👏 Authors

## 📍 Overview
This repository houses the Minimum Viable Product (MVP) for a **fitness goal tracker web application**. The application aims to provide users with a platform to:

- **Set personalized fitness goals**
- **Track their progress**
- **Share achievements with their friends**

The MVP is built using a modern tech stack, including:

- **React** for the user interface
- **TypeScript** for strong typing and code maintainability
- **Next.js** for server-side rendering and static site generation
- **PostgreSQL** for a robust and scalable database
- **Tailwind CSS** for rapid prototyping and styling
- **Zustand** for simple and efficient state management
- **Prisma ORM** for easy database interactions
- **NextAuth.js** for secure user authentication
- **Sentry** for comprehensive error tracking and monitoring

## 📦 Features
| Feature            | Description                                                                                                        |
|--------------------|--------------------------------------------------------------------------------------------------------------------|
| **Goal Setting**   | Users can create and customize their fitness goals with specific targets, deadlines, and tracking parameters. |
| **Progress Tracking**| Users can monitor their progress towards goals by logging weight, exercise sessions, and other relevant data. |
| **Social Sharing** | Users can connect with friends and share their achievements, providing encouragement and fostering a supportive community. |
| **Data Visualization** | Visualizations (e.g., graphs, charts) offer insights into progress trends, motivating users to stay on track. |
| **User-Friendly Interface** | The application is designed with a clear and intuitive user interface for ease of navigation and interaction. |
| **Third-Party Integrations** | The application can integrate with popular fitness trackers and wearable devices for automated data capture. |
| **Secure User Data** | Robust security measures protect user data, ensuring privacy and confidentiality. |
| **Scalability**    | The application is built with scalability in mind, capable of handling a growing user base and data volume. |
| **Regular Updates** | The application will receive regular updates based on user feedback and industry trends. |

## 📂 Structure

```
fitness-goal-tracker/
├── pages
│   ├── api
│   │   └── auth
│   │       └── [...nextauth].js
│   ├── _app.tsx
│   ├── index.tsx
│   ├── goals
│   │   └── page.tsx
│   └── dashboard
│       └── page.tsx
├── components
│   ├── GoalCard.tsx
│   ├── GoalForm.tsx
│   ├── GoalList.tsx
│   ├── Header.tsx
│   ├── Layout.tsx
│   ├── Sidebar.tsx
│   ├── SocialFeed.tsx
│   ├── Profile.tsx
│   └── InputField.tsx
├── styles
│   └── globals.css
├── prisma
│   ├── migrations
│   │   └── 20231120115405_init
│   │       └── migration.sql
│   └── schema.prisma
├── utils
│   ├── helpers.js
│   └── index.js
├── .eslintrc.js
├── next.config.mjs
├── tailwind.config.js
├── tsconfig.json
├── postcss.config.mjs
└── package.json
```

## 💻 Installation
### 🔧 Prerequisites
- Node.js
- npm
- Docker (Optional for database setup)

### 🚀 Setup Instructions
1. Clone the repository:
   - `git clone https://github.com/spectra-ai-codegen/project-1723912636967-e4sw0b.git`
2. Navigate to the project directory:
   - `cd project-1723912636967-e4sw0b`
3. Install dependencies:
   - `npm install`
4. Setup the database:
   - **Option 1 (Docker):** 
      - `docker-compose up -d` 
   - **Option 2 (Local PostgreSQL):**
      - Install PostgreSQL locally
      - Create a new database
      - Configure database credentials in `.env` file
5. Run database migrations:
   - `npx prisma db push` 

## 🏗️ Usage
### 🏃‍♂️ Running the Application
1. Start the development server:
   - `npm run dev`
2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

### ⚙️ Configuration
Adjust configuration settings in `next.config.mjs` or `.env` files as needed.

### 📚 Examples
- **Goal Creation:** Create a new fitness goal with a specific target, deadline, and tracking parameters.
- **Progress Logging:** Log your weight, exercise sessions, and other data to track progress towards goals.
- **Social Sharing:** Connect with friends, share your achievements, and provide encouragement.
- **Data Visualization:** Explore data visualizations (e.g., graphs, charts) to gain insights into your progress trends.

## 🌐 Hosting
### 🚀 Deployment Instructions
#### **Vercel (Recommended)**
1. Create a new Vercel project.
2. Connect the repository to Vercel.
3. Deploy the application using Vercel's deployment tools.

#### **Netlify**
1. Create a new Netlify site.
2. Connect the repository to Netlify.
3. Deploy the application using Netlify's deployment tools.

#### **Heroku (Alternative)**
1. Install the Heroku CLI: `npm install -g heroku`
2. Login to Heroku: `heroku login`
3. Create a new Heroku app: `heroku create`
4. Configure environment variables (DB_HOST, DB_USER, DB_PASS) in Heroku.
5. Deploy the code: `git push heroku main`


### 🔑 Environment Variables
- `NEXT_PUBLIC_APP_NAME`: The name of your application (e.g., "Fitness Goal Tracker")
- `NEXTAUTH_URL`: Your application's URL (e.g., "http://localhost:3000")
- `NEXTAUTH_SECRET`: A secret key for securing authentication (generate using `openssl rand -base64 32`)
- `DATABASE_URL`: The URL of your PostgreSQL database (e.g., `postgresql://user:password@host:port/database`)
- `SENTRY_DSN`: Your Sentry DSN for error tracking (optional)

## 📜 License
This application is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

## 👥 Authors
- **Author Name** - [Spectra.codes](https://spectra.codes)
- **Creator Name** - [DRIX10](https://github.com/Drix10)

<p align="center">
  <h1 align="center">🌐 Spectra.Codes</h1>
</p>
<p align="center">
  <em>Why only generate Code? When you can generate the whole Repository!</em>
</p>
<p align="center">
  <img src="https://img.shields.io/badge/Developer-Drix10-red" alt="Developer name">
  <img src="https://img.shields.io/badge/Website-Spectra.codes-blue" alt="Website name">
  <img src="https://img.shields.io/badge/Backed_by-Google,_Microsoft_&_Amazon_for_Startups-red" alt="Backed by">
  <img src="https://img.shields.io/badge/Finalist-Backdrop_Build_v4-black" alt="Finalist">
  <p>