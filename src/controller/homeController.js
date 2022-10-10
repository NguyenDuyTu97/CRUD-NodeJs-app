const getHomePage = (req, res)=>{
    return res.render('index.ejs');
}

const getAboutPage = (req, res)=>{
    return res.render('About/index.ejs');
}

module.exports={
    getHomePage,
    getAboutPage
}