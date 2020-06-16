const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const Post = mongoose.model("Post")
const { ObjectId } = mongoose.Schema.Types

const post = mongoose.Schema({
    title: {
        type: String,
        requires: true
    }
})

mongoose.model("Category", post)