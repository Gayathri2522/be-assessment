import express from 'express'
//import bodyParser from 'body-parser';

//import usersRoutes from './routes/userRoutes.js';

const app = express();
const PORT = 3000;
app.use(express.json());
//app.use(bodyParser.json());
//app.use('/', usersRoutes);

app.get('/', (req,res) => res.send("Welcome to Unsplash API!"));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));