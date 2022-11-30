const router = require('express').Router()

const ProductsController = require('../controllers/products')

// VERBOS HTTP (4 TIPOS)
// GET - OBTER DADOS
// POST - ENVIAR OU RECEBER DADOS
// PUT - ATUALIZAR DADOS
// DELETE - EXCLUIR DADOS

router.get('/products/:id?', ProductsController.get)
router.post('/products', ProductsController.post)
//router.put('/products', ProductsController.put)
//router.delete('/products', ProductsController.delete)


module.exports = router