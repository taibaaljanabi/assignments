const express = require ('express')
const projectRouter = express.Router()
const Project = require("../models/project.js")

projectRouter.post('/', (req, res, next) =>{
    const project = new Project(req.body)
   project.user = req.user._id
    project.save(function(err, newProject){
        if (err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newProject)
    })
})
projectRouter.get('/', (req, res, next)=> {
    Project.find({user: req.user._id}, (err, Projects)=>{
        if(err){
            res.status(500)
            return next (err)
        }
        return res.send(Projects)
    })
    
})
projectRouter.get('/:projectId', (req, res, next)=>{
    Project.findOne({_id: req.params._id, user: req.user._id}, (err, foundProject)=>{
        if (err){
            res.status(500)
            return next(err)
        } else if (!foundProject){
            res.status(404)
            return next(new Error('No Project Found.'))
           
        }
        return res.send(foundProject)
    })
})

projectRouter.put("/:projectId", (req, res, next)=>{
    Project.findOneAndUpdate(
        {_id:req.params.projectId, user: req.user._id },
        req.body,
        {new:true},
        (err,project)=>{
            if(err){
                console.log("error")
                res.status(500)
                return next(err)
            }
            return res.send(project)
        }
    )
})


projectRouter.delete("/:projectId", (req, res, next) =>{
    Project.findOneAndRemove({_id: req.params.projectId, user:
    req.user._id},(err, project) =>{
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.send(project)
    })
})




module.exports = projectRouter