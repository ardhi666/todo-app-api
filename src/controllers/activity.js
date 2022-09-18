const {activity} = require('../../models/')


exports.add = async (req, res) => {
    try {
        const request = req.body
        
        const data = await activity.create(request)

        res.status(201).send({
            status:"Success",
            message:"Success",
            data:{
                created_at:data.createdAt,
                updated_at:data.updatedAt,
                id:data.id,
                title:data.title,
                email:data.email,
            }
        })
    } catch (error) {
        res.status(400).send({
            error
        })
    }
}

exports.getAll = async (req, res) => {
    try {
        const data = await activity.findAll()

        res.status(200).send({
            status:"Success",
            message:"Success",
            data
        })
    } catch (error) {
        res.status(404).send({
            error
        })
    }
}

exports.getOne = async (req, res) => {
    try {
        const {id} = req.params

        const data = await activity.findOne({
            where:{
                id:id
            }
        })

        res.status(200).send({
            status:"Success",
            message:"Success",
            data:{
                id:data.id,
                email:data.email,
                title:data.title,
                created_at:data.createdAt,
                updated_at:data.updatedAt,
                deleted_at:null
            }
        })
    } catch (error) {
        res.status(404).send({
            error
        })
    }
}

exports.update = async (req, res) => {
    try {
        const {id} = req.params

        await activity.update(req.body,{
            where:{
                id:id
            }
        })

        const data = await activity.findOne({
            where:{
                id:id
            }
        })
        res.status(200).send({
            status:"Success",
            message:"Success",
            data:{
                id:data.id,
                email:data.email,
                title:data.title,
                created_at:data.createdAt,
                updated_at:data.updatedAt,
                deleted_at:null
            }
        })
    } catch (error) {
        res.status(400).send({
            error
        })
    }
}

exports.deleted = async (req, res) => {
    try {
        const {id} = req.params

        const data = await activity.destroy({
            where:{
                id:id
            }
        })
        res.status(200).send({
            status:"Success",
            message:"Success"
        })
    } catch (error) {
        res.status(400).send({
            status:"Not Found",
            message:"Activity with ID 1381738 Not Found",
            data
        })
    }
}