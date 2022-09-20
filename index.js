const express = require('express');
const app = express();
const PORT = 8080


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
});

app.get('/', async (req, res) => {
    try {
       res.send('hello mom');
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
app.get('/1st', async (req, res) => {
    try {
       res.send('URL test');
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});




app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
  })