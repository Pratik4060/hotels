const express = require('express')
const app = express();
const db = require("./db")
const Person = require('./models/person')
const bodyparser = require("body-parser")
const MenuItem = require('./models/menu')
require('dotenv').config();

app.use(bodyparser.json())
const personRoutes = require('./routes/personRoutes')
const menuroutes = require('./routes/menuroutes')
app.use('/person',personRoutes)
app.use('/menu',menuroutes)

const PORT = process.env.PORT||3000
app.listen(PORT);