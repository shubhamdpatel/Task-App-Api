const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

// const Task = require("./models/task");
// const main = async () => {
//   // const task = await Task.findById("6209276702258c82764d1812");
//   // await task.populate("owner").execPopulate();
//   // console.log(task.owner);
// };

// main();
