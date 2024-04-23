const connect = require('./connect')

function getUser(id){
    return new Promise((resolve,reject)=>{
        connect.query(`select * from user where id = ${id}`,(err,result)=>{
            if(err){
                reject(err)
            }else{
                resolve(result)
            }
        })
    })
}


//getUser(12).then(result => console.log(result))