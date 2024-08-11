import Task from '../models/Task';

//Recupera todas las tareas
const renderTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find().lean();
    res.render('index.hbs', { tasks });
  } catch (error) {
    next(error); // Pasa el error al middleware de manejo de errores
  }
};

//Añade una nueva tarea
const addTasks = async (req, res, next) => {
  try {
    const task = new Task(req.body); 
    await task.save();
    res.redirect('/');
  } catch (error) {
    next(error); // Pasa el error al middleware de manejo de errores
  }
};

//Muestra el formulario de edición
const editTaskForm = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    if (!task) {
      return res.status(404).send('Task not found');
    }
    res.render('edit.hbs', { task });
  } catch (error) {
    next(error); // Pasa el error al middleware de manejo de errores
  }
};

//Actualiza una tarea
const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Task.updateOne({ _id: id }, req.body);
    if (result.nModified === 0) {
      return res.status(404).send('Task not found or no changes made');
    }
    res.redirect('/');
  } catch (error) {
    next(error); // Pasa el error al middleware de manejo de errores
  }
};

//Elimina una tarea 
const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Task.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).send('Task not found');
    }
    res.redirect('/');
  } catch (error) {
    next(error); // Pasa el error al middleware de manejo de errores
  }
};

//Alterna el estado de completado
const taskToggleDone = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).send('Task not found');
    }
    task.done = !task.done;
    await task.save();
    res.redirect('/');
  } catch (error) {
    next(error); // Pasa el error al middleware de manejo de errores
  }
};

export { renderTasks, addTasks, deleteTask, editTaskForm, updateTask, taskToggleDone };