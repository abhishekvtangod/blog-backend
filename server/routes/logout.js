import { Router } from 'express';
import { logoutUser } from '../controllers';
import { catchAsync } from '../middlewares';

var router = Router();


/* GET home page. */
router.post('/', catchAsync(logoutUser));

// module.exports = router;
export default router;
