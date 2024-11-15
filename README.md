# Solana Wallet Trading Report Generator (WIP)

This project is a full-stack application that generates detailed trading reports for a specified Solana wallet using Solscan data. Built on the MERN stack (MongoDB, Express, React, Node.js), Next.js, and TypeScript, it provides financial insights into Solana transactions.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)


## Overview

The application connects to the Solscan API to retrieve transaction history for a Solana wallet, filters for major tokens, and generates a comprehensive report. This report includes transaction dates, amounts, and other key details, ideal for financial record-keeping.

## Features

- **Transaction Data Retrieval**: Retrieves and stores wallet transaction history from Solscan.
- **Data Filtering**: Filters data to highlight major tokens for clearer insights.
- **Report Generation**: Compiles data into a downloadable report format (PDF/Excel).
- **Optional UI**: A frontend interface allows users to input wallet addresses, configure report preferences, and download reports.

## Technology Stack

- **Frontend**: Next.js, React, TypeScript
- **Backend**: Node.js, Express, TypeScript
- **Database**: MongoDB
- **API**: Solscan (or other Solana blockchain explorers)
- **Monorepo Tooling**: TurboRepo for efficient build and caching

## Project Structure

├── backend # Express backend
│ ├── controllers # Handles data processing and report generation
│ ├── models # MongoDB schemas and models
│ ├── routes # API routes for fetching and generating reports
│ └── utils # Helper functions for API calls and formatting
├── frontend # Next.js frontend
│ ├── pages # Next.js pages (e.g., home, report)
│ ├── components # Reusable UI components
│ ├── lib # Shared functions, e.g., API fetching
│ └── types # TypeScript interfaces for consistent typing
└── README.md

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and npm
- [MongoDB](https://www.mongodb.com/)
- [Solscan API Key](https://public-api.solscan.io/) (or an alternative Solana blockchain explorer API)

### Installation with TurboRepo

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/solana-wallet-report-generator.git
   cd solana-wallet-report-generator
   ```

2. **Install TurboRepo globally** (if not already installed):

   ```bash
   npm install -g turbo
   ```

3. **Install dependencies**:

   - TurboRepo will manage dependencies for both frontend and backend.

   ```bash
   turbo run install
   ```

4. **Configure environment variables**:

   - Create `.env` files in both the `apps/backend` and `apps/frontend` directories.
   - Add necessary environment variables (e.g., MongoDB URI, Solscan API Key).

5. **Start development servers**:

   ```bash
   turbo run dev --parallel
   ```

6. **Access the application**:
   - Open `http://localhost:3000` in your browser.

## Usage

1. **Input Wallet Address**: Enter a Solana wallet address on the main page.
2. **Configure Report Settings**: Choose token filters, date range, etc.
3. **Generate Report**: Click "Generate Report" to view data in the report view.
4. **Download Report**: Download the report in PDF or Excel format.
