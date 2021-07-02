// var express = require('express');
import { Router } from 'express';
import { userValidator, createUser } from '../controllers';
import { catchAsync } from '../middlewares';

var router = Router();


/* GET home page. */
router.post('/', userValidator('createUser'), catchAsync(createUser));

// module.exports = router;
export default router;
