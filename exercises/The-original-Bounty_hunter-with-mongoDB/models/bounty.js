const mongoose = require('express')
const Schema = mongoose.Schema


const bountySchema = new Schema({
        firstName: {
            type :String,
            required: true
        }
        ,
        lastName: {
            type: String,
            required: true
        },
        living: {
            type: Boolean,
            required: true
        },
        bountyAmount: {
            type: Number,
            required: true
            
        },
        type:{
            type: true,
            required: true
            
        }

})



modual.exports = mongoose.moudel("Bounty", bountySchema)