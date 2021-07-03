import { Router } from 'express';
import { storePost } from '../controllers';
import { catchAsync } from '../middlewares';

var router = Router();


/* GET home page. */
router.post('/', catchAsync(storePost));

// module.exports = router;
export default router;
