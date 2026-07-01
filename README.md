# Panda One HQ Starter

This is the starter app for Panda One HQ.

## What is included

- Next.js app
- Tailwind styling
- Dashboard
- Academy
- Opportunities
- Announcements
- FAQs
- Support page
- Profile page
- Admin preview
- Supabase database schema

## Local setup

1. Install Node.js.
2. Open this folder in VS Code.
3. Run:

```bash
npm install
npm run dev
```

4. Open `http://localhost:3000`.

## Supabase setup

1. Create a Supabase project.
2. Go to SQL Editor.
3. Paste the contents of `supabase/schema.sql`.
4. Click Run.
5. Go to Project Settings → API.
6. Copy your Project URL and anon public key.
7. Create a `.env.local` file using `.env.example`.

## Vercel setup

1. Push this folder to GitHub.
2. Import the repository into Vercel.
3. Add the same environment variables in Vercel.
4. Deploy.

## Editing jobs and progress tracking

The current version shows mock data. The database schema is ready for the production version where jobs, announcements, training modules, quizzes, and user progress are stored in Supabase.
