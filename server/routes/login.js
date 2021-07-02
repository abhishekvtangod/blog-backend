import { Router } from 'express';
import { loginUser, userValidator } from '../controllers';
import { catchAsync } from '../middlewares';
// import { userValidator, createUser } from '../controllers';
// import { catchAsync } from '../middlewares';

var router = Router();


/* GET home page. */
router.post('/', userValidator('loginUser'), catchAsync(loginUser));

// module.exports = router;
export default router;
