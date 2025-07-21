import { v4 as uuidv4 } from 'uuid';

export function createTask({ title, description }) {
  return {
    id: uuidv4(),
    title,
    description,
    completed: false,
    createdAt: new Date().toISOString(),
  };
}
