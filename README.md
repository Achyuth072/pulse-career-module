# Agentic Career CRM (Full Stack)

**A specialized "Second Brain" workflow for managing high-stakes career pipelines.**

[**Live Demo**](https://www.google.com/url?sa=E&source=gmail&q=https://pulse-career-module.vercel.app)

## The Problem

Managing a job search involves high-friction operations: tracking applications across spreadsheets, drafting follow-up emails, and syncing calendar blocks. Generic tools lack the context to automate these specific workflows.

## The Solution

This is a vertical SaaS prototype designed to automate the "Career Operations" lifecycle.

- **Pipeline Management:** A Kanban-style view of active applications with real-time status tracking.
- **Agentic Drafting:** An integrated AI module that simulates drafting context-aware follow-up emails based on the role and company data.
- **Focus Mode:** "Agentic Insight" logic that blocks deep-work calendar sessions for upcoming coding assessments.

## Tech Stack (Production Grade)

Built with a modern "Speed & Scale" architecture:

- **Frontend:** Next.js 14 (App Router), Tailwind CSS (Custom Dark Mode System)
- **Backend:** Next.js Server Actions (Zero-API Architecture)
- **Database:** PostgreSQL (Supabase) via Connection Pooling
- **ORM:** Prisma 7 (Type-safe database access)
- **Deployment:** Vercel Serverless

## Key Features

1.  **Zero-Latency Mutations:** Uses Optimistic UI patterns and Server Actions to ensure instant feedback.
2.  **Type Safety:** End-to-end type inference from the Database schema (Prisma) to the React components.
3.  **Enterprise UI:** A custom design system optimized for information density and reduced eye strain.

## Run Locally

1.  Clone the repo
2.  Copy `.env.example` to `.env` and add your Supabase credentials
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  Sync Database:
    ```bash
    npx prisma db push
    ```
5.  Run Server:
    ```bash
    npm run dev
    ```
