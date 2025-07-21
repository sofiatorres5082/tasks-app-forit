import { createTask } from '../models/task.model.js';

const tasks = [];

export function getAllTasks() {
  return tasks;
}

export function addTask(data) {
  const task = createTask(data);
  tasks.push(task);
  return task;
}

export function updateTask(id, newData) {
  const index = tasks.findIndex((task) => task.id === id);
  if (index === -1) return null;

  tasks[index] = {
    ...tasks[index],
    ...newData,
  };

  return tasks[index];
}

export function deleteTask(id) {
  const index = tasks.findIndex((task) => task.id === id);
  if (index === -1) return null;

  const deleted = tasks.splice(index, 1);
  return deleted[0];
}