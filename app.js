// Basic setting
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");

const multer = require("multer");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Define routes
const textRoutes = require("./routes/text");

// Use routes
app.use("/api/text", textRoutes);

app.listen(3000)