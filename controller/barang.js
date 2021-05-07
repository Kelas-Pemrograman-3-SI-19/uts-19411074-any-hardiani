const barangModel = require('../model/Barang')
const objectId = require('mongoose').Types.ObjectId

exports.create = (data) =>
    new Promise((resolve, reject) => {
        barangModel.create(data)
            .then(() => {
                resolve({
                    status: true,
                    pesan: 'Berhasil Input barang'
                })
            }).catch(() => reject({
                status: false,
                pesan: 'Gagal Input barang'
            }))
    })

    exports.getAll = () =>
    new Promise((resolve, reject) => {
        barangModel.find()
            .then(result => {
                resolve({
                    status: true,
                    pesan: 'Berhasil Menampilkan Data barang',
                    result: result
                })
            }).catch(() => reject({
                status: true,
                pesan: 'Gagal Mendapatkan Data barang',
                result: []
            }))
    })

    exports.getById = (id) =>
    new Promise((resolve, reject) => {
        barangModel.findOne({
            _id: objectId(id)
        }).then(result => resolve({
            status: true,
            pesan: 'Berhasil Mendapatkan Data barang',
            result: result
        })).catch(() => reject({
            status: false,
            pesan: 'Gagal Mendapatkan Data barang',
            result: null
        }))
    })

exports.update = (id, data) =>
        new Promise((resolve, reject) => {
            barangModel.updateOne({
                _id: objectId(id)
            }, data).then(() => resolve({
                status: true,
                pesan: 'Berhasil Update Data'
            })).catch(() => reject({
                status: false,
                pesan: 'Gagal Update'
            }))
        })

exports.delete = (id) =>
        new Promise((resolve, reject) => {
            barangModel.deleteOne({
                _id: objectId(id)
            }).then(() => resolve({
                status: true,
                pesan: 'Berhasil Delet Data'
            })).catch(() => reject({
                status: false,
                pesan: 'Gagal Update Data'
            }))
        })