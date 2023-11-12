const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(3000, (req, res) => {
  // When using docker env variable can be set using docker run -e MY_NAME=John -p 3000:3000 <image-name>
  console.log(process.env.MY_NAME);
  console.log("server is running on port 3000");
});
