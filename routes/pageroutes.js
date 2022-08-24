const express = require('express');
const path    = require('path');
const {showhomepage, showaboutpage,showblogpage, showcontactpage, showservicepage} = require('../controllers/pagecontrollers');



//router madhod call

const router = express.Router();



router.get('/', showhomepage )


router.get('/about', showaboutpage )

router.get('/blog', showblogpage )

router.get('/contact', showcontactpage)

router.get('/service', showservicepage)









module.exports = router ;