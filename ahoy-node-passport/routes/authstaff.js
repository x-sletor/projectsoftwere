const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const Staff = require('../model/staff');

router.post('/registerstaff', async(req, res) => {
    const { username, password, name, lastname, id } = req.body
        // simple validation
    if (!id || !name || !lastname || !username || !password) {
        return res.render('registerstaff', { message: 'Please try again' })
    }
    //const passwordHash = bcrypt.hashSync(password, 10)
    const staff = new Staff({
        id,
        name,
        lastname,
        username,
        password: passwordHash
    });
    await staff.save()
    req.session.staff = staff;
    res.render('index', { staff })
});

router.post('/loginstaff', async(req, res) => {
    const { username, password } = req.body;
    // simple validation
    const staff = await Staff.findOne({
        username
    });

    if (staff) {
        const isCorrect = password

        if (isCorrect) {
            req.session.staff = staff;
            return res.redirect('/indexstaff');
        } else {
            return res.render('loginstaff', { message: 'Username or Password incorrect' })
        }
    } else {
        return res.render('loginstaff', { message: 'Username does not exist.' })
    }
})
module.exports = router