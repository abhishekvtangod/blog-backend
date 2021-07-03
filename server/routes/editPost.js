import { Router } from 'express';
import { updatePost } from '../controllers';
import { catchAsync } from '../middlewares';

var router = Router();


/* GET home page. */
router.post('/:id', catchAsync(updatePost));

// module.exports = router;
export default router;
