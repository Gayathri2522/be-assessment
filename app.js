import express from 'express'
//import bodyParser from 'body-parser';
//import usersRoutes from './routes/userRoutes.js';
import dotenv from 'dotenv';
dotenv.config();
import photoRouter from './routes/photoRouter.js';

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/api/photos', photoRouter);

app.get('/', (req, res) => {
    res.json({ message: "Welcome to the Unsplash API!" });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));