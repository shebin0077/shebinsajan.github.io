# 🌍 Travlr Getaways – Full Stack Web Application

## 📄 Project Overview

Travlr Getaways is a full stack travel booking application designed for both customers and administrators. The application allows users to view trips and book them, while admins can manage trip listings through a secure login. Built using the MEAN stack (MongoDB, Express, Angular/HTML, Node.js), the app demonstrates real-world implementation of frontend and backend technologies.

---

## 🏗️ Architecture

This project involved multiple types of frontend development:

- **Express HTML + JavaScript**: Early stages of development used Express to serve static HTML files with embedded JavaScript for interactivity.
- **Single Page Application (SPA) with Handlebars**: Later iterations included Handlebars templates rendering dynamic JSON data from the backend, creating a faster, more seamless user experience.

### Why MongoDB?

- MongoDB is a flexible NoSQL database ideal for evolving data structures like trip records.
- It supports nested documents and dynamic schemas, which simplified development.
- Integration with Node.js through Mongoose made data modeling efficient and intuitive.

---

## ⚙️ Functionality

### JSON vs JavaScript

- **JavaScript** is a scripting language used for logic and interactivity.
- **JSON** (JavaScript Object Notation) is a data format used for communication between the frontend and backend.
- JSON played a key role in transferring trip and booking data from the server to the client-side Handlebars templates.

### Code Refactoring & Reusability

Examples of improvements:
- Broke down route handlers into modular files (`routes/trips.js`, `routes/admin.js`).
- Created reusable Handlebars partials for trip listings and navbars.
- Benefits: Cleaner code, easier debugging, improved scalability, and faster development for future updates.

---

## 🧪 Testing

### API Methods & Endpoints

- Used RESTful API methods:  
  - `GET` for retrieving trips  
  - `POST` for booking or admin form submissions  
  - `PUT`/`DELETE` for editing and removing trips

### Security Testing

- Protected admin endpoints using session-based authentication.
- Middleware restricted access to admin dashboard unless authenticated.
- API endpoints were tested with Postman to ensure only logged-in admins could perform sensitive actions.

---

## 💬 Reflection

This course has strengthened my skills as a full stack developer. I’ve learned how to:

- Design and build RESTful APIs.
- Implement MVC architecture in Express applications.
- Use MongoDB for flexible, real-time data storage.
- Secure routes and sessions for authentication.
- Manage dynamic frontends with Handlebars and JSON.

These skills have made me more confident and marketable in the software development field. The experience of building a complete application from scratch has shown me how to approach real-world projects and solve complex problems independently.

---

## 🔗 GitHub Repository

[GitHub Repo Link Here](https://github.com/shebin0077/CS465.git)

