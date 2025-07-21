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
