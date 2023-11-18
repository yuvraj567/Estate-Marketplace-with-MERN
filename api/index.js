import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();
app.use(cookieParser());
app.use(express.json());

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log("connected to DB");
})
.catch((err) => {
    console.log(err);
})

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error.';
    return res.status(statusCode).json({
        success : false,
        statusCode,
        message
    });
})

app.listen(3000, () => {
    console.log("server is running on port 3000!");
})