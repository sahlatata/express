const express = require('express')
const app = express()
const port = 5000
const middleware = function(req,res,next){
const d = new Date()
var jour = d.getDay()
var hours = d.getHours();
if ( jour ==6 || jour==0 || hours<9 || hours >=17)
{
    res.sendFile(__dirname+'/Public/error.html')
} else {
    next();
}
}
// console.log(`${d} ${jour} Nous sommes le ${day} il est ${hours} heures et ${minutes} minutes`);

app.use(middleware)
app.get('/',(req,res)=>{
res.sendFile(__dirname+'/Public/Home.html')
})


app.use(express.static('public'));
app.listen(port,console.log(`le serveur marche sur le port : ${port}` ))
