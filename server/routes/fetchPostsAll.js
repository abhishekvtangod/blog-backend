import { Router } from 'express';
import { getPostsAll } from '../controllers/getPostsAll';
import { catchAsync } from '../middlewares';

var router = Router();


/* GET home page. */
router.post('/', catchAsync(getPostsAll));

// module.exports = router;
export default router;
