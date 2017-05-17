let express = require('express');
let path = require('path');
let app = express();
let bodyParser = require('body-parser');

let DEFAULT_PORT = 8080;
let port = DEFAULT_PORT;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"../public")));
app.listen(port,function(){
    console.log("Started listening on port", port)
});
/*
app.get('/', (req,res) => {
    
})
*/