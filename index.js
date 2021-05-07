const express = require('express')
const app = express()

const mongoose = require ('mongoose')

mongoose.connect('mongodb://localhost:27017/webpenjualantokopakaian',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then (()=> console.log ('berhasil konek ke database'))
.catch(()=> console.log ('gagal konek ke database'))

app.use(express.json({
    extended: true,
    limit: '20mb'
}))
app.use(express.urlencoded({
    extended: true,
    limit: '20mb'
}))

app.use('/barang',require('./routes/Barang'))

app.listen(3000, () => {
    console.log('server started')

})