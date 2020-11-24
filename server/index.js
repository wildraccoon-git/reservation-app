const express = require('express')
const PORT = process.env.PORT || '3001'
const app = express()
const mongoose = require('mongoose')
const config = require('./config/dev')
const FakeDb = require('./fake-db')
const productRoutes = require('./routes/products')

mongoose.connect(config.DBURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(
    ()=>{
        
        const fakeDb = new FakeDb()
        fakeDb.initDb()
    }
)
app.use('/api/v1/products', productRoutes)


app.listen(PORT, function(){
    console.log('I am runnning')
})

