# Tech Blog

## Description
A CMS-style blog site where developers can publish their blog posts and comment on other developers' posts. This application follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Table of Contents
- [Tech Blog](#tech-blog)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Screenshots](#screenshots)
  - [Contributing](#contributing)
  - [Questions](#questions)

## Installation
1. Clone the repository
2. Install dependencies
   ```bash
   npm install
   ```
3. Create a .env file in the root directory with your database credentials:
   ```
   DB_NAME='techblog_db'
   DB_USER='your_username'
   DB_PASSWORD='your_password'
   ```
4. Create the database using the schema file:
   ```bash
   psql -U postgres
   \i db/schema.sql
   ```
5. Seed the database:
   ```bash
   node seeds/seed.js
   ```
6. Start the server:
   ```bash
   npm start
   ```

## Usage
- Visit the site and create an account to start blogging
- Create, edit, and delete your blog posts
- Comment on other users' posts
- View all posts on the homepage
- Manage your posts in the dashboard

## Features
- User authentication (signup/login)
- Create, read, update, and delete blog posts
- Comment on blog posts
- Dashboard for managing personal posts
- Clean and responsive user interface
- Session timeout for security

## Technologies Used
- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM
- Handlebars.js
- express-session
- bcrypt
- dotenv

## Screenshots
[Add your application screenshots here]

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## Questions
If you have any questions about the repository, please open an issue or contact me directly at [your-email@example.com].

GitHub: [Your GitHub Username](https://github.com/jjfcode/challenge-14-Techblog)