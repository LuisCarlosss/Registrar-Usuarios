const connection = require('./connect')
//connection.query('select * from user')

function getAllUser(){
    return new Promise((resolve,reject)=>{
        connection.query('select * from user',(err,results)=>{
            if(err){
                reject(err)
            }else{
                resolve(results)
            }
        })
    })
}

function getUser(id){
    return new Promise((resolve,reject)=>{
        connection.query(`select * from user where id = ${id}`,(err,results)=>{
            if(err){
                reject(err)
            }else{
                resolve(results)
            }
        })
    })
}
function createUser(user){
    return new Promise((resolve,reject)=>{
        connection.query(`insert into user (username,email,password) values ('${user.username}','${user.email}','${user.password}')`,(err,results)=>{
            if(err){
                reject(err)
            }else{
                resolve(results)
            }
        })
    })
}
function deleteUser(id){
    return new Promise((resolve,reject)=>{
        connection.query(`delete from user where id = '${id}'`,(err,results)=>{
            if(err){
                reject(err)
            }else{
                resolve(results)
            }
        })
    })
}
//username,email,password
function updateUser(id,user){
    return new Promise((resolve,reject)=>{
        connection.query(`update user set username = '${user.username}',email  = '${user.email}', password = '${user.password}' where id = '${id}'`,(err,results)=>{
            if(err){
                reject(err)
            }else{
                resolve(results)
            }
        })
    })
}



module.exports = {
    getAllUser,
    getUser,
    createUser,
    updateUser,
    deleteUser

}