import { Router } from 'express';
import { homeController } from '../controllers';
import { catchAsync } from '../middlewares';

var router = Router();


/* GET home page. */
router.post('/', catchAsync(homeController));

// module.exports = router;
export default router;
