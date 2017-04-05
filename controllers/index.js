var express = require('express');
var router = express.Router();
var path = require('path');


router.use('/api/bucket_list', require('./bucket_list'));

// router.get('/', function(req, res)
// {
//   res.sendFile(path.join(__dirname + 'index.html'));
//   res.json({data: 'Hello!'});
// }
// );

module.exports = router;