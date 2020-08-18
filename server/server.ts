import express = require("express");

const app: express.Application = express();
const port = 1970;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`Application is listening on port ${port}`);
});
