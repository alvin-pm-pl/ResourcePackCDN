const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.get('/:uuid', (req, res) => {
    const uuid = req.params.uuid;
    const packPath = path.join(global.packDir, uuid + '.zip');
    if (fs.existsSync(packPath)) {
        res.sendFile(packPath);
    } else {
        res.status(404).end("Not found");
    }
});

module.exports = router;
