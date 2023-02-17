const express = require('express') //____________HEY_________________
const router = express.Router()

const Users = require('../controller/users')

router.get('/')

//_____GET_ALL_USERS___DB____________________________________________
router.get('/users', (req, res) => {
    console.log('ayo')
    Users.findAllUsers()
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(400).json(error))
})//__________________________________________________________END____


//_____POST_NEW_USER_BY_ID___DB______________________________________
router.post('/sign-up', (req, res) => {
    console.log(req.body)
    if (Users.validPw(req.body.password) == true) {
        Users.hashPw(req.body)
        .then((data) => res.status(200).json(data) )
        .catch((error) => res.status(400).json(error))
    }
    else
       res.send(console.log('Mot de passe invalide'))
})//__________________________________________________________END____


//_____GET_USER_BY_ID___DB___________________________________________
router.get('/user/:id', (req, res) => {
    Users.findUserByID(req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(400).json(error))
})//__________________________________________________________END____


//_____DELETE_USER_BY_ID___DB________________________________________
router.delete('/users/:id',(req, res) => {
    Users.deleteUserByID(req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(400).json(error))
})//__________________________________________________________END____

module.exports = router //__________________________BYE_________:(___