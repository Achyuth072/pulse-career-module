# Agentic Career CRM (Full Stack)

**A specialized "Second Brain" workflow for managing high-stakes career pipelines.**

[**Live Demo**](https://pulse-career-module.vercel.app)

## The Problem

Managing a job search involves high-friction operations: tracking applications across spreadsheets, drafting context-aware follow-up emails, and syncing calendar blocks. Generic tools lack the personal context to automate these specific workflows effectively.

## The Solution

This is a vertical SaaS platform designed to automate the "Career Operations" lifecycle using Agentic workflows.

- **RAG Pipeline (Context Awareness):** The system parses your uploaded resume (Text/PDF) and stores it as vector-ready context. It uses this ground truth to generate highly personalized emails that reference your actual skills.
- **Agentic Drafting:** An integrated AI agent (Google Gemini) that drafts professional follow-up emails based on the specific job role + your resume context.
- **Pipeline Management:** A Kanban-style view of active applications with real-time status tracking and "Action Item" generation.

## Tech Stack (Production Grade)

Built with a modern "Speed & Scale" architecture:

- **Frontend:** Next.js 14 (App Router), Tailwind CSS (Custom Dark Mode System)
- **Backend:** Next.js Server Actions (Zero-API Architecture)
- **Database:** PostgreSQL (Supabase) via Connection Pooling
- **ORM:** Prisma 7 (Type-safe database access)
- **AI/LLM:** Google Gemini API (via AI Studio)
- **Deployment:** Vercel Serverless

## Key Features

1.  **Resume RAG Pipeline:** Implements Retrieval-Augmented Generation by injecting user resume data into the LLM system prompt for context-aware outputs.
2.  **Zero-Latency Mutations:** Uses Optimistic UI patterns and Server Actions to ensure instant feedback during pipeline moves.
3.  **End-to-End Type Safety:** TypeScript schema inference flows directly from the Prisma Database model to the React UI components.
4.  **Enterprise UI:** A custom "Executive Dark Mode" design system optimized for information density.

## Run Locally

1.  **Clone the repo**

    ```bash
    git clone [https://github.com/your-username/pulse-career-module.git](https://github.com/your-username/pulse-career-module.git)
    cd pulse-career-module
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Configure Environment**
    Copy the example environment file:

    ```bash
    cp .env.example .env
    ```

    _Open `.env` and fill in your Supabase and Google Gemini credentials._

4.  **Sync Database**

    ```bash
    npx prisma db push
    ```

5.  **Run Server**
    ```bash
    npm run dev
    ```
