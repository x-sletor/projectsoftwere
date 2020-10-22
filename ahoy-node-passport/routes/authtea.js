const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const Teacher = require('../model/teacher');

router.post('/registerteacher', async(req, res) => {
    const { username, password, name, lastname, id } = req.body
        // simple validation
    if (!id || !name || !lastname || !username || !password) {
        return res.render('registerteacher', { message: 'Please try again' })
    }
    //const passwordHash = bcrypt.hashSync(password, 10)
    const teacher = new Teacher({
        id,
        name,
        lastname,
        username,
        password: passwordHash
    });
    await teacher.save()
    req.session.teacher = teacher;
    res.render('index', { teacher })
});

router.post('/loginteacher', async(req, res) => {
    const { username, password } = req.body;
    // simple validation
    const teacher = await Teacher.findOne({
        username
    });

    if (teacher) {
        const isCorrect = password

        if (isCorrect) {
            req.session.teacher = teacher;
            return res.redirect('/indexteacher');
        } else {
            return res.render('loginteacher', { message: 'Username or Password incorrect' })
        }
    } else {
        return res.render('loginteacher', { message: 'Username does not exist.' })
    }
})
module.exports = router