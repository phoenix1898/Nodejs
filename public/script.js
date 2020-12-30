const { json } = require("body-parser")

document.getElementById('submit').onclick = () => {
    const username = document.getElementById('username').value 
    const password = document.getElementById('pass').value 
    fetch('/data',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            username,password
        })
    })/then(res=>res.json()).then(data=>{
        console.log(data)
    })
}