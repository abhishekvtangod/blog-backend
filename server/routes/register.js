// var express = require('express');
import { Router } from 'express';
import { userValidator, createUser } from '../controllers';

var router = Router();


/* GET home page. */
router.post('/', userValidator('createUser'), createUser);

// module.exports = router;
export default router;
