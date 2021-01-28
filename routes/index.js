const express = require('express');
const router = express.Router();

const wikiRouter = require('./wiki');
const userRouter = require('./user');

router.use('/', wikiRouter);
router.use('/', userRouter);

module.exports = router;



















/* const { Page } = require('../models');
const { User } = require('../models');

 */

/* router.get('/modelos', (req, res) => {
    
    Page.findAll()
    .then(modelos => {
        res.send(modelos)
    });

});

router.get('/models/:id', (req, res) => {
    Page.findByPk(req.params.id)
        .then(modelos => {
            res.send(modelos)
        })
});
 */

/* router.get('/createUser', (req, res) => {
    Page.create({ name: "cualquiera", email: "cualaefae@lala.com" })
        .then(() => {
            res.send("Usuario Creado")
        })
        .catch(e=>console.log(e))
}); */

/**************************** */
/* router.get('/users', (req, res) => {
    
    User.findAll()
    .then(users => {
        res.send(users)
    });

});

router.get('/users/:id', (req, res) => {
    User.findByPk(req.params.id)
        .then(user => {
            res.send(user)
        })
});


router.get('/createUser', (req, res) => {
    User.create({ name: "cualquiera", email: "cualaefae@lala.com" })
        .then(() => {
            res.send("Usuario Creado")
        })
        .catch(e=>console.log(e))
}); */



