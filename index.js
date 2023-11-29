// console.log("hello backend")
// aap ki app close nahi hui constanly listen kar rahi hai so yehi to server hai ko / pe listen 
// kar raha hai and /login pe bhi listen kar raha hai
// ham koi bhi changes karte hai to baar baar server restart karna padta hai and restart baar baar annoying hojate hai
// sensitive info ham sabko available nahi kar sakte and aapka server port 3000 pe free hai -par kya malum 
// kisi user ka server uss port pe free hai ya nahi
// yanike jab aap server pe jaa rahe hai kisi aur ke computer mein jaa rahe hai no guarantee ke yehi port use hoga
// so prod mein yehi chote chote packages ka hi farak hota hai
// there are many places to deploy digitalOcean,seenode,render,cyclic,aws
// so pehle git pe daalna hoga and from there we will pick and deploy
// production se daro mat aapka koi ab tak user nahi kon 


require('dotenv').config()
const express = require('express');
const app=express();
const port=3000
app.get('/',(req,res)=>{
    res.send('hello world');
})
app.get('/login',(req,res)=>{
    res.send('<h1>Login Page</h1>');
})
app.listen(process.env.PORT,()=>{
    console.log(`app is listening at ${port}`);
})