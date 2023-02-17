
const findAllUsers = () => {
    document.getElementById('button')
    
    let myHeaders = new Headers();
    
    let myInit = {
        method: 'GET',
        headers: myHeaders
    }
    
    fetch('http://localhost:8888/users', myInit)
        .then((response) => response.json())
        .then((data) => console.log(data))

    return false
}

const newUser = () => {
    document.getElementById("form")
}


