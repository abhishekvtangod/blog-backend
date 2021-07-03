import { Router } from 'express';
import { deletePost } from '../controllers';
import { catchAsync } from '../middlewares';

var router = Router();


/* GET home page. */
router.post('/:id', catchAsync(deletePost));

// module.exports = router;
export default router;
