var obj = require('./runs.json')

var express = require('express');
var app = express();

app.use(express.static("./public"));



app.get('/extraruns', (req, res) => {
  const season = req.query.year;
  console.log(season)
  const result = obj.extraRuns[season];
  res.send(result)
});

const port= process.env.PORT || 8080;
app.listen(port,() =>{
  console.log("All gud")
})