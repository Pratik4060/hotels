const express = require('express')
const app = express();
const db = require("./db")
const Person = require('./models/person')
const bodyparser = require("body-parser")
const MenuItem = require('./models/menu')

app.use(bodyparser.json())
app.get('/', function(req,res){
    res.send("welcome to hotel")
})

        app.post('/menu', async(req,res)=>{
            try{
                const data =  req.body
                const newMenu = new MenuItem(data)
        
                const response = await  newMenu.save()
                console.log("menu saved")
                res.status(200).json(response)
            }catch(err){
        console.log(err)
        res.status(500).json({error:"Internal server error"})
            }
        
            })

            app.get('/menu' ,async(req,res) =>{
                try
                {
                   const data = await MenuItem.find()
                   console.log("data fetched succesfully")
                   res.status(200).json(data)
                }catch(err){
                   res.status(500).json({error:"Internal server error"})
       
                }
               })
              
const personRoutes = require('./routes/personRoutes')

app.use('/person',personRoutes)

app.listen(3000);