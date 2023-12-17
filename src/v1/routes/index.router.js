const express = require('express');
const router = express.Router();

router.get('/checkstatus', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok'
    })
})

router.get('/api/users', (req, res, next) => {
    res.status(200).json({
        status: 'success api',
        message: 'api ok',
        metadata: [
            {
                name: 'James',
                age: 28
            },
            {
                name: 'James 1',
                age: 29
            },
            {
                name: 'James 2',
                age: 30
            }
        ]
    })
})

module.exports = router;