import express from 'express';
const router = express.Router();
import { register, login,checkAuth} from '../controllers/AuthController.mjs';
import { authMiddleware } from '../utilties/authMiddleware.mjs';

router
    .route("/register")
    .post(register)
    

router
    .route("/login")
    .post(login)
router
    .route("/check")
    .get(authMiddleware,checkAuth)

export {router}