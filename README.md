## Library Asset Management System

# Overview

A prototype of a management system enabling users to browse, search, and request access to various assets including KPIs, layouts, and storyboards. Built for reporting and analysis needs. (Further Info Needed to understand explained below.)

# Getting Started

Install dependencies
`npm install`

# Run development server

`npm run dev`

# Run in production

`npm run build`
`npm run start`

`Open http://localhost:3000 to view the application.`

# Tech Stack

- Next.js
- TypeScript
- Zustand (State Management)
- Tailwind CSS

# Current Features

- Search System

Real-time search across all sections
Dynamic filtering
Section-specific results display
Cross-sectional search capability

# Navigation

Tab-based navigation
Featured content section
KPIs section
Layouts section
Storyboards section
Trending section

# Request Access

Modal-based request form
Form validation
Data submission handling
API service integration

# Content Display

Responsive grid layout
Section-based organization
Dynamic content loading

# Component Architecture

- Core Components

1. SearchBar
2. TabNavigation
3. RequestModal
4. ContentDisplay
5. LibraryStore (State Management)

# State Management

Centralized store using Zustand
Search query handling
Tab state management
Filtered data management

# Questions About the Wireframe, Acceptance Criteria, User Flow (from Lack of Clear Documentation, Clear Guidelines, Proper UI/UX Design/Wireframe)

Search Questions:

1. What's the difference between:

- Regular search vs. Filter search?
- Exploring an asset vs. Showing more details?
- What problem are they trying to resolve for the user?

2. How should users find what they're looking for? Searching?

# Modal Questions:

1. We see four types of popups (KPI, Data, Layout, Storyboard):

- When should each one appear?
- How are they different?
- Which information goes in which?
- What problem are they trying to resolve for the user?

# Feature Questions

1. What exactly is an "asset"?
2. How should favorites work?
3. What should users see in previews?
4. How should related items be connected?

# User Access Questions

1. Who can see what?
2. How do users get access?
3. What can users do with items they find?

# What We Need to Know

1. How should users move through the site?
2. How should items be related to each other?
3. What should each feature do exactly?
4. Who can access what?

# Bottom Line

The wireframe leaves a lot of questions unanswered. Before we build more, we need clear answers about:

1. How users should use the site
2. How things connect
3. What features should do
4. Who can access what
5. How everything should perform

## The overal idea of what this application is trying to solve for the user and for what product exactly. There is no clear detail info that explains that.
