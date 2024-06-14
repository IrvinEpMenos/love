// Suggested code may be subject to a license. Learn more: ~LicenseLog:917440636.
const express = require('express');
const path = require('path')

const app = express();

const port = parseInt(process.env.PORT) || process.argv[3] || 8080;

app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about', { data: 'Some data for the about page' }); 
});


app.get('/api', (req, res) => {
  res.json({"msg": "this already works"});
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
})
