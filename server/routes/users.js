// var express = require('express');
import express from 'express';
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => res.json({message : 'users'}));

// module.exports = router;
export default router;

