# Audiophile E-Commerce Platform

## Project Overview

The **Audiophile E-Commerce Platform** is a full-stack application designed to serve as an online store for audio engineering products. The platform aims to provide a seamless shopping experience for audio professionals and enthusiasts, offering a range of products including musical instruments and studio equipment.

## Intended Goals

The primary goals of this project are:

- **User Authentication:** Allow users to register, log in, and manage their accounts securely.
- **Product Management:** Enable users to browse and search for various audio engineering products, including instruments and studio equipment.
- **Shopping Cart Functionality:** Implement a shopping cart system where users can add products, view their cart, and proceed to checkout.
- **Responsive Design:** Create a user-friendly interface that works well on both desktop and mobile devices.
- **Admin Features:** Provide functionality for administrators to manage products and users efficiently.

## Tech Stack

The application is built using the following technologies:

- **Frontend:**
  - React
  - Axios
  - Tailwind CSS

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose

- **Others:**
  - Express Validator for input validation
  - Vite for development server and build tools


  ## Acknowledgements

    Credit to Nadir for the cleanData script, which was instrumental in seeding the database with initial product data

## Project Structure

Barnhardt_Qaseem_Audiophile_Capstone
├── Backend
├── Frontend
├── eslint.config.js
├── index.html
├── node_modules
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
├── src
├── tailwind.config.js
├── vite.config.js
└── README.md

## Known Issues

- The shopping cart logic is not functioning as intended. Further debugging is required to ensure that users can successfully add, view, and manage items in their shopping carts.


## Features

- User registration and login with JWT authentication.
- Product categories for instruments and studio equipment.
- CRUD operations for managing users, products, and shopping cart items.
- Responsive design with Tailwind CSS for an appealing user interface.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/Barnhardt_Qaseem_Audiophile_Capstone.git


2. Navigate to the project directory:



 cd Barnhardt_Qaseem_Audiophile_Capstone

3. Install backend dependencies:



cd Backend
npm install

4. Install frontend dependencies:



cd ../Frontend
npm install

5. Set up your environment variables for the backend (e.g., MongoDB connection string).

6. Start the backend server:



cd Backend
npm run start

7. Start the frontend development server:



    cd ../Frontend
    npm run dev

Usage

    Visit http://localhost:3000 in your web browser to access the application.
    Users can register, log in, browse products, and add items to their shopping cart.

Contributing

Contributions are welcome! If you have suggestions or improvements, please open an issue or submit a pull request.
License


Feel free to modify any sections to better fit your project's specifics or your preferences!

