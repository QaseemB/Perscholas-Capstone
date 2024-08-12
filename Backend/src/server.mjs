import express from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors'
dotenv.config();
const app = express();
import cookieParser from 'cookie-parser';
import {router as userRouter} from './routes/usersRoutes.mjs'
import {router as instrumentRouter} from './routes/instrumentRoutes.mjs'
import {router as studioeqRouter} from './routes/studioeqRoutes.mjs'
import { router as cartRouter} from './routes/Cart.mjs';
import {router as authRouter} from './routes/authRoutes.mjs'
import { authMiddleware } from './utilties/authMiddleware.mjs';
import  {USERS}  from "./models/users.mjs";


// import path from "path"
// import { fileURLToPath } from 'url';
console.log('Node Environment:', process.env.NODE_ENV);
console.log('Current Working Directory:', process.cwd());
console.log('MongoDB URI:', process.env.ATLAS_URI);
console.log('PORT:', process.env.PORT)


app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const Uri = process.env.ATLAS_URI

app.use(cookieParser());
app.use(express.json());

mongoose.connect(Uri)

mongoose.connection.once('open', ()=> {
  console.log('connected to mongo')});

  mongoose.connection.on ('error', (error)=> {
    console.error('connection error:', error)
  });


app.use(express.static("./public"));
console.log('Static files served from:', 'styles');
app.set("views", "Backend/src/views"); 
app.set("view engine", "pug");

app.get('/api/cart', (req, res) => {
  res.json({ message: 'CORS-enabled for all origins!' });
});

app.get('/views',(req,res)=>{
  const options = {
    title: 'Audio Engineer E commerce ',
    content:
      "Welcome to our premier audio engineering e-commerce platform, where cutting-edge technology meets exceptional sound quality. Discover a curated selection of the finest audio equipment, from state-of-the-art studio gear to top-tier instruments, all designed to elevate your sound. Whether you're a seasoned professional or an aspiring artist, our expertly crafted products and unparalleled customer support will help you create the perfect auditory experience <a href `studio.pug`> studio </a>",
      
  };
  res.render("signup",options)
})
app.get('/userhome', (req, res) => {
  res.render('userhome')
 ;
});
app.get('/studio', (req, res) => {
  res.render('studio');
});
app.get("/instruments", (req, res) => {
  res.render("instruments");

});


const logTime = (req,res,next)=>{
  const time = new Date();
    console.log( `-----${time.toLocaleTimeString()}: Received a ${req.method} request to ${req.url}.`);
    next();
}


app.get("/", async(req, res) => {
  myEmitter.on('event', () => {
    console.log('Event triggered');
  });
  let userdb = await USERS.find({})
    res.send(userdb);
  });

app.use("/api/users",logTime,authMiddleware, userRouter,(req, res) => {
  res.json({ msg: 'This is a protected route' });
});
app.use("/api/instrument",logTime, instrumentRouter);
app.use("/api/studio",logTime, studioeqRouter);
app.use("/api/cart",logTime,cartRouter)
app.use("/api/auth",logTime,authRouter)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`running on porterpotty ${PORT} `)
});