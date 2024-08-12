import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
import { USERS } from '../models/users.mjs';

export const authMiddleware = async (req, res, next) => {
  console.log("Cookies:", req.cookies); 
  const token = req.cookies.token; 

  if (!token) {
      return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.jwtSecret);
    console.log("Decoded User ID:", decoded.user.id);

    req.user = await USERS.findById(decoded.user.id).select('-password');
    console.log("User from DB:", req.user);
    next();
} catch (err) {
    console.error(err); 
    res.status(401).json({ msg: 'Token is not valid' });
}
};

