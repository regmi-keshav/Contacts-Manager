const express = require("express");
require("dotenv").config();
const app = express();

const contactRouters = require("./routes/contactRouters");

app.use(express.json());

app.use("/api/contacts/", contactRouters);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT);
});
