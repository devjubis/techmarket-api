import { Router } from 'express';
import { userController } from './user.controller';

const router = Router();

router.post('/users', userController.create);
router.get('/users/:id', userController.getById);

export default router;