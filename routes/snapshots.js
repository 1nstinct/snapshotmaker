const express = require('express');
const router = express.Router();
let fs = require('fs');
let dir = `${__dirname}/../snapshots`;

router.post('/', (req, res, next) => {
    var base64Data = req.body.snapshot.replace(/^data:image\/png;base64,/, "");

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }

    fs.writeFile(`${dir}/snapshot_${+new Date()}.jpg`, base64Data, 'base64', function(err) {
        res.render('index', { title: 'Express' });
    });
});

module.exports = router;