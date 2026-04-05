# Finance Dashboard

A clean, responsive, and functional frontend-only Finance Dashboard built for an interview assignment. It demonstrates solid UI design, component-based architecture, and state management without overengineering.

## Features

- **Dashboard Overview:** Displays total balance, income, and expenses with a running balance trend chart (area chart) and spending breakdown by category (donut chart).
- **Transactions Management:** Filterable, sortable, and searchable list of mocked transactions. Includes an "Add Transaction" modal for generating new mock data.
- **Insights Panel:** Analytics showing your highest spending category, month-over-month comparison, and expense-to-income ratio.
- **Role-Based UI:** Toggle between "Admin" and "Viewer" roles. Only admins can add new transactions.
- **Dark Mode Support:** Fully fleshed out dark mode built with Tailwind CSS.
- **Data Persistence:** All states (transactions, role, theme) persist automatically via `localStorage`.

## Tech Stack

- **React 18** (Functional components, Hooks)
- **Vite** (Build tool)
- **Tailwind CSS v4** (Styling)
- **Recharts** (Data visualization)

## Getting Started

1. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

2. **Run the development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

3. **Build for production:**
   \`\`\`bash
   npm run build
   \`\`\`

## Architecture & Design Decisions

- **State Management:** Custom `AppContext` with `useAppContext` combined with a `useTransactions` abstraction hook. No external libraries like Redux were used to keep dependencies lean.
- **Persistence:** LocalStorage is integrated seamlessly via lazy initialized `useState` and synchronized using `useEffect`.
- **Styling:** Tailwind classes alongside a curated color palette (emerald for income, red for expenses, etc.).
- **Modularity:** App logic and layout pieces are heavily broken down into generic layout components, context providers, helper utilities, and specific pages.
