const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
    const data = {
        "name": "TestRoute",
        "website": "google.com"
    }
    res.json(data)
});

module.exports = router;