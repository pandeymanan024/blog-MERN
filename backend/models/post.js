const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

const post = mongoose.Schema({
    title: {
        type: String,
        requires: true
    },
    description: {
        type: String,
        requires: true
    },
    imgUrl: {
        type: String,
        requires: true
    },
    category: {
        type: ObjectId,
        ref: "Category"
    }
})

mongoose.model("Post", post)