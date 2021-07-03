import { Router } from 'express';
import { getPost } from '../controllers';
import { catchAsync } from '../middlewares';

var router = Router();


/* GET home page. */
router.post('/:id', catchAsync(getPost));

// module.exports = router;
export default router;
