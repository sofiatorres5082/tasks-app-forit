import * as taskService from '../services/task.service.js';

export function getTasks(req, res, next) {
  try {
    const tasks = taskService.getAllTasks();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
}

export function createTask(req, res, next) {
  try {
    if (!req.body || typeof req.body !== 'object') {
      const error = new Error('El cuerpo de la solicitud debe ser un objeto con título y descripción.');
      error.status = 400;
      throw error;
    }

    const { title, description } = req.body;

    if (!title || !description) {
      const error = new Error('Título y descripción requeridos');
      error.status = 400;
      throw error;
    }

    const newTask = taskService.addTask({ title, description });
    res.status(201).json(newTask);
  } catch (err) {
    next(err);
  }
}

export function updateTask(req, res, next) {
  try {
    const { id } = req.params;

    if (!req.body || typeof req.body !== 'object') {
      const error = new Error('El cuerpo de la solicitud debe ser un objeto con los campos a actualizar.');
      error.status = 400;
      throw error;
    }

    const { title, description } = req.body;

    if (!title && !description) {
      const error = new Error('Debe proporcionar al menos un campo a actualizar (título o descripción).');
      error.status = 400;
      throw error;
    }

    const updatedTask = taskService.updateTask(id, req.body);

    if (!updatedTask) {
      const error = new Error('Tarea no encontrada');
      error.status = 404;
      throw error;
    }

    res.json(updatedTask);
  } catch (err) {
    next(err);
  }
}

export function deleteTask(req, res, next) {
  try {
    const { id } = req.params;

    if (!id || typeof id !== 'string' || id.trim() === '') {
      const error = new Error('ID inválido');
      error.status = 400;
      throw error;
    }

    const deleted = taskService.deleteTask(id);

    if (!deleted) {
      const error = new Error('Tarea no encontrada');
      error.status = 404;
      throw error;
    }

    res.json({ message: 'Tarea eliminada con éxito' });
  } catch (err) {
    next(err);
  }
}

