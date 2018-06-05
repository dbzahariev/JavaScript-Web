let express = require('express');
let app  = express();
const port = 1234;

app.get('/home', (req,res) => res.send('Hello from Express'));

app.listen(port,()=>console.log(`Express running on port ${port}`));