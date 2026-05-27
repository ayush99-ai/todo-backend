const express = require("express");

const cors = require("cors");

require("dotenv").config();

const connectDB = require("./config/db");

const taskRoutes = require("./routes/taskRoutes");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

// routes
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);

});