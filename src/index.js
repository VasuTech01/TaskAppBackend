const express = require("express");
const app = express();
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const jwt = require('jsonwebtoken');

const Task = require('./models/task');
const User = require('./models/User');
const { urlencoded } = require("express");
const port = process.env.PORT;
app.use(urlencoded("json"))
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Connected to the port" + port);
});
