const express = require('express');
//const moongoose = require('mongoose');
const routes = require('./routes/routes');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

// Uses
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use('/api', routes);

// async function main() {
//     await moongoose.connect("mongodb://127.0.0.1:27017/test");
// };

// main()
//     .then(res => console.log(res))
//     .catch(err => console.log(err));


// Define port to assigned or 3000
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});

// Basic path
app.get('/', (req, res) => {
  res.send('Hello World!');
});