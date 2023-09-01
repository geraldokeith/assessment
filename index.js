const express = require("express")
const app = express()
const dotenv = require("dotenv").config();
const path = require('path');
const port = process.env.PORT
const connectDB = require("./config/dbConfig");

const userRouter = require("./routes/userRouter");

// connect to db
connectDB();

//Middleware
app.use(express.urlencoded({ extended: true }));


app.engine('pug', require('pug').__express);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')))

app.use("/api", userRouter)






app.listen(port, () =>console.log(`server is running at http://localhost:${port}`));