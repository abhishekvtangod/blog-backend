// var express = require('express');
import express from 'express';
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => res.json({message : 'root'}));

// module.exports = router;
export default router;
