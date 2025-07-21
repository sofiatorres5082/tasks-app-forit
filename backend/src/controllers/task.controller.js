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

export function updateTask(req, res) {
  const { id } = req.params;
  const updatedTask = taskService.updateTask(id, req.body);

  if (!updatedTask) {
    return res.status(404).json({ message: 'Tarea no encontrada' });
  }

  res.json(updatedTask);
}

export function deleteTask(req, res) {
  const { id } = req.params;
  const deleted = taskService.deleteTask(id);

  if (!deleted) {
    return res.status(404).json({ message: 'Tarea no encontrada' });
  }

  res.json({ message: 'Tarea eliminada con éxito' });
}