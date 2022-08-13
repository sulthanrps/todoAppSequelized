const {Task} = require('../models')

class Controller {
    static findAll(req, res){
        Task.findAll({
            order : [
                ['id', 'ASC']
            ]
        })
        .then(data => {
            res.render('showTask', {data})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static addTask(req, res){
        res.render('addForm')
    }

    static saveTask(req, res){
        let body = {
            content : req.body.content,
            status : req.body.status
        }
        Task.create(body)
        .then(() => {
            res.redirect('/')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static changeStatusToComplete(req, res){
        let id = +req.params.id;
        Task.update({
            status : 'complete'
        }, {where : {id}})
        .then(() => {
            res.redirect('/')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static changeStatusToUncomplete(req, res){
        let id = +req.params.id;
        Task.update({
            status : 'uncomplete'
        }, {where : {id}})
        .then(() => {
            res.redirect('/')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static deleteTask(req, res){
        let id = +req.params.id;
        Task.destroy({
            where : {id}
        })
        .then(() => {
            res.redirect('/')
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = Controller