const express = require('express');
const app = express();
const moongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

main()
    .then(res => console.log(res))
    .catch(err => console.log(err));

async function main() {
    await moongoose.connect('mongodb://localhost:27017/test');
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Define port to assigned or 3000
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', routes);

