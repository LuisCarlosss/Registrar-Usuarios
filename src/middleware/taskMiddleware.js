
function validateBody(request,response,next){
    const body = request.body;
    if(body.username === undefined && body.email === undefined && body.password === undefined){
        return response.status(400).json({menssage:'Values not filled in'})
    }
    if(body.username === '' && body.email === '' && body.password === ''){
        return response.status(400).json({menssage:'Values empty'})
    }
    if(body.username === '' || body.email === '' || body.password === ''){
        return response.status(400).json({menssage:'Values empty'})
    }
    next();
}

function validateUpdate(request,response,next){
    
}

module.exports = {
    validateBody
}