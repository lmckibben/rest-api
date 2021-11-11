const express = require('express');

const PORT = 3001;

const app = express();

//ROUTES
app.get('/', (req, res) => {
res.send('We are on home');
});

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
