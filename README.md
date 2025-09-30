# Backend-Task
# 📚 Student Management Backend (Mini Project)

This is a simple **Node.js mini project** that demonstrates:

- File operations with **synchronous** and **asynchronous** methods.
- Creating an **HTTP server** that serves student data from a JSON file.
- Practicing CRUD-like operations on JSON data.
- Using Node.js core modules (`fs`, `http`, `path`).

---
## 🚀 Features

### File Operations (`fileOperations.js`)
- **Read Students** – Read data from `students.json` (Sync & Async).
- **Write Students** – Write changes back to the JSON file.
- **Add Student** – Add new student to the list.
- **Update Student** – Update course for a specific student.
- **Delete Student** – Remove a student by ID.
- Supports both:
  - **Sync functions** (`fs.readFileSync`, `fs.writeFileSync`)
  - **Async functions** (`fs.promises.readFile`, `fs.promises.writeFile`)
---

### HTTP Server (`server.js`)
Runs a simple HTTP server on port **3000** with these routes:

- **GET `/students`** → Returns all students in JSON.
- **GET `/stats`** → Returns:
  - Total number of students.
  - Average grade across all subjects.
- **GET `/courses`** → Returns a unique list of courses.
- **404** → For undefined routes.

✅ Includes error handling and proper status codes.  
✅ Uses JSON file as a data source (not in-memory).

---

## 🗂 Project Structure

## Structure
- `Solve-Task/`: Contains task solution files
  - `fileOperations.js`: File operations demo (Sync & Async)
  - `server.js`: HTTP server implementation
  - `students.json`: Student data in JSON format
  - `warmup.js`: Practice file for warm-up exercises
- `README.md`: Project overview
- `lab1.md`: Lab instructions or documentation
---
## ⚡ Getting Started

### 1. Clone the Repository
```bash

git clone https://github.com/mohamed-alnagar/Backend-Task.git

cd Backend-Task/Solve-Task

2. Install Node.js

Make sure you have Node.js installed (>= v14).
Check version:

bash

node -v
3. Run File Operations Demo
bash
 
node fileOperations.js
4. Run the Server
bash
 
node server.js
The server will start at:
 
http://localhost:3000
🔍 API Endpoints
GET /students → Returns all students.

GET /stats → Returns stats (total students + average grade).

GET /courses → Returns unique courses.

🛠 Technologies Used
Node.js (no external frameworks)

Core modules: fs, http, pat
