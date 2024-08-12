import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const authMiddleware = (req,res,next)=>{
    const token = req.header('x-auth-token');
    if(!token)
        return res.status(401).json({msg: 'no token, authorization denied'});
    try {
        const decoded = jwt.verify(token, process.env.jwtSecret);
        req.user = decoded.id;
        next();
      } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
      }
    };
