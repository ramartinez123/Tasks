import { Router } from 'express'
import {renderTasks,
    addTasks,
    deleteTask,
    editTasks1,
    editTasks,
    taskToggleDone
} from  '../controllers/tasks.controller'

const router = Router();

router.get('/', renderTasks);
router.post('/tasks/add', addTasks);
router.get('/tasks/delete/:id', deleteTask);
router.get('/tasks/edit/:id', editTasks)
router.post('/tasks/edit/:id', editTasks1)
router.get('/tasks/delete/:id', deleteTask);
router.get('/tasks/toggleDone/:id',taskToggleDone);

/*router.post('/tasks/add', async (req, res) => {
    const task = Task(req.body)
    await task.save()
    res.redirect('/')
})

router.get('/tasks/edit/:id', async (req, res) => {
    const task = await Task.findById(req.params.id).lean()
    res.render('edit.hbs', { task });
}
)

router.post('/tasks/edit/:id', async (req, res) => {
    const { id } = req.params;
    await Task.updateOne({ _id: id }, req.body);
    res.redirect('/')
}
)


/*  router.get('/tasks/delete/:id', async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.redirect('/');
})

router.get('/tasks/toggleDone/:id', async (req, res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    task.done =!task.done;
    await task.save();
    res.redirect('/');
})
*/
    export default router;


