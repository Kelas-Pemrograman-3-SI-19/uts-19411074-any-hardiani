const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const barangSchema = new Schema ({
kodebarang : {
    type : String
},
namabarang:{
    type : String
},
deskripsi:{
    type : String
},
hargasatuan:{
    type : String
},
stok: {
    type : String
}

}) 
module.exports = mongoose.model('barang', barangSchema)