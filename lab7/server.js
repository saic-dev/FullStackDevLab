const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 3000;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', async (req, res) => {
  try {

    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      timeout: 10000 // Set timeout to 10 seconds (10000 ms)
    });
    
    const posts = response.data;


    res.render('index', { posts });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Something went wrong');
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
