const express=require('express');
const { dirname } = require('path');
const path=require('path');
const port=8000;

const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'))
app.use(express.urlencoded());
app.use(express.static('assets')); //including static files

// app.use(function(req,res,next){

//     console.log("middleware 1");
//     next();
// })

// app.use(function(req,res,next){
//     console.log("middleware 2");
//     next();
// })


const contactsList=[
    {
        name:'hari',
        phone:9398092903
    },
    {
        name:'vamsi',
        phone:8328510572
    }
]


app.get('/',function(req,res){
    console.log(__dirname);
   return res.render('home',{
    title:'My contacts list',
    contact_list:contactsList
});
})

app.get('/practice',function(req,res){
    console.log(__dirname);
   return res.render('practice',{title:'lets do some practice'});
})

app.post('/create-contact',function(req,res){
   contactsList.push({
    name:req.body.name,
    phone:req.body.phone
   })
   return res.redirect('back');
})


app.listen(port,function(err){
    if(err){
        console.log("Error on firing server");
        return ;
    }
    console.log("server is up and running on port:",port);
})