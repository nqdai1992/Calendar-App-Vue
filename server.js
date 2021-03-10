const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors());
const port = 3000;

app.listen(port, () => {
    console.log("Server started on port 3000");
});

// app.post('/register', (req,res)=> {
//     res.send({
//         message: `Hello ${req.body.email} your user has registered!!`
//     })
// })

let events = [];
app.post('/add_event', (req,res) => {
  events.push(req.body);
  res.sendStatus(200);
});

