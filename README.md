# 💰 Finance Dashboard

A clean, responsive, and feature-rich **frontend-only Finance Dashboard** built with React and Vite. It showcases solid UI design, component-based architecture, role-based access control, and client-side state persistence — all without a backend.

---

## 🔗 Links

| Environment  | URL                                                    |
| ------------ | ------------------------------------------------------ |
| **Live Demo** | [https://fin-dash-flame-nine.vercel.app/](https://fin-dash-flame-nine.vercel.app/) |
| **Local Dev** | [http://localhost:5173](http://localhost:5173)          |

---

## ✨ Features

- **Dashboard Overview** — At-a-glance view of total balance, income, and expenses with a running balance trend chart (area chart) and spending breakdown by category (donut chart).
- **Transactions Management** — Filterable, sortable, and searchable transaction list. Includes an "Add Transaction" modal for creating new mock entries.
- **Insights Panel** — Analytics showing highest spending category, month-over-month comparison, and expense-to-income ratio.
- **Role-Based UI** — Toggle between **Admin** and **Viewer** roles. Only admins can add new transactions.
- **Dark Mode** — Fully implemented dark/light theme toggle built with Tailwind CSS.
- **Data Persistence** — Transactions, role selection, and theme preference persist automatically via `localStorage`.

---

## 🛠️ Tech Stack

| Layer          | Technology                                |
| -------------- | ----------------------------------------- |
| **Framework**  | React 19 (Functional Components & Hooks)  |
| **Build Tool** | Vite 8                                    |
| **Styling**    | Tailwind CSS v4                           |
| **UI Library** | Material UI (MUI) v7                      |
| **Charts**     | Recharts 3                                |
| **Utilities**  | date-fns 4                                |
| **Linting**    | ESLint 9                                  |
| **Deployment** | Vercel                                    |

---

## 📁 Project Structure

```
Fin_dash/
├── public/                          # Static assets
├── src/
│   ├── components/
│   │   ├── dashboard/
│   │   │   ├── BalanceTrendChart.jsx     # Area chart – running balance over time
│   │   │   ├── SpendingByCategoryChart.jsx # Donut chart – category breakdown
│   │   │   └── SummaryCard.jsx           # Reusable stat card (balance/income/expense)
│   │   ├── insights/
│   │   │   └── InsightsPanel.jsx         # Analytics & financial ratios
│   │   ├── layout/
│   │   │   ├── Header.jsx               # Top navbar with theme/role toggles
│   │   │   └── Sidebar.jsx              # Collapsible navigation sidebar
│   │   └── transactions/
│   │       ├── AddTransactionModal.jsx   # Form modal for new transactions
│   │       └── TransactionTable.jsx      # Filterable & sortable table
│   ├── context/
│   │   ├── AppContext.jsx               # Global state provider
│   │   ├── appContextDef.js             # Context definition
│   │   └── useAppContext.js             # Custom hook for consuming context
│   ├── data/
│   │   └── mockData.js                  # Seed data for transactions
│   ├── hooks/
│   │   └── useTransactions.js           # Transaction CRUD & filtering logic
│   ├── pages/
│   │   ├── Dashboard.jsx                # Dashboard page
│   │   ├── Transactions.jsx             # Transactions page
│   │   └── Insights.jsx                 # Insights page
│   ├── utils/
│   │   └── helpers.js                   # Shared utility functions
│   ├── App.jsx                          # Root component with page routing
│   ├── main.jsx                         # Entry point
│   └── index.css                        # Global styles & Tailwind imports
├── index.html                           # HTML shell
├── vite.config.js                       # Vite + Tailwind plugin config
├── package.json
├── eslint.config.js
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/Fin_dash.git
cd Fin_dash

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

The app will be available at **[http://localhost:5173](http://localhost:5173)**.

### Production Build

```bash
npm run build
```

Build output is emitted to the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

---

## 🏗️ Architecture & Design Decisions

### State Management
Custom `AppContext` with `useAppContext` hook combined with a `useTransactions` abstraction hook. No external state libraries (e.g., Redux) were used to keep the dependency footprint minimal.

### Data Persistence
`localStorage` is integrated via lazy-initialized `useState` and synchronized using `useEffect`, ensuring data survives page refreshes without a backend.

### Styling
Tailwind CSS v4 utility classes with a curated semantic color palette — **emerald** for income, **red** for expenses, **blue** for balance, and full dark-mode support via Tailwind's `dark:` variant.

### Modularity
The codebase is heavily decomposed into:
- **Layout components** — `Header`, `Sidebar`
- **Feature components** — `SummaryCard`, `BalanceTrendChart`, `TransactionTable`, etc.
- **Context providers** — Centralized global state
- **Custom hooks** — Business logic abstraction
- **Utility helpers** — Shared pure functions

### Role-Based Access
A simple client-side role toggle (`Admin` / `Viewer`) demonstrates conditional UI rendering. Admin role gates destructive actions like adding transactions.

---

## 📜 Available Scripts

| Script            | Description                            |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Start Vite dev server with HMR         |
| `npm run build`   | Create optimized production build      |
| `npm run preview` | Serve the production build locally     |
| `npm run lint`    | Run ESLint across the project          |

---

## 📄 License

This project is private and built as an interview/assignment submission.
