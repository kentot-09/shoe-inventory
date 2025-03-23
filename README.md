# Shoe Inventory System

## Project Overview
The Shoe Inventory System is a simple CRUD (Create, Read, Update, Delete) application that allows users to manage a list of shoes. The project consists of a frontend built with ReactJS and a backend using Node.js with Express.

## Technologies Used
### Frontend:
- ReactJS
- Fetch API for HTTP requests
- HTML, CSS, JavaScript

### Backend:
- Node.js
- Express.js
- CORS (Cross-Origin Resource Sharing)

## Features
- **Add a Shoe**: Users can enter shoe details and add them to the inventory.
- **View All Shoes**: Displays a list of all shoes currently in the inventory.
- **Delete a Shoe**: Users can remove a shoe from the inventory.

## Folder Structure
```
shoe-inventory/
│── backend/
│   ├── server.js   # Backend server file
│   ├── package.json   # Backend dependencies
│
│── frontend/
│   ├── src/
│   │   ├── App.js  # Main React component
│   │   ├── index.js  # React entry point
│   ├── package.json  # Frontend dependencies
```

## Installation and Setup
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Backend Setup
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the backend server:
   ```sh
   node server.js
   ```
   The server should now be running on `http://localhost:5000`

### Frontend Setup
1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend server:
   ```sh
   npm start
   ```
   The application should now be accessible at `http://localhost:3000`

## API Endpoints
### Backend API Routes
- **GET `/shoes`** - Retrieves all shoes
- **POST `/shoes`** - Adds a new shoe (expects JSON body: `{ name: "Shoe Name" }`)
- **DELETE `/shoes/:id`** - Deletes a shoe by ID

## How It Works
### Frontend-Backend Communication Flow
1. **User opens the website** → Frontend requests the list of shoes from the backend.
2. **User adds a shoe** → Sends a `POST` request to the backend, which adds the shoe to the in-memory storage.
3. **User deletes a shoe** → Sends a `DELETE` request to the backend, removing the shoe from storage.
4. **Backend processes requests** → Responds to frontend with updated data.

## Troubleshooting
- If the backend does not start, ensure no other process is using port 5000.
- If the frontend does not display data, check the console for CORS or network errors.

## Future Enhancements
- Add a database (e.g., MongoDB, PostgreSQL) for persistent storage.
- Implement a user authentication system.
- Improve the UI with better styling.



