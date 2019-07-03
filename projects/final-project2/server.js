const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require("morgan")
const bodyParser = require("body-parser")
const expressJwt = require("express-jwt")
require("dotenv").config()
const PORT = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(morgan("dev"))
app.use("/api", expressJwt({secret: process.env.SECRET}))






mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://localhost:27017/taibadb', {useNewUrlParser: true}, (err) => {
    if(err) throw err
    console.log('connected to database')
})





// app.use(multer({ dest: './uploads', 
// rename: function (filename, filename) {
//     return filename
// }
// }))
app.use("/api/project", require("./routes/projectRoutes.js"))
app.use("/auth", require("./routes/authRoutes.js"))
app.use((err, req, res, next) => {
    console.error(err);
    if (err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({ message: err.message });
});









app.listen(5000, () => {console.log(`server is running on port 5000`)})