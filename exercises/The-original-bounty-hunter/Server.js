
const express = require ('express')
const app = express()
const port = process.env.PORT || 7777

app.use("/bounties", require("./bountyRoutes"))


app.listen(port, ()=>{
  console.log(`App is runing on port ${port}`)
})