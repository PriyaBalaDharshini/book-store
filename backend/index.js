import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import AppRoutes from './router/bookRoutes.js'
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    try {
        res.status(200).send(`Welcome to Book Store`)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }

})

app.use(AppRoutes)

mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)
    .then(() => {
        app.listen(PORT, () => console.log(`App is listening to ${PORT}`));
    })
    .catch((error) => console.log(error));




