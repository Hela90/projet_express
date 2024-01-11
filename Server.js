const express = require('express')

const app = express()

const port = 5000

const testTime=(req,res,next)=>{
    const currentDate = new Date()
    const currentDay = currentDate.getDay()
    const currentHours = currentDate.getHours()
    //6 || currentDate == 0 || currentHours > 17 || currentHours < 9
    if (currentDate == 4 ) {
        return res.send('<h1>la page est  disponible uniquement pendant les heures ouvrables (du lundi au vendredi, de 9h à 17h)</h1>')
    }
    next()
}

app.use(testTime)
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/Home.html')
})

app.get('/Services',(req,res)=>{
    res.sendFile(__dirname+'/public/Services.html')
})

app.get('/Contact',(req,res)=>{
    res.sendFile(__dirname+'/public/Contact.html')
})

app.get('/style.css',(req,res)=>{
    res.sendFile(__dirname+'/public/style.css')
})
app.listen(port, console.log(`the server is running on the port ${port}`))