# Pulse Career Operations Module (Prototype)

**A specialized "Second Brain" workflow for managing high-stakes career moves.**

## The Concept

Pulse is the ultimate AI COO for daily operations (Calendar, Email, Tasks). However, complex "Life Projects" like a job search—require a dedicated operational layer.

This prototype introduces **Career Ops**: A vertical module that unifies Pulse's existing capabilities into a pipeline view.

* **Email Intelligence:** Instead of generic inbox flagging, it detects "Application Received" emails and auto-creates pipeline cards.
* **Calendar Sync:** Blocks "Deep Work" sessions for coding assessments automatically.
* **Agentic Insight:** Uses the Pulse AI Agent to analyze JD vs. Resume gaps.

## Technical Implementation

Built with a "Speed & Scale" architecture suitable for rapid iteration.

* **Framework:** Next.js 14 (App Router)
* **Styling:** Tailwind CSS
* **Backend:** Server Actions for zero-latency mutations.
* **Persistence:** Custom file-system adapter (Node.js `fs`) to demonstrate schema handling without docker overhead.

## Key Features in Prototype

1. **Pulse UI System:** Adapted to the Deep Black/Purple aesthetic of the Pulse Ecosystem.
2. **Agentic Mockup:** Demonstrates how the AI Agent proactively suggests actions (Drafting emails, Blocking calendar slots).
3. **Zero-API Architecture:** Uses Server Actions to keep the client bundle minimal.

## Run Locally

1. `npm install`
2. `npm run dev`
3. Visit `http://localhost:3000`
