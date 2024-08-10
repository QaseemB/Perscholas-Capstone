# Audio Engineering E-commerce Platform

This project is developed as part of the Per Scholas program and showcases a comprehensive e-commerce platform for audio engineering equipment. The platform is built using Express.js, Pug, and MongoDB. 

## Features

- **User Management**: Users can sign up, log in, and view their profiles.
- **Product Listings**: Browse a wide selection of audio equipment, including studio gear and instruments.
- **Static Files**: Serves static files from the `public` directory.
- **Dynamic Rendering**: Uses Pug templates to render dynamic content on the frontend.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: Pug
- **Database**: MongoDB
- **Environment Variables**: dotenv
- **Validation**: express-validator

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/yourrepo.git
   cd yourrepo
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add your MongoDB connection string:

   ```env
   ATLAS_URI=your_mongodb_connection_string
   ```

4. **Run the application:**

   For development:

   ```bash
   npm run start:dev
   ```

   For production:

   ```bash
   npm start
   ```

## Usage

### Static Files

Static files are served from the `public` directory. By default, the `styles` directory is used for CSS files.

### Views

Pug templates are located in the `src/views` directory.

### Routes

- **Home**: `GET /`
- **User Home**: `GET /userhome`
- **Studio Equipment**: `GET /studio`
- **Instruments**: `GET /instruments`

### API Endpoints

- **Users**: `/api/users`
- **Instruments**: `/api/instrument`
- **Studio Equipment**: `/api/studio`

### Middleware

A custom middleware logs the time of each request:

```javascript
const logTime = (req, res, next) => {
  const time = new Date();
  console.log(`-----${time.toLocaleTimeString()}: Received a ${req.method} request to ${req.url}.`);
  next();
};

app.use(logTime);
```

## Database Models

### Studio Equipment

```javascript
const studioSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  dimensions: {
    type: String,
    required: true,
  }
});

const Studio = mongoose.model("Studio", studioSchema);
export { Studio };
```

## Scripts

### Clean Data

A script to clean and populate the database:

```bash
npm run cleanData
```

## Contributors

- **Qaseem Barnhardt** - Developer

## License

This project is licensed under the ISC License. See the LICENSE file for details.

## Acknowledgments

- Per Scholas for the training and support.
- Nadir for the script idea.
