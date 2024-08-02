const express = require("express");
require("dotenv").config();
const app = express();

const contactRouters = require("./routes/contactRouters");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");

connectDb();
app.use(express.json());
app.use("/api/contacts/", contactRouters);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT);
});
