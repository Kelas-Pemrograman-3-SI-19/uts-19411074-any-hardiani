const router = require('express').Router()
const barangController = require('../controller/barang')

router.post('/insert', (req,res) => {
    barangController.create(req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

router.get('/getAll', (req,res) => {
    barangController.getAll(req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

router.get('/getbyid/:id', (req, res) => {
    barangController.getById(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.put('/update/:id', (req, res) => {
    barangController.update(req.params.id, req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.put('/delete/:id', (req, res) => {
    barangController.delete(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router