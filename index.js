const express = require('express');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

app.set("view engine", "ejs")


app.get('/',(req,res)=>{
    res.render('index',{progLang : plLanguages})
});

app.get('/contact',(req,res)=>{
    res.render('contact',{});
})

let plLanguages = []

app.post('/',(req,res)=>{
    const plLanguage = req.body.plLanguage;
    plLanguages.push(plLanguage)
    res.redirect('/');
});

app.use((req,res,next)=>{
    res.status(404).json({
        massage: "404 not found"
    })
})

app.use((err,req,res,next)=>{
    res.status(505).json({
        massage: "server error"
    })
})

app.listen(PORT,()=>{
    console.log(`your server running at http://localhost:${PORT}`);
});