
const path = require('path');


const showhomepage = (req, res) => {

    res.status(200).sendFile(path.join(__dirname, ('../public/index.html')));

}


const showaboutpage = (req, res) => {

    res.status(200).sendFile(path.join(__dirname, ('../public/about.html')));

}


const showblogpage = (req, res) => {

    res.status(200).sendFile(path.join(__dirname, ('../public/blog.html')));

}


const showcontactpage =  (req, res) => {

    res.status(200).sendFile(path.join(__dirname, ('../public/contact.html')));

}


const showservicepage = (req, res) => {

    res.status(200).sendFile(path.join(__dirname, ('../public/service.html')));

}





module.exports = {
    showhomepage,
    showaboutpage,
    showblogpage,
    showcontactpage,
    showservicepage
}