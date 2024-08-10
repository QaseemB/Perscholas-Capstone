import express from 'express';

import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();



const reconnect = async () => {
    let timeout = 25;
    while (mongoose.connection.readyState === 0) {
        if (timeout === 0) {
            console.log('timeout');
            throw new Error(
                'timeout occured with mongoose connection',
            );
        }
        await mongoose.connect(mongoToken, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        timeout--;
    }
    console.log(
        'Database connection status:',
        mongoose.connection.readyState,
    );
}

export {reconnect}

