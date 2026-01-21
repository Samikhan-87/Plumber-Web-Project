# 🔧 Salman and Ayan Plumbing Services

A modern, full-stack plumbing services website built with React and Node.js.

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [MongoDB Setup](#mongodb-setup)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)

---

## ✨ Features

- 🏠 **Home Page** - Landing page with services overview and booking form
- 👥 **About Us** - Company history, team, and values
- 🛠️ **Services** - Detailed plumbing services listing
- ⭐ **Testimonials** - Customer reviews and feedback
- 📅 **Booking System** - Online appointment booking with user authentication
- 🔐 **User Authentication** - Login and Signup functionality
- 💬 **Live Support** - Chat modal for customer support

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Tailwind CSS
- React Router DOM

**Backend:**
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcrypt for password hashing

---

## 📌 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)
- [MongoDB Atlas Account](https://www.mongodb.com/atlas) (Free)

---

## 🚀 Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/Plumber-Web-Project.git
cd Plumber-Web-Project
```

### Step 2: Install Frontend Dependencies

```bash
npm install
```

### Step 3: Install Backend Dependencies

```bash
cd backend
npm install
cd ..
```

---

## 🍃 MongoDB Setup

Follow these steps to set up your MongoDB database:

### Step 1: Create MongoDB Atlas Account

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Click **"Try Free"** and create an account
3. Verify your email address

### Step 2: Create a Cluster

1. After logging in, click **"Build a Database"**
2. Choose **"FREE - Shared"** option
3. Select your preferred cloud provider (AWS, Google Cloud, or Azure)
4. Choose a region closest to you
5. Click **"Create Cluster"** (this takes 1-3 minutes)

### Step 3: Create Database User

1. In the left sidebar, click **"Database Access"**
2. Click **"Add New Database User"**
3. Choose **"Password"** authentication
4. Enter a username (e.g., `plumber`)
5. Enter a strong password (e.g., `plumber123`) - **Save this!**
6. Set privileges to **"Read and write to any database"**
7. Click **"Add User"**

### Step 4: Whitelist Your IP Address

1. In the left sidebar, click **"Network Access"**
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (for development)
4. Click **"Confirm"**

### Step 5: Get Connection String

1. Go back to **"Database"** in the sidebar
2. Click **"Connect"** on your cluster
3. Select **"Connect your application"**
4. Copy the connection string (it looks like this):
   ```
   mongodb+srv://plumber:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
5. Replace `<password>` with your actual password
6. Add your database name before `?` like this:
   ```
   mongodb+srv://plumber:plumber123@cluster0.xxxxx.mongodb.net/plumberdb?retryWrites=true&w=majority
   ```

---

## ⚙️ Environment Variables

### Step 1: Create `.env` file in backend folder

Navigate to the `backend` folder and create a `.env` file:

```bash
cd backend
```

Create a file named `.env` and add the following:

```env
MONGO_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/plumberdb?retryWrites=true&w=majority
JWT_SECRET=your_secret_key_here
PORT=5000
```

### Example `.env` file:

```env
MONGO_URI=mongodb+srv://plumber:plumber123@cluster0.qbqshrk.mongodb.net/plumberdb?retryWrites=true&w=majority
JWT_SECRET=plumber123secret
PORT=5000
```

> ⚠️ **Important:** Never commit your `.env` file to GitHub. It's already in `.gitignore`.

---

## ▶️ Running the Project

### Terminal 1: Start Backend Server

```bash
cd backend
node server.js
```

You should see:
```
✅ MongoDB connected
🚀 Server running on port 5000
```

### Terminal 2: Start Frontend

```bash
npm start
```

The website will open at `http://localhost:3000`

---

## 📁 Project Structure

```
Plumber-Web-Project/
├── backend/
│   ├── models/
│   │   ├── Booking.js
│   │   └── User.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── bookings.js
│   ├── .env              # Your environment variables (create this)
│   ├── config.js
│   ├── package.json
│   └── server.js
├── public/
│   └── index.html
├── src/
│   ├── components/
│   ├── functions/
│   ├── gallery/
│   ├── logo/
│   ├── pages/
│   ├── styles/
│   ├── App.js
│   └── index.js
├── package.json
├── tailwind.config.js
└── README.md
```

---

## 🔑 How to Use

1. Go to `http://localhost:3000/signup`
2. Create a new account with your email and password
3. Login with your credentials
4. Now you can book appointments!

---

## 🐛 Troubleshooting

### MongoDB Connection Error
- Make sure your IP is whitelisted in MongoDB Atlas
- Check if your password in `.env` is correct
- Ensure there are no spaces in your connection string

### Port Already in Use
- Backend: Change PORT in `.env` file
- Frontend: It will automatically ask to use another port

### Token Expired Error
- Simply login again to get a new token

---

## 👨‍💻 Author

**Salman and Ayan Enterprises**

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
