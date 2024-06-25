# Worko Backend API

## Setup

1. Clone the repository.
2. Install dependencies:

```sh
npm install

3. Create a .env file with the following variables:

MONGO_URI = "your mongodb uri"  
SECRET_KEY = "yoursecret"
PORT = "port on which you want to run server"

4. Build the project:

npm run build

5. Start the server:

npm start



Endpoints


    POST /worko/admin/signup - Create admin
    POST /worko/admin/login - Login as admin

    # authenticated endpoints needs admin login to get access to these routes
    GET /worko/user - List all users
    GET /worko/user/:userId - Get user details
    POST /worko/user - Create a new user
    PUT /worko/user/:userId - Update user
    PATCH /worko/user/:userId - Partially update user
    DELETE /worko/user/:userId - Soft delete user
