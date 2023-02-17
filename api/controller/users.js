const connection = require('../config/database') //____________________________________
const bcrypt = require('bcrypt')

//______FT_FIND(GET)___ALL_USERS______DB(SQL)__________________________________________
const findAllUsers = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM users', function(err, result) {
            if (err) 
                reject(err)
            else 
                resolve(result)
        })
    })
}//________________________________________________________END__FT____________________

//______FT_FIND(GET)___USER_BY_ID______DB(SQL)________________________________________
const findUserByID = (id) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM users WHERE ' + id, function(err, result) {
            if (err) 
                reject(err)
            else 
                resolve(result)
        })
    })
}//________________________________________________________END__FT____________________

const validPw = (password) => { //___FT_TEST_PASSWORD__________
    let result = false
    if (password.length >= 8 && /[A-Z]/.test(password) >= 1 && 
    /\d/.test(password) >= 1 && !password.match(/ /))
        return result = true 
    return result
}//___________________________________________________END__FT__

//______FT_Hash(Password)_____________________________________________________________
const hashPw = (user) => {
    const salt = 10
    return new Promise((resolve, reject) => {
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err)
                reject(err)
            if (hash) {
                user.password = hash
                resolve(newUser(user))
            }
        })
    })
}//________________________________________________________END__FT____________________

//______FT_NEW(POST)___USER____________DB(SQL)________________________________________
const newUser = (user) => {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO users SET ?', user,
            function(err, result) {
                if (err) 
                    reject(err)
                else 
                    resolve(result)
            })
    })
}//________________________________________________________END__FT____________________

//______FT_DELETE___USER______________DB(SQL)_________________________________________
const deleteUserByID = (id) => {
    return new Promise((resolve, reject) => {
        connection.query('DELETE FROM users WHERE id =' + id, function(err, result) {
            if (err) 
                reject(err)
            else 
                resolve(result)
        })
    })
}//________________________________________________________END__FT____________________

module.exports = { findAllUsers, findUserByID, hashPw, deleteUserByID, validPw }
