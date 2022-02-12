const express = require("express");
const os = require('os');

const { response, randomTwoChar, svgImg, firstCharOfFirstTwoWord } = require("./src/utils/utils");
const path = require("path");
const app = express();
const port = 3000;
app.get("", (req, res) => {
  let name = req.query.name || req.query.n
  let rounded = (req.query.rounded || req.query.r) != undefined
  name = !name ? randomTwoChar() : name 
  if(!name || !name.trim()){
    return res.send(response(false, 400, null, "provide name"));
  }
  
  let chars = firstCharOfFirstTwoWord(name)
  res.setHeader('content-type', 'image/svg+xml')
  res.send(svgImg(chars, {rounded}))
});


app.get("/random", (req, res) => {
  let chars = randomTwoChar()
  let rounded = (req.query.rounded || req.query.r) != undefined
  res.setHeader('content-type', 'image/svg+xml')
  res.send(svgImg(chars, {rounded}))
});


app.use((req, res) => {
  res.status(404);
  res.send(response(false, 404));
});

app.listen(port, (...params) => {
  console.log(os.hostname());
  console.log(`app listening at http://localhost:${port}`);
});
