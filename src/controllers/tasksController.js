const taskModel = require('../models/taskModel')


function homepage(request,response){
   return response.status(200).json({mensage:'home page'})
}   

function showAllTasks(request,response){
    return taskModel.getAllUser().then(value => response.status(200).json(value))
}

function showUser(request,response){
    return taskModel.getUser(request.params.id).then(value => response.status(200).json(value))
}

function createUser(request,response){
    return taskModel.createUser(request.body).then(value => response.status(201).json(value))
}

function updateUser(request,response){
    return taskModel.updateUser(request.params.id,request.body).then(valeu => response.status(201).json(valeu))
}
function deleteUser(request,response){
    return taskModel.deleteUser(request.params.id).then(value => response.status(204).json(value))
}


module.exports = {
    homepage,
    showAllTasks,
    showUser,
    createUser,
    updateUser,
    deleteUser
}   