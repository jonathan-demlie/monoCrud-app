```markdown
# CRUD APP

An example project showcasing a full-stack web application using Prisma, NestJS, React, React Query, TypeScript, and Vite.

## Table of Contents

- [Description](#description)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Screenshots](#screenshots)
- [Backend (NestJS)](#backend-nestjs)
- [Frontend (React with Vite)](#frontend-react-with-vite)
- [Contributing](#contributing)
- [License](#license)

## Description

This project demonstrates the integration of Prisma, NestJS, React, React Query, TypeScript, and Vite to build a modern full-stack web application. It's designed to help you get started with a strong foundation for your own projects.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- npm or yarn package manager
- MySQL database for Prisma (update the database connection settings in the backend as needed)

## Getting Started

To get started, follow these steps:

1. Clone the repository:

   ```bash
    git clone https://github.com/jonathan-demlie/mono-crud-app.git
   cd mono-crud-app
   ```bash

2. Install dependencies:

   ```bash
   $ cd backend/
   npm install

   cd /api
   npm install
   ```
```bash
create or update .env file on roo directory of mono-crud-app
DATABASE_URL=mysql://root:root@localhost:3306/crud
```bash

3. Start the backend (NestJS) server:

   ```bash
   ~/backend$
   npm run start
   ```

4. Start the frontend (React with Vite) development server:

   ```bash
   cd api
   npm run dev
   ```

   ## Database

```bash
$ cd backend
$ npm install -g @nestjs/cli
$ nest new prisma
$ cd prisma
$ npm install prisma --save-dev
$ npx prisma

$ npx prisma init

$ npx prisma migrate dev --users init  // you can change users by your favorite name

$ npm install @prisma/client

DATABASE_URL=mysql://root:root@localhost:3306/crud

```bash

frontend api http://localhost:5173/
backend http://localhost:3000/api/v1/users


## Backend (NestJS)
```
```
The backend of this project is built with NestJS and uses Prisma to interact with the database. Here's a brief overview of the backend structure:

- API routes defined in `src/users/controller`
- Data models and database schema in `src/users/module`
- Prisma configuration in `prisma/schema.prisma`

For more details on NestJS and Prisma, refer to their respective documentation.

## Frontend (React with Vite)
```
```
The frontend is built using React and Vite as the build tool. Key features include:

- React Query for efficient data fetching
- TypeScript for type safety
- Component-based structure in the `src/components` directory

Explore the frontend code to learn more about how React, React Query, and Vite are used in this project.
```
```
## Screenshots

![Screenshot 1](api/screenshots/screenshot1.png)

![Screenshot 2](api/screenshots/screenshot2.png)

![Screenshot 3](api/screenshots/screenshot3.png)

![Screenshot 3](api/screenshots/screenshot4.png)

![Screenshot 3](api/screenshots/screenshot5.png)

## Contributing

```
```
Contributions are welcome! If you have ideas or improvements, feel free to open issues and submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
```

Feel free to customize this README with your project-specific details and make it as detailed as you need.
