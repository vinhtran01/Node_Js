import express from 'express';

const router = express.Router();
//lay san pham
router.get('/product', (req, res) => {
    res.json({
        message: "ok",
    })
});
//chi tiet
router.get('/product/:id', (req, res) => {
    res.json({
        id: req.params.id,
        name: 'abc'
    })
});
//them san pham
router.post('/product', (req, res) => {
    res.json({

    })
});
module.exports = router;