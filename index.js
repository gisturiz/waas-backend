const express = require('express');
const moongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

// Uses
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', routes);

async function main() {
    await moongoose.connect('mongodb://localhost:27017/test');
};

main()
    .then(res => console.log(res))
    .catch(err => console.log(err));


// Define port to assigned or 3000
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});

// Basic path
app.get('/', (req, res) => {
  res.send('Hello World!');
});