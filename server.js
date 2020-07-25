'use strict'
var express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

/*define our app using express*/
const app = express();

/*cors is used for cross API services*/
app.use(cors());
/*body-parser is used to get data from post method*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*set our port*/
let port = process.env.PORT || 3006;

/*import specific route*/
const {studentRoute} = require(`./routes/student`);

/*get the instance for route*/
let router = express.Router();

/*test route*/
router.get(`/`, function (req, res) {
    res.send({message: 'server start successfully.'})
});

// app.use(checkAuthentication);
app.use(`/api/student`,studentRoute);


app.listen(port);
console.log('something happens on port ' + port);