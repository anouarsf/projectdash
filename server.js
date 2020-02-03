const express = require('express');
const connectDB = require('./config/db');
const passport = require('passport');

const app = express();

// Connect DB
connectDB();

//Middleware
app.use(express.json({ extended: false }));

// app.get("/", (req, res) => res.send("API RUNNING"));

app.use('/users', require('./routes/api/auth'));
app.use("/contacts", require("./routes/contact"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
