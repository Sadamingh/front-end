// jshint esversion:6

import path from 'path';
import express from 'express';

const __dirname = path.resolve();

const app = express();
app.use(express.static("public"));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function(){
  console.log("Server start on port 3000");
});
