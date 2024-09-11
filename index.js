const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const folders = [
  'Abstract',
  'Anime-img-generator',
  'Chatbot',
  'Currency',
  'GitHub_card',
  'Image-metaData',
  'Pixelart',
  'Qrcode-generator',
  'Spotify',
  'Swagger',
  'Weather',
  'pinterest'
];

//fuck it 

folders.forEach(folder => {
  app.use(`/${folder}`, express.static(path.join(__dirname, folder)));
});

app.get('/', (req, res) => {
  const links = folders.map(folder => `<li><a href="/${folder}">${folder}</a></li>`).join('');
  const html = `
    <html>
      <head><title>Project Home</title></head>
      <body>
        <h1>Available Projects</h1>
        <ul>${links}</ul>
      </body>
    </html>`;
  res.send(html);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
