require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
// const videoRoutes = require("./routes/videos");
const cors = require("cors");

app.use(cors());
app.use(express.static("./public"));
app.use(express.json());

// app.use("/videos", videoRoutes);

app.listen(port, () => {
  console.log(`server running on` + port);
});
