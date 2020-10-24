const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../model/user');
//const Teacher = require('../model/teacher');
//const Staff = require('../model/staff');


router.post('/register', async(req, res) => {
    const { username, password, name, lastname, id } = req.body
        // simple validation
    if (!id || !name || !lastname || !username || !password) {
        return res.render('register', { message: 'Please try again' })
    }
    const passwordHash = bcrypt.hashSync(password, 10)
    const user = new User({
        id,
        name,
        lastname,
        username,
        password: passwordHash
    });
    await user.save()
    req.session.user = user;
    res.render('index', { user })
});

router.post('/login', async(req, res) => {
    const { username, password } = req.body;
    // simple validation
    const user = await User.findOne({
        username
    });

    if (user) {
        const isCorrect = bcrypt.compareSync(password, user.password)

        if (isCorrect) {
            req.session.user = user;
            return res.redirect('/');
        } else {
            return res.render('login', { message: 'Username or Password incorrect' })
        }
    } else {
        return res.render('login', { message: 'Username does not exist.' })
    }
})

module.exports = router