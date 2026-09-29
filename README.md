# 🛍️ MyStore - Multi-Page React Application with Routing

A clean, responsive, beginner-friendly multi-page product store React application built with **Vite**, **React 19**, and **React Router v7** for college assignment evaluation.

---

## 📌 Project Overview

**MyStore** demonstrates client-side routing, active link highlighting, dynamic parameter extraction (`useParams`), and persistent layout navigation in a modern React Single Page Application (SPA).

### 🚀 Tech Stack
- **Framework**: React 19 (via Vite)
- **Routing**: `react-router-dom` (v7)
- **Styling**: Pure Modern CSS (Responsive & Clean UI)
- **Icons**: Lucide React

---

## 📂 Folder & File Architecture

```text
d:/Mern/as_11/
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── React_MyStore_MultiPage_App.zip   # 📦 Submission Zip Archive
└── src/
    ├── main.jsx                       # Entry Point
    ├── App.jsx                        # Route Hierarchy Setup
    ├── index.css                      # Global Responsive Stylesheet
    ├── components/
    │   └── Navbar.jsx                 # Persistent Navigation Header
    ├── data/
    │   └── productsData.js            # Mock Products Dataset
    └── pages/
        ├── Home.jsx                   # Welcome & Hero Section
        ├── About.jsx                  # Store Purpose & Tech Info
        ├── Products.jsx               # Products List Page (/users)
        ├── ProductDetail.jsx          # Dynamic Parameter Route (/users/:id)
        └── NotFound.jsx               # 404 Fallback View
```

---

## 🗺️ Route Specifications

| Route Path | Component | View Title | Key Functionality |
| :--- | :--- | :--- | :--- |
| `/` | `<Home />` | **Home** | Store welcome heading, summary, and "View Products" button |
| `/about` | `<About />` | **About** | App purpose details and "Back to Home" button |
| `/users` | `<Products />` | **Products** | Renders product grid with Product Name, Price, and "View Product" button |
| `/users/:id` | `<ProductDetail />` | **Product Details** | Extracts `:id` via `useParams()`, shows details & "Go Back" button |
| `*` | `<NotFound />` | **404 Page** | Fallback for non-existent routes with return button |

---

## 💻 How to Run Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your web browser.

---

## 📦 GitHub Submission Guide

To publish this project to GitHub and share the link:

```bash
# 1. Initialize Git Repository (if not already done)
git init

# 2. Add files and Commit
git add .
git commit -m "Initial commit - MyStore Multi-Page React App with Routing"

# 3. Create a new repository on GitHub, then link it:
git remote add origin https://github.com/YOUR_USERNAME/mystore-react-router-assignment.git

# 4. Push code to main branch
git branch -M main
git push -u origin main
```

---

## ⚡ Assignment Features Checklist

- [x] **Vite + React Setup**: Built with Vite and React 19.
- [x] **React Router Implementation**: Complete routing using `BrowserRouter`, `Routes`, and `Route`.
- [x] **Persistent Navbar**: Header displaying `MyStore | Home | About | Products` with active page highlighting via `NavLink`.
- [x] **Home Page (`/`)**: Displays welcome heading, store text, and "View Products" button.
- [x] **About Page (`/about`)**: Displays store description and "Back to Home" button.
- [x] **Products Page (`/users`)**: Renders list of product cards from mock dataset.
- [x] **Product Details Page (`/users/:id`)**: Parameterized route using `useParams()` to display dynamic product details and "Go Back" button.
- [x] **Fallback Handling**: Graceful "Product Not Found" and 404 handling.
- [x] **Submission Archive**: Clean compressed ZIP file (`React_MyStore_MultiPage_App.zip`).
