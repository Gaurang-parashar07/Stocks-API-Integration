#  Stock Search Dashboard

A React-based Stock Search Dashboard that fetches real-time stock data using the Financial Modeling Prep (FMP) API.

This project demonstrates API integration, state management, frontend caching, debounced search optimization, and clean component-based architecture.

---

## Features

### Core Features
- Search stock by symbol (e.g., AAPL, MSFT, GOOGL)
- Display detailed stock information:
  - Symbol
  - Company Name
  - Exchange
  - Current Price
  - Change & Change %
  - Open & Previous Close
  - Day High & Day Low
  - 52 Week High & Low
  - Volume
  - Market Cap
  - 50 & 200 Day Averages
  - Last Updated Time
- Loading state while fetching data
- Error handling for failed API calls

---
##  Additional Feature (Implemented Separately)

### Navigation Bar
- Added a reusable `Navbar` component
- Clean top navigation layout
- Improves UI structure and user experience
---

##  Bonus Feature (Optional Requirement)

### Debounced Search Input
- Implemented a custom `useDebounce` hook
- Prevents excessive API calls while typing
- Optimizes performance
- Helps avoid API rate limits

---

##  Additional Feature (Implemented Separately)

### Navigation Bar
- Added a reusable `Navbar` component
- Clean top navigation layout
- Improves UI structure and user experience

---

##  Performance Optimization

###  Frontend Caching
- Implemented localStorage caching
- Prevents repeated API calls for recently searched stocks
- Improves speed and reduces API usage

---

##  Tech Stack

- React (Functional Components + Hooks)
- JavaScript (ES6+)
- CSS (Custom Styling)
- Financial Modeling Prep API
- Vite

---


