const express = require("express")
const bountyRouter = express.Router()
const uuid = require('uuid/v4')
const data = require('./database')


bountyRouter.route('/bounties')

   
    .get((req,res) => {
    const result = data.find(bounty => bounty._id === req.params.bountyID)
        res.send(result)
    })
    .post((req,res) => {
        const newBounty = req.body
        newBounty._id= uuid()
        data.push(newBounty)
        res.send(newBounty)
    })



bountyRouter.route('/:id')

    .delete((req,res) => {
    data.forEach((bounty,i) => {
        if (req.params.bountyID === bounty._id){
            data.splice(i, 1)
        }
    })

        res.send({
            msg:'Deleted Bounty'
        })
    })

    .put((req,res) => {
        const updatedBounty = req.body
        data.forEach(bounty => {
            if (req.params.bountyID === bounty._id){
            return  Object.assign(bounty,updatedBounty)
            }
        })
        res.send({
            msg : 'Successfuly updated Bounty',data
        })
    })

    module.exports = bountyRouter
