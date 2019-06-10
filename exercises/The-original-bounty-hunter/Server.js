const uuid = require('uuid/v4')
const express = require ('express')
const app = express()
const data = require('./database')
const PORT = 7777

app.use(express.json())

app.get('/bounties',(req,res)=>{
    // console.log(request.quary)
    // use filter method to return results based off of quary
    res.send(data)
    
})
app.get('/bounties/:bountyID',(req,res)=>{
   const result = data.find(bounty => bounty._id === req.params.bountyID)
    res.send(result)
})

// app.get('./bounties/bountyID',(req,res)=>{
//     const result = data.filter(bounty => bounty._id === req.params.bountyID)
//     res.send(result)
// })

app.post('/bounty', (req,res)=>{
    const newBounty = req.body
    newBounty._id= uuid()
    data.push(newBounty)
    res.send(newBounty)
})

// app.post('./bounty',(req,res)=>{
//     const newBounty = req.body
//     newBounty._id = uuid()
//     data.push(newBounty)
//     res.send(newBounty)
// })

app.delete('/bounties/:bountyID', (req,res)=>{
data.forEach((bounty,i) => {
    if (req.params.bountyID === bounty._id){
        data.splice(i, 1)
    }
})

    res.send({
        msg:'Deleted Bounty'
    })
})

app.put('/bounties/:bountyID',(req,res)=>{
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







app.listen(PORT, ()=>{
  console.log(`App is runing on port ${7777}`)
})