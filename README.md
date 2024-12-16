
# NODE (Express) API with MySQL

This project is an Node-based API that interacts with a MySQL database, providing endpoints for user and note management. The API includes functionalities for creating, reading, updating, and deleting notes, as well as user authentication.

## Features

- **User Management**: Register users with email and password.
- **Note Management**: Create, update, retrieve, and delete notes associated with users and categories.
- **JWT Authentication**: Secure endpoints with JSON Web Tokens (JWT).
- **MySQL Database**: Interact with a MySQL database for storing user and note data.
- **Error Handling**: Custom error handling middleware for better error management.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/express-mysql-api.git
   ```
2. Navigate to the project directory:
   ```bash
   cd express-mysql-api
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and add your MySQL and JWT configuration:
   ```dotenv
   MYSQL_HOST=your_mysql_host
   MYSQL_USER=your_mysql_user
   MYSQL_PASS=your_mysql_password
   MYSQL_DB=your_database_name
   SECRET_KEY=your_jwt_secret_key
   HTTP_PORT=your_server_port
   ```

## Usage

To start the server:

```bash
npm start
```

The server will run on `http://localhost:<HTTP_PORT>`.

## API Endpoints

### User Endpoints
- `POST /api/user/register` - Register a new user.
- `POST /api/user/login` - Login and obtain a JWT token.

### Note Endpoints
- `GET /api/note` - Get all notes for the logged-in user.
- `POST /api/note` - Create a new note.
- `PUT /api/note/:id` - Update an existing note.
- `DELETE /api/note/:id` - Delete a note.

## Database Setup

This project uses MySQL for storing data. The following tables are created upon running the application:

- `users`: Stores user information (email, password).
- `categories`: Stores categories for notes.
- `notes`: Stores notes with references to users and categories.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.