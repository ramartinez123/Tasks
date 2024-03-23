import Task from '../models/Task'
import {queryGeneral,queryAdd,queryDelete} from '../models/Queries'

/*export const renderTasks =  async (req, res) => {
    const tasks = await Task.find().lean()
    res.render('index.hbs', { tasks })
}*/

const renderTasks =  async (req, res) => {
    const tasks = await Task.find().lean();
    res.render('index.hbs', { tasks })    
}

const addTasks = async (req, res) => {
    const task = Task(req.body)
    await task.save()
    res.redirect('/')       
}

const editTasks = async (req, res) => {
    const task = await Task.findById(req.params.id).lean()
    res.render('edit.hbs', { task });
}


const editTasks1 = async (req, res) => {
    const { id } = req.params;
    await Task.updateOne({ _id: id }, req.body);
    res.redirect('/')
}

const deleteTask = async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);  
    res.redirect('/');
}

const taskToggleDone = async (req, res) => {
    let { id } = req.params;
    const task = await Task.findById(id);
    task.done = !task.done;
    await task.save();
    res.redirect("/");
  };

module.exports ={renderTasks,addTasks,deleteTask,editTasks,editTasks1,taskToggleDone} ;