const mongoose = require( 'mongoose')
const Schema = mongoose.Schema


const projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
    },
    complete: {
        type: Boolean,
        // required: true
    },
    date:{
        type: String,
        required: true,
       

    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
    // },
    // img: {
    //     data:Buffer,
    //     contentType: String
    // }

})

module.exports = mongoose.model('Project', projectSchema)