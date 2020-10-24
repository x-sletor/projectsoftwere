const express = require('express');
const router = express.Router();

const isLoggedInStudent = (req, res, next) => {
    if (!req.session.user) {
        return res.redirect('/status')
            //return res.redirect('/login')
    }
    next()
}

const isLoggedInStaff = (req, res, next) => {
    if (!req.session.staff) {
        return res.redirect('/status')
            //return res.redirect('/login')
    }
    next()
}

const isLoggedInTeacher = (req, res, next) => {
    if (!req.session.teacher) {
        return res.redirect('/status')
            //return res.redirect('/login')
    }
    next()
}


/* GET home page. */

// status 
router.get('/status', (req, res) => {
    res.render('status')
});

// register
router.get('/register', (req, res) => {
    res.render('register')
});
router.get('/registerstaff', (req, res) => {
    res.render('registerstaff')
});
router.get('/registerteacher', (req, res) => {
    res.render('registerteacher')
});

// login
router.get('/login', (req, res) => {
    res.render('login');
});
router.get('/loginstaff', (req, res) => {
    res.render('loginstaff');
});
router.get('/loginteacher', (req, res) => {
    res.render('loginteacher');
});

// main index
router.get('/', isLoggedInStudent, function(req, res, next) {
    res.render('index', { title: 'Express', user: req.session.user });
});
router.get('/indexstaff', isLoggedInStaff, function(req, res, next) {
    res.render('indexstaff', { title: 'Express', user: req.session.staff });
});
router.get('/indexteacher', isLoggedInTeacher, function(req, res, next) {
    res.render('indexteacher', { title: 'Express', user: req.session.teacher });
})

// table
router.get('/tablestudent', isLoggedInStudent, function(req, res, next) {
    res.render('tablestudent')
});
router.get('/tableexamstudent', isLoggedInStudent, function(req, res, next) {
    res.render('tableexamstudent')
});
router.get('/tableteach', isLoggedInTeacher, function(req, res, next) {
    res.render('tableteach')
});
router.get('/tableexamteacher', isLoggedInTeacher, function(req, res, next) {
    res.render('tableexamteacher')
});
router.get('/tablestaff', isLoggedInStaff, function(req, res, next) {
    res.render('tablestaff')
});

// notify
router.get('/notifystu', isLoggedInStudent, (req, res) => {
    res.render('notifystu')
});
router.get('/notifyteacher', isLoggedInTeacher, (req, res) => {
    res.render('notifyteacher')
});

module.exports = router;