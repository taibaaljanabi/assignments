const express = require('express')
const bountyRouter = express.Router()


bountyRouter.route('/')

.get((req, res) =>{
    bounty.find((err, bounties)=>{
        if (err){
            return res.status(500).send(err)
        }
        return res.status(200).send(bounties)
    })
})

.post((req,res)=>{
    const newBounty = new bounty(req.body)
    newBounty.save((err,new_bounty)=>{
        if(err){
            return res.status(500).send(err)
        }
        return res.status(201).send(new_bounty)
    })
})

bountyRouter.route('/:id')

.get((req,res)=>{
    bounty.findById(req.params.id, (err,bounty)=>{
        if(err){
            return res.status(500).send(err)
        }
        return res.status(200).send(bounty)
    })
})

.delete((req,res)=>{
    bounty = findByIdAndDelete(req.params.id, (err)=>{
        if (err){
            return res.status(500).send(err)
        }
        return res.status(200).send('Successfully Deleted Bounty')
    })
})

.put((req,res)=>{
    bounty.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        (err, bounty)=>{
            if(err){
              return  res.status(500).send(err)
               
            }
           
           return  res.status(200).send(bounty)

        })

   
})
module.exports = bountyRouter