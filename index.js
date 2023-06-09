const express = require('express');
const routes = require('./routes/routes');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

// Uses
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use('/api', routes);

// Define port to assigned or 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

// Basic path
app.get('/', (req, res) => {
    res.send('Hello World!');
});