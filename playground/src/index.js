const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.status(503).send("Site is currently down. Check back soon!");
});

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

// >>>>>>>>>>>>>>>>> Practice task <<<<<<<<<<<<<<<

// const bcrypt = require('bcryptjs')
// const jwt = require("jsonwebtoken");

// const myFunction = async () => {
//   //     const password = 'Red12345!'
//   //     const hashedPassword = await bcrypt.hash(password, 8)
//   //     console.log(password)
//   //     console.log(hashedPassword)
//   //     const isMatch = await bcrypt.compare('red12345!', hashedPassword)
//   //     console.log(isMatch)

//   const token = await jwt.sign({ _id: "shubham123" }, "thismySBM");
//   console.log(token);

//   const verify = await jwt.verify(token, "thismySBM");
//   console.log(verify);
// };

// myFunction();
