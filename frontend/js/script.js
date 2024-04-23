const tbody = document.querySelector('tbody');
console.log('Run...')


async function fetchUser(url){//'http://localhost:3000/tasks'
    const response = await fetch(url);
    const tasks = await response.json()
    return tasks;
}

function createElement(tag,innerText = ''){
    const element = document.createElement(tag)
    element.innerText = innerText;
    return element;
}

function createRow(task){   
    const {id,usename,email,password} = task;
    const tr = createElement('tr')
    const tdTitile = createElement('td','username')
    
}

const user = {
    id:1,
    username:'Luis',
    email:'Lui@gmail.com',
    passwod:1233445
}

createRow(user)