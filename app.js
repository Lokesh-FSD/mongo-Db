const express = require("express");

// import mongoose
const mongoose = require("mongoose");

// make a connection to remote mongoDb server
mongoose.connect(
  "mongodb+srv://Lkd:1234567890@@cluster0.fhyzu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false, 
    useCreateIndex: true,
  },function(err){
      if(err){
          console.log("Err in a conversation",err);
      }else{
          console.log("connection to database completed");
      }
  }
);
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const studentsRouter = require("./routes/students")
const productsRouter = require("./routes/products")
const quotesRouter = require("./routes/quotes")

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/students",studentsRouter);
app.use("/product", productsRouter);
app.use("/quote", quotesRouter)

module.exports = app;
