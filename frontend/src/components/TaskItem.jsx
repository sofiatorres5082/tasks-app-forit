import { useState } from "react";
import { deleteTask, updateTask } from "../services/api";

export default function TaskItem({ task, onTaskUpdated, onTaskDeleted }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleToggleComplete = async () => {
    const updated = await updateTask(task.id, {
      title: task.title,
      description: task.description,
      completed: !task.completed,
    });
    if (updated) onTaskUpdated(updated);
  };

  const handleDelete = async () => {
    const confirmed = confirm("¿Estás seguro que querés eliminar esta tarea?");
    if (confirmed) {
      const success = await deleteTask(task.id);
      if (success) onTaskDeleted(task.id);
    }
  };

  const handleSaveEdit = async () => {
    const updated = await updateTask(task.id, {
      title: editedTitle,
      description: editedDescription,
    });
    if (updated) {
      onTaskUpdated(updated);
      setIsEditing(false);
    }
  };

  const handleCancelEdit = () => {
    setEditedTitle(task.title);
    setEditedDescription(task.description);
    setIsEditing(false);
  };

  return (
    <li className="bg-white shadow rounded p-3 flex flex-col gap-2">
      {isEditing ? (
        <div className="flex flex-col gap-2">
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="border p-1 rounded"
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="border p-1 rounded"
          />
          <div className="flex gap-2">
            <button onClick={handleSaveEdit} className="text-green-600 text-sm">
              Guardar
            </button>
            <button
              onClick={handleCancelEdit}
              className="text-gray-500 text-sm"
            >
              Cancelar
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-start gap-2">
          <div className="flex-1">
            <span
              className={`cursor-pointer block font-semibold ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
              onClick={handleToggleComplete}
            >
              {task.title}
            </span>
            <p className="text-sm text-gray-500">{task.description}</p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <button
              onClick={() => setIsEditing(true)}
              className="text-blue-500 text-sm"
            >
              Editar
            </button>
            <button
              onClick={handleToggleComplete}
              className="text-sm text-green-600"
            >
              {task.completed ? "Reabrir" : "Completar"}
            </button>
            <button onClick={handleDelete} className="text-sm text-red-500">
              Eliminar
            </button>
          </div>
        </div>
      )}
    </li>
  );
}
