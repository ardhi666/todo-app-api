const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
const router = require('./src/routes')

dotenv.config();

app.use(cors());
app.use(express.json());
app.use('/', router)

app.get('/', (req, res) => {
    res.send({message:'Welcome to API TODO'})
})


app.listen(process.env.PORT, console.log(`Server running on port ${process.env.PORT}`));