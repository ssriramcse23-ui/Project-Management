const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const dns = require("dns");
const taskRoutes = require("./routes/taskRoutes");
const cors = require("cors");

dns.setServers(["1.1.1.1","8.8.8.8"]);

dotenv.config();

const app = express();

app.use(cors());



mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");

    app.listen(process.env.PORT, () => {
        console.log("Server running on port " + process.env.PORT);
    });

})
.catch((err) => {
    console.log("Database Error:", err);
});

//Base Routes Setup
app.use(express.json());
app.use("/api/tasks",taskRoutes);