import { Router } from 'express';
import * as taskController from '../controllers/task.controller.js';

const router = Router();

router.get('/', taskController.getTasks);
router.post('/', taskController.createTask);

export default router;
