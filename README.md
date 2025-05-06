# Task Management System with GraphQL

A modern task management system built with Node.js, Express, and GraphQL. This project demonstrates the implementation of a GraphQL API for managing tasks with features like creating, reading, updating, and deleting tasks.

## Features

- GraphQL API for task management
- CRUD operations for tasks
- Apollo Server integration
- Express.js backend
- Modern JavaScript/Node.js architecture

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd gestion-de-taches-avec-GraphQL
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
node index.js
```

The server will start running on `http://localhost:4000/graphql`

## API Documentation

### GraphQL Schema

The API provides the following operations:

- **Queries:**
  - `getAllTasks`: Retrieve all tasks
  - `getTask(id)`: Get a specific task by ID

- **Mutations:**
  - `createTask(title, description)`: Create a new task
  - `updateTask(id, title, description, completed)`: Update an existing task
  - `deleteTask(id)`: Delete a task

## Technologies Used

- Node.js
- Express.js
- GraphQL
- Apollo Server
- @graphql-tools/schema

## Project Structure

```
├── index.js              # Main application entry point
├── taskSchema.js         # GraphQL schema definitions
├── taskSchema.gql        # GraphQL schema in SDL format
├── taskResolver.js       # GraphQL resolvers
├── package.json          # Project dependencies and scripts
└── README.md            # Project documentation
```

