const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  // useCreateIndex: true,
  // useFindAndModify: false
});
// .then(() => {
//   console.log("Connect Database");
// })
// .catch((e) => {
//   console.log("Not Connect");
// });
