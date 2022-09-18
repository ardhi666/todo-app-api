const {todolist} = require('../../models')


exports.addTodo = async (req, res) => {
    try {
        const request = {
            activity_group_id:req.body.activity_group_id,
            title:req.body.title,
            is_active:true,
            priority:"very-high"
        }
        const data = await todolist.create(request)

        res.status(201).send({
            status: "Success",
            message: "Success",
            data
        })


    } catch (error) {
        res.status(400).send({
            error
        })
    }
}

exports.getTodo = async (req, res) => {
    try {
        const {id} = req.params

        const data = await todolist.findOne({
            where:{
                id:id
            }
        })

        res.status(200).send({
            status: "Success",
            message: "Success",
            data
        })
    } catch (error) {
        res.status(404).send({
            error
        })
    }
}

exports.getsTodo = async (req, res) => {
    try {
        const data = await todolist.findAll()

        res.status(200).send({
            status: "Success",
            message: "Success",
            data
        })

    } catch (error) {
        res.status(404).send({
            error
        })
    }
}

exports.updateTodo = async (req, res) => {
    try {
        const {id} = req.params

        await todolist.update(req.body,{
            where:{
                id:id
            }
        })

        const data = await todolist.findOne({
            where:{
                id:id
            }
        })

        res.status(200).send({
            status: "Success",
            message: "Success",
            data
        })
    } catch (error) {
        res.status(400).send({
            error
        })
    }
}

exports.deleteTodo = async (req, res) => {
    try {
        const {id} = req.params
        const data = await todolist.destroy({
            where:{
                id:id
            }
        })

        res.status(200).send({
            status: "Success",
            message: "Success",
            data
        })
    } catch (error) {
        res.status(400).send({
            error
        })
    }
}