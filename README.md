### README.md for Friendship Frontend Application

````markdown
# Friendship Frontend Application

This is the frontend application for the Friendship Management service. It allows users to manage their friends, send friend requests, accept or reject friend requests, view lists of friends, find common friends, and block users. The application is built with React and TypeScript.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [Technical Choices](#technical-choices)

## Features

- Create a friend request
- Accept or reject a friend request
- View list of friend requests
- View list of friends
- Retrieve the common friends list between two email addresses
- Block a user

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later) or yarn (v1.22 or later)
- The Friendship API server should be running (check the backend repository for setup instructions)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd friendship_frontend
   ```
````

2. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

## Running the Application

1. Start the application:

   ```bash
   npm start
   ```

   or

   ```bash
   yarn start
   ```

2. Open your browser and navigate to `http://localhost:3000`.

### Docker

Alternatively, you can run the application using Docker:

1. Build the Docker image:

   ```bash
   docker build -t friendship_frontend .
   ```

2. Run the Docker container:
   ```bash
   docker run -p 3000:3000 friendship_frontend
   ```

## Project Structure

```
friendship_frontend/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── FriendRequestForm.tsx
│   │   ├── FriendRequests.tsx
│   │   ├── FriendList.tsx
│   │   ├── CommonFriends.tsx
│   │   ├── BlockUserForm.tsx
│   │   └── ...
│   │
│   ├── services/
│   │   └── api.ts
│   │
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
│
├── package.json
├── tsconfig.json
├── Dockerfile
├── Makefile
└── README.md
```

## API Integration

The application integrates with the Friendship API server to perform various actions. Here are the API endpoints used:

- **Create a Friend Request**: `POST /friend-request`
- **Respond to a Friend Request**: `PUT /friend-request/respond`
- **List Friend Requests**: `GET /friend-requests/:email`
- **List Friends**: `GET /friends/:email`
- **Common Friends**: `POST /common-friends`
- **Block User**: `POST /block-user`

## Technical Choices

- **React with TypeScript**: For building a robust and type-safe user interface.
- **Styled-Components**: For styling the components with scoped and maintainable CSS.
- **Axios**: For making HTTP requests to the backend API.
- **Docker**: For containerizing the application to ensure consistency across different environments.

### Example: Adding Styled Components to BlockUserForm

```tsx
import React, { useState } from "react";
import { blockUser } from "../services/api";
import styled from "styled-components";

const Form = styled.form`
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Input = styled.input`
  margin: 5px 0;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 3px;
`;

const Button = styled.button`
  background-color: #dc3545;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

const BlockUserForm: React.FC = () => {
  const [requestor, setRequestor] = useState("");
  const [block, setBlock] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await blockUser(requestor, block);
      alert("User blocked!");
    } catch (error) {
      console.error(error);
      alert("Error blocking user.");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Block User</h2>
      <Input
        type="email"
        placeholder="Your email"
        value={requestor}
        onChange={(e) => setRequestor(e.target.value)}
        required
      />
      <Input
        type="email"
        placeholder="User to block"
        value={block}
        onChange={(e) => setBlock(e.target.value)}
        required
      />
      <Button type="submit">Block User</Button>
    </Form>
  );
};

export default BlockUserForm;
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.

```

### Explanation

1. **Introduction and Table of Contents**: Provides a brief overview and easy navigation.
2. **Features**: Lists the capabilities of the application.
3. **Prerequisites**: Details the requirements for running the application.
4. **Installation**: Step-by-step instructions for setting up the project.
5. **Running the Application**: Instructions for starting the application locally and using Docker.
6. **Project Structure**: A breakdown of the directory structure.
7. **API Integration**: Lists the API endpoints used and their purposes.
8. **Technical Choices**: Justifies the selection of technologies and provides an example of using styled-components.
9. **License**: Mentions the project's license.
```
