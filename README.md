# Authentication & Authorization Application

🔗 **Live Demo:** [Visit the Application](https://prodigy-fwd-01-7.onrender.com/)

This project is a **secure authentication and authorization** system built using **React** for the frontend and **Node.js, Express, and MongoDB** for the backend. It provides a robust login and registration system with **JWT-based authentication**, encrypted passwords, and session management for enhanced security.

## Features

### 🔐 Authentication & Authorization
- **User Registration**: Users can create an account using their email and password.
- **Secure Password Hashing**: Passwords are securely stored using `bcrypt`.
- **JWT Authentication**: JSON Web Tokens (JWT) are used for secure user authentication and session management.
- **Token-Based Authorization**: API routes are protected using JWT verification.
- **Role-Based Access Control (RBAC)**: Users can be assigned roles with different access permissions.
- **Persistent Login**: Authentication tokens are stored securely using HTTP-only cookies.
- **Logout Functionality**: Users can log out, which invalidates the token.

### 📡 Tech Stack

#### Frontend
- **React 19**: Core frontend framework.
- **React Router DOM**: Manages routing for different authentication pages.
- **Axios**: Handles API requests.
- **React Hot Toast**: Provides instant feedback to users with notifications.
- **React Spinners**: Displays loading indicators.
- **React Bootstrap**: Provides UI components for a polished user experience.

#### Backend
- **Node.js & Express**: Server-side framework for handling requests.
- **MongoDB & Mongoose**: NoSQL database for storing user data.
- **bcrypt**: Secure password hashing.
- **jsonwebtoken (JWT)**: Manages authentication and authorization.
- **cookie-parser**: Parses authentication cookies.
- **dotenv**: Manages environment variables.
- **CORS**: Enables secure cross-origin requests.

## 🛠 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/TomYenialem/PRODIGY_FWD_01.git
cd authentication-app
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install
```

#### Create a `.env` file and configure the environment variables:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

#### Start the backend server:
```bash
npm run dev
```

### 3️⃣ Frontend Setup
```bash
cd frontend
npm install
```

#### Start the frontend application:
```bash
npm run dev
```

## 🚀 Running the Application
Once both frontend and backend servers are running, you can access the application at:
```
http://localhost:3000
```

## 🔍 API Endpoints
### **User Authentication**
| Method | Endpoint       | Description                 |
|--------|---------------|-----------------------------|
| POST   | /api/auth/register | Register a new user         |
| POST   | /api/auth/login    | Authenticate user & get token |
| GET    | /api/auth/user     | Get logged-in user info     |
| POST   | /api/auth/logout   | Logout user                 |

## 🛡 Security Measures
- **JWT expiration and refresh tokens** prevent session hijacking.
- **HTTP-only cookies** store authentication tokens securely.
- **Password hashing** ensures user credentials remain protected.
- **Role-based access control (RBAC)** restricts unauthorized access.

## 📜 License
This project is licensed under the MIT License.

## 💡 Future Improvements
- Multi-factor authentication (MFA)
- OAuth social login (Google, Facebook, etc.)
- Email verification during registration

---

### 📬 Contact
For any issues or contributions, feel free to open a pull request or contact me at [your-email@example.com](tom21g2008@gmail.com).

