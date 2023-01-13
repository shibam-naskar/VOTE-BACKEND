const express = require('express');
const router = express.Router();
const votecontroller = require('../controllers/votecontroller');
const checkPermission = require('../middlewares/checkPermission');

router.get('/getvotebyid',  votecontroller.getVoteById);
router.post('/createvote',  votecontroller.createVote);
router.get('/vote',  votecontroller.vote);


module.exports = router;