# 💰 Expensify - Expense Tracker Application

A full-stack expense tracking application built with React and Node.js that helps users manage their finances effortlessly. Features Google OAuth authentication, real-time expense management, and visual analytics with interactive charts.

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

## 📁 Project Structure

```
Expensify_Update_Project-2/
├── backend/
│   └── server/
│       ├── config/          # Configuration files (DB, Passport)
│       ├── middlewares/     # Custom middleware functions
│       ├── models/          # Mongoose schemas (User, Expense)
│       ├── routes/          # API routes (userRoutes, expenseRoutes)
│       ├── service/         # Business logic and services
│       ├── validations/     # Input validation schemas
│       ├── server.js        # Main server file
│       ├── package.json     # Backend dependencies
│       └── vercel.json      # Vercel deployment config
├── client/
│   └── c/
│       ├── src/
│       │   ├── components/  # React components (left, right, pieChart)
│       │   ├── contexts/    # React context providers
│       │   ├── hooks/       # Custom React hooks
│       │   ├── Login/       # Login page components
│       │   ├── expenses/    # Expense management pages
│       │   ├── ErrorPage/   # Error handling pages
│       │   ├── assets/      # Images and static assets
│       │   ├── App.jsx      # Main App component
│       │   └── main.jsx     # Application entry point
│       ├── package.json     # Frontend dependencies
│       └── vite.config.js   # Vite configuration
├── netlify.toml             # Netlify deployment config
├── .gitignore               # Git ignore rules
└── README.md                # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)
- **Google Cloud Console** account for OAuth credentials

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

## 🌐 Deployment

### Backend (Vercel)

The backend is configured for deployment on Vercel:

1. Install Vercel CLI: `npm i -g vercel`
2. Navigate to `backend/server/`
3. Run `vercel` and follow the prompts
4. Configure environment variables in Vercel dashboard

The `vercel.json` file is already configured for deployment.

### Frontend (Netlify)

The frontend is configured for deployment on Netlify:

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

The `netlify.toml` file is already configured with redirects for SPA routing.

**Current Deployment:**
- Backend: `https://expensify-update-project-2-backend.vercel.app`

## 📡 API Endpoints

### Authentication
- `GET /api/user/auth/google` - Initiate Google OAuth login
- `GET /api/user/google/callback` - Google OAuth callback

### Expenses
- `GET /api/user/expenseRoutes/` - Success redirect route after authentication
- `GET /api/user/expenseRoutes/fetchExpenses` - Fetch all expenses for authenticated user
- `POST /api/user/expenseRoutes/addExpense` - Add a new expense
  - Body: `{ title: string, category: string, amount: number }`
- `DELETE /api/user/expenseRoutes/deleteExpense/:expenseId` - Delete an expense by ID

## 📊 Database Schema

### User Model
```javascript
{
  username: String (required),
  email: String (required, unique),
  profileUrl: String
}
```

### Expense Model
```javascript
{
  userId: ObjectId (ref: usersModel),
  title: String (required),
  category: String (required),
  amount: Number (required),
  timestamps: true  // createdAt, updatedAt
}
```

## 🔒 Security Features

- Session-based authentication with secure cookies
- CORS protection with configured origins
- HTTP-only cookies to prevent XSS attacks
- Trust proxy configuration for reverse proxies
- 7-day session expiration
- Bcrypt for password hashing (if needed)
- JWT support for token-based authentication

## 🧪 Development Scripts

### Backend
```bash
npm run dev     # Run with nodemon (auto-restart)
npm start       # Run in production mode
npm test        # Run tests (to be configured)
```

### Frontend
```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run preview # Preview production build
npm run lint    # Run ESLint
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

Kunal Rathore

## 🐛 Known Issues

- Google Auth configuration may need updates based on deployment environment
- Ensure proper CORS and cookie settings when deploying to production

## 📞 Support

For issues or questions, please open an issue on the GitHub repository.
