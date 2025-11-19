# 💰 Expensify - Full-Stack Expense Tracker Application

[![Live Demo](https://img.shields.io/badge/demo-live-green.svg)](https://expensify-update-project-2-frontend.vercel.app)
[![Node.js](https://img.shields.io/badge/Node.js-v14+-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://reactjs.org/)

![Logo](logo.png)

## 📋 Executive Summary

Expensify is a production-ready, full-stack expense tracking application demonstrating modern web development practices. Built with a React 19 frontend and Express 5 backend, it implements secure OAuth 2.0 authentication, RESTful API design, and real-time data visualization. The application showcases proficiency in session management, MongoDB database design, responsive UI development, and cloud deployment on Vercel/Netlify.

**Live Application:** https://expensify-update-project-2-frontend.vercel.app

### Key Technical Highlights

- **Authentication:** OAuth 2.0 with Passport.js for secure, session-based authentication
- **Architecture:** Decoupled frontend/backend with RESTful API design
- **Database:** MongoDB with Mongoose ODM for schema validation and relationships
- **State Management:** React Context API for global state management
- **Validation:** Zod for runtime type checking and input validation
- **Security:** HTTP-only cookies, CORS configuration, trust proxy setup for production
- **Deployment:** Continuous deployment with Vercel (backend) and Netlify (frontend)
- **Code Quality:** ESLint for code consistency, modular architecture with separation of concerns

## 🌟 Features

- **Google OAuth Authentication**: Secure login using Google accounts
- **Expense Management**: Add, view, and delete expenses
- **Category-based Tracking**: Organize expenses by categories
- **Visual Analytics**: Interactive pie charts showing spending by category
- **Real-time Updates**: Instant expense tracking and calculations
- **Responsive Design**: Works seamlessly across devices
- **Persistent Data**: MongoDB database for reliable data storage

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - UI framework
- **Vite 7.1.2** - Build tool and development server
- **React Router DOM 7.8.2** - Client-side routing
- **Axios 1.11.0** - HTTP client for API requests
- **Recharts 3.2.1** - Charts and data visualization
- **ESLint** - Code linting and quality

### Backend
- **Node.js** with **Express 5.1.0** - Server framework
- **MongoDB** with **Mongoose 8.18.0** - Database and ODM
- **Passport.js** with **Google OAuth 2.0** - Authentication
- **Express Session** - Session management
- **JWT (jsonwebtoken)** - Token-based authentication
- **Bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing
- **Zod 4.1.5** - Schema validation
- **Nodemon** - Development server with hot reload

## 🏗️ Architecture & Design

### System Architecture

```
┌─────────────────┐         ┌─────────────────┐         ┌─────────────────┐
│                 │         │                 │         │                 │
│  React Frontend │ <────> │  Express API    │ <────> │    MongoDB      │
│  (Vite + SPA)   │  HTTP  │  (RESTful)      │  ODM   │   (Database)    │
│                 │         │                 │         │                 │
└─────────────────┘         └─────────────────┘         └─────────────────┘
        │                           │
        │                           │
        ▼                           ▼
┌─────────────────┐         ┌─────────────────┐
│   Netlify CDN   │         │  Google OAuth   │
│   (Hosting)     │         │  (Auth Provider)│
└─────────────────┘         └─────────────────┘
```

### Technical Architecture

**Frontend Layer:**
- **Framework:** React 19.1.1 with functional components and hooks
- **Routing:** React Router DOM v7 for client-side navigation
- **State Management:** Context API for global state (user session, expenses data)
- **HTTP Client:** Axios with credentials support for session-based auth
- **Build Tool:** Vite 7.1.2 for fast HMR and optimized production builds
- **UI Components:** Modular component architecture with CSS modules

**Backend Layer:**
- **Runtime:** Node.js with Express 5.1.0
- **Architecture Pattern:** MVC-inspired with routes, services, and models separation
- **Authentication:** Passport.js with Google OAuth 2.0 strategy
- **Session Management:** Express-session with in-memory store (scalable to Redis)
- **Validation:** Zod for schema validation (runtime type safety)
- **Security:** CORS, HTTP-only cookies, trust proxy configuration

**Data Layer:**
- **Database:** MongoDB (NoSQL document database)
- **ODM:** Mongoose 8.18.0 for schema definition and validation
- **Relationships:** Reference-based relationships between Users and Expenses
- **Timestamps:** Automatic createdAt/updatedAt for audit trails

### Design Patterns & Best Practices

1. **Separation of Concerns:** Clear separation between routes, business logic (services), and data access (models)
2. **RESTful API Design:** Standard HTTP methods (GET, POST, DELETE) with appropriate status codes
3. **Error Handling:** Centralized error handling with custom error types
4. **Configuration Management:** Environment variables for sensitive data and configuration
5. **Modular Architecture:** Reusable components and services for maintainability
6. **Session-based Authentication:** Stateful sessions with secure cookie configuration

### Project Structure

```
Expensify_Update_Project-2/
├── backend/server/
│   ├── config/
│   │   ├── db.js                    # MongoDB connection configuration
│   │   └── passport.js              # Passport.js OAuth strategy setup
│   ├── middlewares/
│   │   └── error.js                 # Error handling middleware
│   ├── models/
│   │   └── Models.js                # Mongoose schemas (User, Expense)
│   ├── routes/
│   │   ├── userRoutes.js            # Authentication routes
│   │   └── expenseRoutes.js         # Expense CRUD routes
│   ├── service/
│   │   └── expenseService.js        # Business logic layer
│   ├── validations/
│   │   └── zod.js                   # Input validation schemas
│   ├── server.js                    # Express app initialization
│   ├── package.json                 # Dependencies and scripts
│   └── vercel.json                  # Vercel deployment config
│
├── client/c/
│   ├── src/
│   │   ├── components/
│   │   │   ├── leftComponents.jsx   # Expense list and form
│   │   │   ├── rightComponents.jsx  # Analytics and summaries
│   │   │   └── pieChart.jsx         # Data visualization
│   │   ├── contexts/
│   │   │   └── dataContext.jsx      # Global state management
│   │   ├── hooks/
│   │   │   └── expensesHooks.jsx    # Custom hooks for data fetching
│   │   ├── Login/
│   │   │   ├── googleLogin.jsx      # OAuth landing page
│   │   │   └── googleLogin.css
│   │   ├── expenses/
│   │   │   ├── expneses.jsx         # Main expense page
│   │   │   └── expenses.css
│   │   ├── ErrorPage/
│   │   │   ├── errorPage.jsx        # 404 error handling
│   │   │   └── errorPage.css
│   │   ├── App.jsx                  # Root component with routing
│   │   └── main.jsx                 # React DOM entry point
│   ├── vite.config.js               # Vite build configuration
│   ├── eslint.config.js             # ESLint rules
│   ├── package.json                 # Dependencies and scripts
│   └── vercel.json                  # Frontend deployment config
│
├── netlify.toml                     # Netlify SPA redirect rules
├── .gitignore
└── README.md
```

## 🚀 Getting Started

### Prerequisites

**Required Software:**
- **Node.js:** v14.x or higher (LTS v18.x or v20.x recommended)
  - Check version: `node --version`
  - Download: https://nodejs.org/
- **npm:** v6.x or higher (comes with Node.js)
  - Check version: `npm --version`
  - Alternative: yarn v1.22+ or pnpm
- **MongoDB:** One of the following:
  - MongoDB Atlas account (recommended for cloud)
  - Local MongoDB installation v4.4+
  - Docker container: `docker run -d -p 27017:27017 mongo`
- **Git:** v2.x+ for version control
- **Google Cloud Platform Account:** For OAuth 2.0 credentials

**Development Tools (Recommended):**
- **Code Editor:** VS Code with extensions:
  - ESLint
  - Prettier
  - MongoDB for VS Code
  - Thunder Client (API testing)
- **API Testing:** Postman, Insomnia, or Thunder Client
- **MongoDB GUI:** MongoDB Compass or Studio 3T
- **Browser:** Chrome/Firefox with DevTools for debugging

**System Requirements:**
- **OS:** macOS, Linux, or Windows 10/11
- **RAM:** Minimum 4GB (8GB recommended)
- **Disk Space:** 500MB for dependencies

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kunal-rathore-111/Expensify_Update_Project-2.git
   cd Expensify_Update_Project-2
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend/server
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../../client/c
   npm install
   ```

### Environment Variables

#### Backend (.env file in `backend/server/`)

Create a `.env` file in the `backend/server/` directory with the following variables:

```env
# Server Configuration
PORT=5000

# MongoDB Connection
MONGOO_DB_URL=your_mongodb_connection_string

# Google OAuth Credentials
CLIENT_ID=your_google_client_id
CLIENT_SECRET=your_google_client_secret
CALLBACK_URL=http://localhost:5000/api/user/google/callback

# Session Configuration
SESSION_SECRET=your_session_secret_key

# Frontend URL (for CORS)
frontend_Url=http://localhost:5173

# Cookie Security
COOKIE_SECURE=development  # Set to "production" for production environment
```

#### Frontend

The frontend uses Vite and typically doesn't require environment variables, but if you need to configure the backend API URL, you can create a `.env` file in the `client/c/` directory.

### Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Create OAuth 2.0 credentials:
   - Application type: Web application
   - Authorized redirect URIs: Add your callback URL (e.g., `http://localhost:5000/api/user/google/callback`)
5. Copy the Client ID and Client Secret to your `.env` file

## 💻 Running the Application

### Development Mode

1. **Start the Backend Server**
   ```bash
   cd backend/server
   npm run dev
   # Server will run on http://localhost:5000
   ```

2. **Start the Frontend Development Server**
   ```bash
   cd client/c
   npm run dev
   # Frontend will run on http://localhost:5173
   ```

3. Open your browser and navigate to `http://localhost:5173`

### Production Mode

#### Backend
```bash
cd backend/server
npm start
```

#### Frontend
```bash
cd client/c
npm run build    # Build the production bundle
npm run preview  # Preview the production build
```

## 🌐 Deployment Architecture

### Current Production Environment

- **Frontend:** Netlify CDN - https://expensify-update-project-2-frontend.vercel.app
- **Backend:** Vercel Serverless - https://expensify-update-project-2-backend.vercel.app
- **Database:** MongoDB Atlas (Cloud)
- **OAuth Provider:** Google Cloud Platform

### Backend Deployment (Vercel)

**Configuration (`backend/server/vercel.json`):**
```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "server.js"
    }
  ]
}
```

**Deployment Steps:**

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy from backend directory:**
   ```bash
   cd backend/server
   vercel
   ```

3. **Configure Environment Variables in Vercel Dashboard:**
   ```
   PORT=5000
   MONGOO_DB_URL=<mongodb-atlas-connection-string>
   CLIENT_ID=<google-oauth-client-id>
   CLIENT_SECRET=<google-oauth-client-secret>
   CALLBACK_URL=https://your-domain.vercel.app/api/user/google/callback
   SESSION_SECRET=<strong-random-secret>
   frontend_Url=https://your-frontend-domain.netlify.app
   COOKIE_SECURE=production
   ```

4. **Update Google OAuth Redirect URIs:**
   - Add production callback URL in Google Cloud Console
   - Authorized redirect URI: `https://your-domain.vercel.app/api/user/google/callback`

**Vercel Serverless Considerations:**
- Cold starts: First request may be slower
- Stateless functions: Session store should be external (Redis)
- Request timeout: 10s (Hobby), 60s (Pro)
- Memory: 1024 MB default

### Frontend Deployment (Netlify)

**Configuration (`netlify.toml`):**
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```
- Handles client-side routing for SPA

**Deployment Steps:**

1. **Connect Repository to Netlify:**
   - Login to Netlify
   - Click "New site from Git"
   - Select GitHub repository
   - Choose branch: `main` or `master`

2. **Build Settings:**
   ```
   Base directory: client/c
   Build command: npm run build
   Publish directory: client/c/dist
   ```

3. **Environment Variables (if needed):**
   ```
   VITE_API_URL=https://your-backend.vercel.app
   ```

4. **Deploy:**
   - Automatic deployment on git push
   - Preview deployments for pull requests

**Netlify Features Used:**
- CDN distribution for fast global access
- Automatic HTTPS
- Continuous deployment from Git
- Branch preview deployments

### Database Deployment (MongoDB Atlas)

**Setup:**

1. Create MongoDB Atlas account
2. Create new cluster (Free tier M0 available)
3. Configure network access:
   - Add IP: `0.0.0.0/0` (allow from anywhere) for serverless functions
4. Create database user with read/write permissions
5. Get connection string
6. Update `MONGOO_DB_URL` in environment variables

**Connection String Format:**
```
mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/<dbname>?retryWrites=true&w=majority
```

### Deployment Checklist

- [ ] Environment variables configured on Vercel
- [ ] Environment variables configured on Netlify (if needed)
- [ ] MongoDB Atlas cluster created and accessible
- [ ] Google OAuth credentials created
- [ ] Google OAuth redirect URIs updated for production
- [ ] CORS configured for production frontend URL
- [ ] Session cookies configured with `secure: true`
- [ ] Trust proxy enabled in Express
- [ ] Test OAuth flow in production
- [ ] Test all API endpoints in production
- [ ] Monitor application logs for errors

### CI/CD Pipeline

**Automatic Deployment Flow:**
```
Git Push → GitHub Repository
    ↓
    ├─→ Netlify Build (Frontend)
    │   - Install dependencies
    │   - Run npm build
    │   - Deploy to CDN
    │   - Generate preview URL (PRs)
    │
    └─→ Vercel Build (Backend)
        - Install dependencies
        - Deploy serverless functions
        - Update production URL
```

**Branch Strategy:**
- `main`/`master` - Production deployments
- Feature branches - Preview deployments
- Pull requests - Automatic preview builds

## 🔐 Authentication Flow

### OAuth 2.0 Implementation

```
┌─────────┐                                           ┌─────────────┐
│ Client  │                                           │   Google    │
│ Browser │                                           │   OAuth     │
└────┬────┘                                           └──────┬──────┘
     │                                                        │
     │  1. Click "Login with Google"                         │
     │────────────────────────────────────────────────────>  │
     │                                                        │
     │  2. Redirect to Google OAuth consent screen           │
     │  <────────────────────────────────────────────────────│
     │                                                        │
     │  3. User grants permissions                           │
     │───────────────────────────────────────────────────>   │
     │                                                        │
     │  4. Redirect to callback URL with auth code           │
     │  <────────────────────────────────────────────────────┘
     │
     ▼
┌─────────────────┐
│  Express Server │
│  (Passport.js)  │
└────┬────────────┘
     │  5. Exchange code for tokens
     │  6. Fetch user profile from Google
     │  7. Find or create user in MongoDB
     │  8. Serialize user and create session
     │  9. Set HTTP-only session cookie
     │  10. Redirect to /api/user/expenses
     │
     ▼
┌─────────┐
│  Client │
│  (SPA)  │
└─────────┘
```

### Session Management

- **Session Store:** Express-session with in-memory store (production: Redis recommended)
- **Cookie Configuration:**
  - `httpOnly: true` - Prevents XSS attacks
  - `secure: true` (production) - HTTPS only
  - `sameSite: 'none'` (production) - Cross-site cookies
  - `maxAge: 7 days` - Session expiration
- **Serialization:** User object stored in session for subsequent requests
- **Deserialization:** User retrieved from session on each authenticated request

## 📡 API Documentation

### Base URL
- **Development:** `http://localhost:5000`
- **Production:** `https://expensify-update-project-2-backend.vercel.app`

### Authentication Endpoints

#### Initiate Google OAuth Login
```http
GET /api/user/auth/google
```

**Description:** Redirects user to Google OAuth consent screen

**Response:** 302 Redirect to Google OAuth

---

#### OAuth Callback
```http
GET /api/user/google/callback
```

**Description:** Handles OAuth callback from Google, creates/updates user, establishes session

**Query Parameters:**
- `code` (string) - Authorization code from Google

**Response:** 302 Redirect to `/api/user/expenseRoutes/`

**Session Created:** User session with serialized user data

---

### Expense Endpoints

All expense endpoints require authentication (valid session cookie).

#### Get Success Page
```http
GET /api/user/expenseRoutes/
```

**Description:** Landing page after successful authentication

**Authentication:** Required (session)

**Response:**
```json
{
  "message": "This is the success redirect route of google auth"
}
```

---

#### Fetch All Expenses
```http
GET /api/user/expenseRoutes/fetchExpenses
```

**Description:** Retrieves all expenses for authenticated user

**Authentication:** Required (session)

**Headers:**
```
Cookie: connect.sid=<session-id>
```

**Response (Success - 200):**
```json
{
  "message": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "userId": "507f191e810c19729de860ea",
      "title": "Grocery Shopping",
      "category": "Food",
      "amount": 125.50,
      "createdAt": "2024-01-15T10:30:00.000Z",
      "updatedAt": "2024-01-15T10:30:00.000Z"
    }
  ]
}
```

**Response (Error - 404):**
```json
{
  "message": "UserId not found"
}
```

---

#### Add New Expense
```http
POST /api/user/expenseRoutes/addExpense
```

**Description:** Creates a new expense for authenticated user

**Authentication:** Required (session)

**Headers:**
```
Content-Type: application/json
Cookie: connect.sid=<session-id>
```

**Request Body:**
```json
{
  "title": "Electric Bill",
  "category": "Utilities",
  "amount": 89.99
}
```

**Validation Rules:**
- `title` (string, required) - Expense description
- `category` (string, required) - Expense category
- `amount` (number, required) - Expense amount (positive number)

**Response (Success - 200):**
```json
{
  "message": "Expense added"
}
```

**Response (Error):**
```json
{
  "message": "Error while storing the expense"
}
```

---

#### Delete Expense
```http
DELETE /api/user/expenseRoutes/deleteExpense/:expenseId
```

**Description:** Deletes a specific expense by ID

**Authentication:** Required (session)

**Path Parameters:**
- `expenseId` (string) - MongoDB ObjectId of expense to delete

**Headers:**
```
Cookie: connect.sid=<session-id>
```

**Example:**
```http
DELETE /api/user/expenseRoutes/deleteExpense/507f1f77bcf86cd799439011
```

**Response (Success - 200):**
```json
{
  "message": "Expense deleted"
}
```

**Response (Error - Not Found):**
```json
{
  "message": "Invalid expense"
}
```

## 📊 Database Design

### Entity Relationship Diagram

```
┌─────────────────────────┐
│       usersModel        │
├─────────────────────────┤
│ _id: ObjectId (PK)      │
│ username: String        │
│ email: String (UNIQUE)  │
│ profileUrl: String      │
└──────────┬──────────────┘
           │
           │ 1:N
           │
           ▼
┌─────────────────────────┐
│     expensesModel       │
├─────────────────────────┤
│ _id: ObjectId (PK)      │
│ userId: ObjectId (FK)   │───┐
│ title: String           │   │ References
│ category: String        │   │ usersModel._id
│ amount: Number          │   │
│ createdAt: Date         │<──┘
│ updatedAt: Date         │
└─────────────────────────┘
```

### User Schema

**Collection:** `usersmodels`

```javascript
{
  _id: ObjectId,              // Auto-generated primary key
  username: String,           // User's display name from Google
  email: String,              // Unique email address (indexed)
  profileUrl: String,         // Google profile photo URL
  __v: Number                 // Version key (Mongoose default)
}
```

**Indexes:**
- `email` - Unique index for fast lookups and preventing duplicates

**Constraints:**
- `username` - Required field
- `email` - Required, unique field

---

### Expense Schema

**Collection:** `expensesmodels`

```javascript
{
  _id: ObjectId,              // Auto-generated primary key
  userId: ObjectId,           // Foreign key to usersModel
  title: String,              // Expense description/title
  category: String,           // Expense category (e.g., "Food", "Transport")
  amount: Number,             // Expense amount (supports decimals)
  createdAt: Date,            // Auto-generated creation timestamp
  updatedAt: Date,            // Auto-updated modification timestamp
  __v: Number                 // Version key (Mongoose default)
}
```

**Relationships:**
- `userId` references `usersModel._id` (many-to-one relationship)

**Constraints:**
- `userId` - Required field
- `title` - Required field
- `category` - Required field
- `amount` - Required field

**Indexes:**
- `userId` - For efficient expense queries by user
- `createdAt` - For chronological sorting

**Timestamps:**
- Automatically managed by Mongoose `{ timestamps: true }`
- `createdAt` - Set on document creation
- `updatedAt` - Updated on each modification

### Database Operations

**Query Patterns:**

1. **Find User by Email** (OAuth login)
   ```javascript
   usersModel.findOne({ email: profile.emails[0].value })
   ```

2. **Fetch User Expenses**
   ```javascript
   expensesModel.find({ userId: userId })
   ```

3. **Create Expense**
   ```javascript
   expensesModel.create({ title, amount, category, userId })
   ```

4. **Delete Expense**
   ```javascript
   expensesModel.deleteOne({ _id: expenseId })
   ```

## 🔒 Security Implementation

### Authentication & Authorization

**OAuth 2.0 with Passport.js:**
- Third-party authentication via Google OAuth 2.0
- No password storage in database (delegated authentication)
- Automatic user profile synchronization from Google
- Session-based stateful authentication

**Session Security:**
- `httpOnly: true` - Cookies inaccessible to JavaScript (XSS protection)
- `secure: true` (production) - Cookies only sent over HTTPS
- `sameSite: 'none'` (production) - Required for cross-domain cookies
- `sameSite: 'lax'` (development) - CSRF protection for same-site requests
- `maxAge: 7 days` - Session expiration policy

### Network Security

**CORS Configuration:**
```javascript
cors({
  origin: process.env.frontend_Url,  // Whitelist specific origin
  credentials: true                  // Allow cookies in cross-origin requests
})
```

**Trust Proxy:**
```javascript
app.set('trust proxy', 1);  // Trust first proxy (Vercel, Render, Heroku)
```
- Enables proper IP address detection behind reverse proxies
- Required for secure cookies in cloud environments

### Data Security

**Input Validation:**
- Zod schemas for runtime type checking
- Prevents malformed data from entering the system
- Custom validation rules for passwords (if implemented)

**Database Security:**
- MongoDB connection string in environment variables
- Mongoose schema validation
- No SQL injection risks with ODM abstraction

**Dependencies:**
- Bcrypt 6.0.0 - Password hashing capability (future use)
- JWT 9.0.2 - Token-based auth capability (future use)

### Security Best Practices Implemented

1. **Environment Variables:** All sensitive data (keys, secrets, URLs) in `.env`
2. **No Hardcoded Secrets:** Configuration externalized
3. **Least Privilege:** Sessions contain minimal user data
4. **Secure Defaults:** Production-ready cookie settings
5. **Error Handling:** No sensitive data exposed in error messages

### Recommended Security Enhancements

1. **Rate Limiting:** Add express-rate-limit to prevent brute force attacks
2. **Helmet.js:** Security headers for additional protection
3. **CSRF Tokens:** For state-changing operations
4. **Input Sanitization:** Additional sanitization middleware
5. **Session Store:** Migrate to Redis for production scalability
6. **API Key Rotation:** Regular rotation of OAuth credentials
7. **Logging & Monitoring:** Security event logging and alerting

## 🧪 Testing Strategy

### Current Testing Status

The project currently does not have automated tests configured. Below is a recommended testing strategy for implementation:

### Recommended Testing Approach

**Backend Testing:**
- **Unit Tests:** Jest for service layer functions
  - `expenseService.js` functions (fetch, store, delete)
  - Validation functions in `zod.js`
- **Integration Tests:** Supertest for API endpoints
  - Authentication flow testing
  - CRUD operations for expenses
  - Error handling scenarios
- **Database Tests:** MongoDB Memory Server for isolated testing

**Frontend Testing:**
- **Unit Tests:** Vitest (Vite's test runner) for components
  - Individual component rendering
  - Custom hooks testing
  - Context providers
- **Integration Tests:** React Testing Library
  - User interactions
  - Form submissions
  - API integration
- **E2E Tests:** Playwright or Cypress
  - Complete user flows
  - OAuth authentication flow
  - Expense management workflows

**Example Test Structure:**
```javascript
// Backend: expenseService.test.js
describe('Expense Service', () => {
  test('fetchExpensesFunction returns user expenses', async () => {
    // Test implementation
  });
});

// Frontend: leftComponents.test.jsx
describe('LeftDiv Component', () => {
  test('renders expense form correctly', () => {
    // Test implementation
  });
});
```

## 🛠️ Code Quality & Development Workflow

### Code Quality Tools

**ESLint Configuration (Frontend):**
- React-specific rules with hooks validation
- Modern ES2020+ syntax support
- Automatic code formatting enforcement
- Import/export validation

**Development Standards:**
- **Architecture:** MVC-inspired separation of concerns
- **Naming Conventions:** camelCase for variables/functions, PascalCase for components
- **File Organization:** Feature-based structure (routes, services, models)
- **Error Handling:** Try-catch blocks with custom error types
- **Comments:** Minimal but clear inline documentation

### Development Workflow

1. **Local Development:**
   ```bash
   # Backend
   cd backend/server
   npm run dev  # Starts nodemon with auto-reload
   
   # Frontend
   cd client/c
   npm run dev  # Starts Vite dev server with HMR
   ```

2. **Pre-commit Checks:**
   ```bash
   npm run lint      # Run ESLint
   # Future: npm test  # Run test suite
   ```

3. **Build Process:**
   ```bash
   # Frontend production build
   npm run build     # Creates optimized bundle in dist/
   npm run preview   # Preview production build locally
   ```

4. **Deployment:** Automatic via CI/CD (Vercel/Netlify)

### Performance Considerations

**Frontend Optimizations:**
- Vite for fast HMR and optimized production builds
- React 19 with concurrent features support
- Code splitting with React.lazy (future enhancement)
- Context API for efficient state management (no prop drilling)

**Backend Optimizations:**
- Express 5.0 with improved performance
- Mongoose connection pooling
- Session store optimization needed (Redis for production)
- Async/await for non-blocking operations

**Database Optimizations:**
- Indexed fields (email for users, userId for expenses)
- Efficient query patterns (single-field lookups)
- Timestamps for chronological sorting
- Potential for aggregation pipelines for analytics

## 🧪 Development Scripts

### Backend Commands

```bash
npm run dev      # Development mode with nodemon (auto-restart on file changes)
npm start        # Production mode (node server.js)
npm test         # Run test suite (to be configured)
```

**Nodemon Configuration:**
- Watches: `.js` files in server directory
- Ignores: `node_modules/`, `.git/`
- Auto-restarts on file changes

### Frontend Commands

```bash
npm run dev      # Development server on http://localhost:5173
                 # Hot Module Replacement (HMR) enabled
                 # Fast refresh for React components

npm run build    # Production build
                 # Output: dist/ directory
                 # Minified and optimized bundles
                 # Tree shaking and code splitting

npm run preview  # Preview production build locally
                 # Serves dist/ directory
                 # Test production build before deployment

npm run lint     # Run ESLint on all source files
                 # Checks for code quality issues
                 # React-specific linting rules
```

### Useful Development Commands

```bash
# Check application health
curl http://localhost:5000/api/user/expenseRoutes/

# Test MongoDB connection
mongosh <connection-string>

# View application logs
# Backend: nodemon provides console output
# Frontend: Browser DevTools console

# Check for outdated packages
npm outdated

# Update dependencies (carefully)
npm update
```

## 💡 Technical Interview Guide

This section helps you discuss the project in technical interviews, covering architecture decisions, trade-offs, and technical depth.

### Key Discussion Points

#### 1. Architecture Decisions

**Q: Why separate frontend and backend deployments?**

**A:** Decoupled architecture provides several benefits:
- **Independent Scaling:** Frontend (static) and backend (dynamic) scale differently
- **Technology Flexibility:** Can replace either layer without affecting the other
- **Deployment Speed:** Static site deployment (Netlify) is faster than server deployment
- **Cost Efficiency:** CDN hosting for frontend is cheaper than server hosting
- **Team Organization:** Frontend and backend teams can work independently

**Q: Why MongoDB over relational databases?**

**A:** MongoDB is suitable for this use case because:
- **Flexible Schema:** Expense categories can evolve without migrations
- **Document Model:** User-expense relationship maps naturally to documents
- **Horizontal Scaling:** Built-in sharding for future growth
- **JSON-like Structure:** Direct mapping to JavaScript objects
- **Trade-off:** No complex joins or transactions needed for this application

However, **a relational database (PostgreSQL) would be equally valid** for:
- ACID compliance
- Complex aggregations
- Enforced relationships
- Better for financial data requiring consistency

#### 2. Authentication Strategy

**Q: Why OAuth 2.0 over username/password?**

**A:** 
- **Security:** No password storage or management burden
- **User Experience:** Single-click login with existing Google account
- **Trust:** Users trust Google's security more than unknown services
- **Less Code:** Delegated authentication reduces attack surface
- **Trade-off:** Dependency on third-party service (Google downtime affects us)

**Q: Why session-based over JWT tokens?**

**A:**
- **Simpler Implementation:** Express-session handles most complexity
- **Revocation:** Can invalidate sessions server-side immediately
- **Size:** Session ID is smaller than JWT in cookies
- **Security:** Server-side session data is more secure
- **Trade-offs:**
  - Requires stateful server (session store)
  - Less suitable for microservices (JWT better for that)
  - Scalability requires external session store (Redis)

#### 3. Frontend Technology Choices

**Q: Why React 19 over Vue/Angular?**

**A:**
- **Ecosystem:** Largest library ecosystem and community support
- **Job Market:** Most in-demand framework (career perspective)
- **Performance:** Virtual DOM and React 19 concurrent features
- **Flexibility:** Library vs framework (more control)
- **Learning Curve:** Well-documented with extensive resources

**Q: Why Vite over Create React App (CRA)?**

**A:**
- **Speed:** Instant server start with ES modules
- **HMR:** Fast Hot Module Replacement (< 50ms)
- **Modern:** Built for ES modules, optimized builds
- **Bundle Size:** Better tree-shaking and code splitting
- **CRA is deprecated:** Vite is the modern standard

#### 4. Data Flow & State Management

**Q: How does data flow through the application?**

**A:**
```
User Action (UI) 
  → Event Handler (Component)
  → API Call (Axios)
  → Express Route (Backend)
  → Service Layer (Business Logic)
  → Mongoose Model (Database)
  → MongoDB
  ← Response (JSON)
  ← Update Context (State)
  ← Re-render (React)
  ← UI Update
```

**Q: Why Context API over Redux?**

**A:**
- **Simplicity:** No boilerplate, built into React
- **Use Case:** Simple global state (user, expenses list)
- **No Need for:** Time-travel debugging, complex middleware
- **Trade-off:** Redux better for complex state logic and debugging

**When Redux would be needed:**
- Multiple complex reducers
- Need for middleware (saga, thunk)
- Large team requiring strict patterns
- Advanced debugging requirements

#### 5. API Design Choices

**Q: Why RESTful API design?**

**A:**
- **Standard:** Industry-standard, well-understood
- **HTTP Methods:** Semantic CRUD operations (GET, POST, DELETE)
- **Stateless:** Each request is independent (except session)
- **Cacheable:** GET requests can be cached
- **Alternative:** GraphQL for complex data requirements or flexible queries

**API Design Patterns Used:**
- **Resource-based URLs:** `/expenses` not `/getExpenses`
- **HTTP Status Codes:** 200, 404, 500 appropriately
- **Consistent Response Format:** JSON with message field
- **Session-based Auth:** Session cookie for authentication

**Improvements for Production:**
- API versioning: `/api/v1/expenses`
- Pagination: `?page=1&limit=20`
- Filtering: `?category=Food&startDate=2024-01-01`
- Response standardization: `{ success, data, error, meta }`

#### 6. Database Design Trade-offs

**Q: Why reference-based relationships over embedded documents?**

**A:**
```javascript
// Current: Reference-based
User { _id, email, username }
Expense { _id, userId, title, amount }  // userId references User._id

// Alternative: Embedded
User { 
  _id, 
  email, 
  username,
  expenses: [{ title, amount, category }]  // Embedded array
}
```

**Chosen Reference-based because:**
- **Separation:** Users and expenses are distinct entities
- **Scalability:** Users can have unlimited expenses (no 16MB document limit)
- **Queries:** Easier to query expenses independently
- **Updates:** Updating an expense doesn't modify user document

**Embedded would be better if:**
- Always need user data with expenses
- Few expenses per user (< 100)
- No queries on expenses independently

#### 7. Error Handling Strategy

**Current Implementation:**
```javascript
try {
  const result = await expenseService();
  res.json({ message: result });
} catch (error) {
  console.log(error);
  res.json({ message: error.message });  // Should be 500 status
}
```

**Production-ready Approach:**
```javascript
try {
  const result = await expenseService();
  res.status(200).json({ 
    success: true, 
    data: result 
  });
} catch (error) {
  logger.error(error);  // Proper logging
  res.status(error.statusCode || 500).json({ 
    success: false, 
    error: error.message,
    ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
  });
}
```

### Performance Optimization Opportunities

1. **Database Queries:**
   - Add indexes on frequently queried fields
   - Implement query result caching
   - Use projection to limit returned fields
   - Aggregate pipeline for analytics

2. **API Response:**
   - Implement pagination for expense lists
   - Add ETag headers for cache validation
   - Use compression middleware (gzip)
   - Implement response caching for static data

3. **Frontend:**
   - Code splitting with React.lazy()
   - Memoization with React.memo() for expensive components
   - Virtual scrolling for long expense lists
   - Service Worker for offline capability

4. **Network:**
   - CDN for static assets
   - HTTP/2 for multiplexing
   - WebSocket for real-time updates
   - Debouncing for search/filter inputs

### Discussing Trade-offs in Interviews

**Example Discussion Format:**

"For session management, I chose express-session over JWT because the application prioritizes security and immediate revocation over horizontal scalability. The trade-off is that we need an external session store like Redis for multi-instance deployments, but the benefit is stronger security with server-side session control. In a microservices architecture, I would reconsider this decision and likely use JWT for stateless authentication."

### Project Strengths (Highlight These)

1. **Modern Stack:** React 19, Express 5, MongoDB 8, ES6+ syntax
2. **Security First:** OAuth 2.0, HTTP-only cookies, CORS, environment variables
3. **Production Deployment:** Live application on Vercel/Netlify
4. **Code Organization:** Clear separation of concerns (routes, services, models)
5. **Responsive Design:** Mobile-friendly UI
6. **Real-time Updates:** Context API for instant UI updates
7. **Data Visualization:** Recharts for expense analytics

### Areas for Improvement (Be Honest)

1. **Testing:** No automated tests implemented
2. **Error Handling:** Could be more robust with proper HTTP status codes
3. **Validation:** Limited input validation on backend
4. **Session Store:** In-memory store not production-ready for scale
5. **API Documentation:** No Swagger/OpenAPI documentation
6. **Monitoring:** No logging or application monitoring
7. **Pagination:** Loads all expenses (not scalable for thousands of entries)

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Kunal Rathore**

- GitHub: [@kunal-rathore-111](https://github.com/kunal-rathore-111)
- Project Link: [Expensify_Update_Project-2](https://github.com/kunal-rathore-111/Expensify_Update_Project-2)

## 🔧 Troubleshooting Guide

### Common Issues and Solutions

#### 1. OAuth Authentication Fails

**Symptom:** Redirect to Google works, but callback fails

**Possible Causes:**
- Incorrect callback URL in Google Cloud Console
- Mismatched `CALLBACK_URL` in `.env`
- Missing OAuth credentials

**Solutions:**
```bash
# Verify environment variables
echo $CLIENT_ID
echo $CLIENT_SECRET
echo $CALLBACK_URL

# Check Google Cloud Console:
# - OAuth 2.0 Client IDs → Authorized redirect URIs
# - Should match: http://localhost:5000/api/user/google/callback (dev)
# - Should match: https://your-domain.vercel.app/api/user/google/callback (prod)
```

#### 2. CORS Errors

**Symptom:** Browser console shows CORS policy errors

**Possible Causes:**
- Frontend URL not whitelisted in backend
- `credentials: true` missing in Axios or CORS config

**Solutions:**
```javascript
// Backend: Verify CORS configuration
app.use(cors({
  origin: process.env.frontend_Url,  // Must match exact frontend URL
  credentials: true
}));

// Frontend: Verify Axios configuration
axios.defaults.withCredentials = true;
```

#### 3. Session Not Persisting

**Symptom:** User logged out after refresh, session lost

**Possible Causes:**
- Cookie not being set properly
- `secure: true` in development (requires HTTPS)
- Browser blocking third-party cookies

**Solutions:**
```javascript
// Development environment
COOKIE_SECURE=development  // Uses secure: false, sameSite: 'lax'

// Production environment
COOKIE_SECURE=production   // Uses secure: true, sameSite: 'none'

// Check browser DevTools → Application → Cookies
// Verify 'connect.sid' cookie exists
```

#### 4. MongoDB Connection Fails

**Symptom:** `MongooseError: Cannot connect to MongoDB`

**Solutions:**
```bash
# Check connection string format
# mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/<dbname>

# Verify:
# 1. Username and password are correct
# 2. Special characters in password are URL-encoded
# 3. IP whitelist includes your IP (0.0.0.0/0 for allow all)
# 4. Database user has read/write permissions

# Test connection
mongosh "your-connection-string"
```

#### 5. Vercel Deployment Fails

**Symptom:** Build or deployment errors on Vercel

**Common Causes:**
- Missing environment variables
- Incorrect `vercel.json` configuration
- Node version mismatch

**Solutions:**
```bash
# Ensure vercel.json is in backend/server/
# Verify all environment variables are set in Vercel dashboard
# Check build logs for specific errors

# Test locally before deploying
cd backend/server
vercel dev  # Run Vercel development environment
```

#### 6. Expenses Not Loading

**Symptom:** Expenses page is blank or shows no data

**Debug Steps:**
```bash
# 1. Check browser DevTools → Network tab
#    - Look for failed API requests
#    - Check request/response headers and body

# 2. Verify user is authenticated
#    - Check for session cookie
#    - Test: GET /api/user/expenseRoutes/fetchExpenses

# 3. Check backend logs
#    - Look for errors in service layer
#    - Verify userId is being passed correctly

# 4. Test database query directly
mongosh "your-connection-string"
use your-database-name
db.expensesmodels.find({ userId: ObjectId("user-id") })
```

### Development Environment Issues

#### Port Already in Use

```bash
# Find process using port 5000
lsof -i :5000  # macOS/Linux
netstat -ano | findstr :5000  # Windows

# Kill process
kill -9 <PID>  # macOS/Linux
taskkill /PID <PID> /F  # Windows
```

#### Node Modules Issues

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Production Debugging

**Enable Detailed Logging:**
```javascript
// server.js - Add request logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`, req.session);
  next();
});
```

**Monitor Vercel Logs:**
```bash
vercel logs <deployment-url>
```

**Check Application Health:**
```bash
# Test backend endpoint
curl https://your-backend.vercel.app/

# Test with session
curl -H "Cookie: connect.sid=<session-id>" \
     https://your-backend.vercel.app/api/user/expenseRoutes/fetchExpenses
```

## 🐛 Known Limitations & Future Improvements

### Current Limitations

1. **Session Store:**
   - In-memory session store (not suitable for multi-instance deployments)
   - Sessions lost on server restart
   - **Recommendation:** Migrate to Redis for production scalability

2. **No User Management:**
   - Cannot delete account
   - Cannot update profile information
   - **Recommendation:** Add user settings page

3. **Limited Expense Categories:**
   - No predefined category list or validation
   - Users can enter any category string
   - **Recommendation:** Implement enum-based categories with UI dropdown

4. **No Budget Features:**
   - No budget limits or warnings
   - No spending goals
   - **Recommendation:** Add budget tracking and alerts

5. **Single-user Focus:**
   - No expense sharing between users
   - No collaborative features
   - **Recommendation:** Add family/team expense sharing

6. **No File Attachments:**
   - Cannot attach receipts or invoices
   - **Recommendation:** Integrate cloud storage (AWS S3, Cloudinary)

### Scalability Considerations

**Current Architecture Limitations:**
- Stateful sessions (not horizontally scalable without external store)
- No caching layer for frequently accessed data
- No rate limiting on API endpoints
- No data pagination (all expenses loaded at once)

**Recommended Scaling Strategy:**

1. **Short-term (< 10k users):**
   - Implement Redis for session storage
   - Add pagination to expense queries
   - Implement basic rate limiting
   - Add database connection pooling optimization

2. **Medium-term (10k - 100k users):**
   - Migrate to stateless JWT authentication
   - Implement Redis caching for user data
   - Add CDN for static assets
   - Database read replicas for query distribution
   - Implement background job queue for heavy operations

3. **Long-term (100k+ users):**
   - Microservices architecture (auth service, expense service)
   - Implement message queue (RabbitMQ, Kafka)
   - Database sharding by userId
   - Load balancer for API servers
   - Real-time features with WebSocket/Server-Sent Events

**Performance Targets:**
- API response time: < 200ms (p95)
- Page load time: < 2s (First Contentful Paint)
- Database query time: < 50ms
- Session lookup: < 10ms (with Redis)

### Security Enhancements Roadmap

1. **Immediate:**
   - Add Helmet.js for security headers
   - Implement rate limiting (express-rate-limit)
   - Add request validation middleware
   - Implement CSRF protection

2. **Near-term:**
   - Add activity logging and audit trails
   - Implement account lockout after failed attempts
   - Add two-factor authentication (2FA)
   - Regular security dependency audits (`npm audit`)

3. **Long-term:**
   - Implement role-based access control (RBAC)
   - Add encryption for sensitive data at rest
   - Security monitoring and alerting system
   - Regular penetration testing

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

### How to Contribute

1. **Fork the repository**
   ```bash
   # Click 'Fork' button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/your-username/Expensify_Update_Project-2.git
   cd Expensify_Update_Project-2
   ```

3. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/bug-description
   ```

4. **Make your changes**
   - Follow existing code style
   - Update documentation if needed
   - Test your changes locally

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```

   **Commit Message Format:**
   - `feat:` New feature
   - `fix:` Bug fix
   - `docs:` Documentation changes
   - `style:` Code style changes (formatting)
   - `refactor:` Code refactoring
   - `test:` Adding tests
   - `chore:` Maintenance tasks

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your fork and branch
   - Describe your changes clearly

### Development Guidelines

**Code Style:**
- Use meaningful variable and function names
- Keep functions small and focused (single responsibility)
- Comment complex logic
- Follow existing naming conventions

**Before Submitting:**
- Run ESLint: `npm run lint`
- Test locally with both frontend and backend running
- Update README if adding new features
- Ensure no console.log statements in production code

### Suggested Contributions

**Features:**
- [ ] Implement pagination for expense list
- [ ] Add expense editing functionality
- [ ] Create budget tracking feature
- [ ] Add expense filtering and sorting
- [ ] Implement data export (CSV, PDF)
- [ ] Add receipt upload feature
- [ ] Create dashboard with statistics
- [ ] Implement expense categories with icons
- [ ] Add search functionality
- [ ] Create monthly/yearly expense reports

**Technical Improvements:**
- [ ] Add unit and integration tests
- [ ] Implement Redis session store
- [ ] Add API documentation (Swagger)
- [ ] Implement rate limiting
- [ ] Add request logging
- [ ] Create Docker setup
- [ ] Add CI/CD pipeline
- [ ] Implement proper error handling middleware
- [ ] Add input validation with Zod on all routes
- [ ] Create database migration scripts

**Documentation:**
- [ ] Add JSDoc comments to functions
- [ ] Create API documentation
- [ ] Add architecture diagrams
- [ ] Create video walkthrough
- [ ] Write setup troubleshooting guide

## 📚 Learning Resources

This project demonstrates concepts from:

### Technologies & Concepts
- **React Documentation:** https://react.dev/
- **Express.js Guide:** https://expressjs.com/
- **MongoDB University:** https://university.mongodb.com/
- **OAuth 2.0 Specification:** https://oauth.net/2/
- **Passport.js Documentation:** http://www.passportjs.org/
- **Mongoose ODM:** https://mongoosejs.com/
- **Vite Guide:** https://vitejs.dev/guide/

### Best Practices
- **RESTful API Design:** https://restfulapi.net/
- **Security Best Practices:** OWASP Top 10
- **React Design Patterns:** Component composition, custom hooks, context
- **Database Design:** Normalization vs. denormalization
- **Session vs. Token Authentication:** Pros and cons analysis

## 📞 Support & Contact

### Reporting Issues

If you encounter bugs or have feature requests:

1. **Check existing issues:** [GitHub Issues](https://github.com/kunal-rathore-111/Expensify_Update_Project-2/issues)
2. **Create new issue:** Provide detailed description with:
   - Steps to reproduce
   - Expected vs actual behavior
   - Environment details (OS, Node version, browser)
   - Screenshots if applicable

### Questions & Discussions

- Open a [GitHub Discussion](https://github.com/kunal-rathore-111/Expensify_Update_Project-2/discussions)
- Check closed issues for solutions
- Review this comprehensive README

## 🙏 Acknowledgments

- Google Cloud Platform for OAuth services
- MongoDB Atlas for database hosting
- Vercel for backend hosting
- Netlify for frontend hosting
- React and Express communities for excellent documentation
- All contributors who help improve this project

---

## 📊 Project Statistics

- **Language Distribution:** JavaScript (100%)
- **Lines of Code:** ~2,000+ (excluding dependencies)
- **Dependencies:** 13 backend, 18 frontend
- **API Endpoints:** 6 routes
- **Database Collections:** 2 (users, expenses)
- **Deployment Platforms:** 2 (Vercel, Netlify)

## 🎯 Project Roadmap

### Phase 1: Core Features ✅
- [x] User authentication with Google OAuth
- [x] Expense CRUD operations
- [x] Visual analytics with pie charts
- [x] Responsive UI design
- [x] Production deployment

### Phase 2: Enhancements 🚧
- [ ] User profile management
- [ ] Expense categories with predefined options
- [ ] Budget tracking and alerts
- [ ] Monthly/yearly expense reports
- [ ] Data export functionality

### Phase 3: Scale & Quality 📋
- [ ] Automated testing suite
- [ ] Redis session store
- [ ] API documentation with Swagger
- [ ] Performance monitoring
- [ ] Advanced analytics dashboard

### Phase 4: Advanced Features 🔮
- [ ] Multi-currency support
- [ ] Recurring expenses
- [ ] Expense sharing with family/team
- [ ] Mobile app (React Native)
- [ ] Receipt scanning with OCR
- [ ] AI-powered expense insights

---

<div align="center">

**Built with ❤️ using React, Express, and MongoDB**

⭐ Star this repo if you find it helpful!

[Report Bug](https://github.com/kunal-rathore-111/Expensify_Update_Project-2/issues) · [Request Feature](https://github.com/kunal-rathore-111/Expensify_Update_Project-2/issues) · [Live Demo](https://expensify-update-project-2-frontend.vercel.app)

</div>
