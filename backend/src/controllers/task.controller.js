import * as taskService from '../services/task.service.js';

export function getTasks(req, res) {
  const tasks = taskService.getAllTasks();
  res.json(tasks);
}

export function createTask(req, res) {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: 'Título y descripción requeridos' });
  }

  const newTask = taskService.addTask({ title, description });
  res.status(201).json(newTask);
}