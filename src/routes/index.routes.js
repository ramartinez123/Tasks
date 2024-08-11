import { Router } from 'express'
import {renderTasks,
    addTasks,
    deleteTask,
    editTaskForm,
    updateTask,
    taskToggleDone
} from  '../controllers/tasks.controller'

const router = Router();

router.get('/', renderTasks);
router.post('/tasks/add', addTasks);
router.get('/tasks/delete/:id', deleteTask);
router.get('/tasks/edit/:id', editTaskForm);
router.post('/tasks/edit/:id', updateTask);
router.get('/tasks/toggleDone/:id', taskToggleDone);

export default router;


