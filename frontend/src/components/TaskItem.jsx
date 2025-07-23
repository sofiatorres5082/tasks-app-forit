import { useState } from "react";
import { deleteTask, updateTask } from "../services/api";

export default function TaskItem({ task, onTaskUpdated, onTaskDeleted }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const [isLoading, setIsLoading] = useState(false);

  const handleToggleComplete = async () => {
    setIsLoading(true);
    const updated = await updateTask(task.id, {
      title: task.title,
      description: task.description,
      completed: !task.completed,
    });
    if (updated) onTaskUpdated(updated);
    setIsLoading(false);
  };

  const handleDelete = async () => {
    const confirmed = confirm("¿Estás seguro que querés eliminar esta tarea?");
    if (confirmed) {
      setIsLoading(true);
      const success = await deleteTask(task.id);
      if (success) onTaskDeleted(task.id);
      setIsLoading(false);
    }
  };

  const handleSaveEdit = async () => {
    if (!editedTitle.trim() || !editedDescription.trim()) return;
    
    setIsLoading(true);
    const updated = await updateTask(task.id, {
      title: editedTitle,
      description: editedDescription,
    });
    if (updated) {
      onTaskUpdated(updated);
      setIsEditing(false);
    }
    setIsLoading(false);
  };

  const handleCancelEdit = () => {
    setEditedTitle(task.title);
    setEditedDescription(task.description);
    setIsEditing(false);
  };

  return (
    <li className={`bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 ${
      task.completed ? 'bg-gray-50 border-gray-100' : ''
    }`}>
      {isEditing ? (
        <div className="space-y-3">
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Título de la tarea"
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            rows="2"
            placeholder="Descripción"
          />
          <div className="flex gap-2">
            <button 
              onClick={handleSaveEdit}
              disabled={isLoading || !editedTitle.trim() || !editedDescription.trim()}
              className="px-4 py-2 cursor-pointer bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
            >
              {isLoading ? "..." : "Guardar"}
            </button>
            <button
              onClick={handleCancelEdit}
              className="px-4 py-2 cursor-pointer bg-gray-500 hover:bg-gray-600 text-white rounded-lg text-sm font-medium transition-colors"
            >
              Cancelar
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-start gap-3">
          <button
            onClick={handleToggleComplete}
            disabled={isLoading}
            className={`flex-shrink-0 w-5 h-5 cursor-pointer rounded-full border-2 mt-1 transition-all duration-200 ${
              task.completed
                ? 'bg-green-500 border-green-500 text-white'
                : 'border-gray-300 hover:border-green-400'
            }`}
          >
            {task.completed && (
              <div className="flex items-center justify-center h-full">
                <span className="text-xs">✓</span>
              </div>
            )}
          </button>

          <div className="flex-1 min-w-0">
            <h3
              className={`font-medium cursor-pointer transition-all duration-200 ${
                task.completed 
                  ? "line-through text-gray-500" 
                  : "text-gray-800 hover:text-blue-600"
              }`}
              onClick={handleToggleComplete}
            >
              {task.title}
            </h3>
            <p className={`text-sm mt-1 ${
              task.completed ? "text-gray-400" : "text-gray-600"
            }`}>
              {task.description}
            </p>
          </div>

          <div className="flex-shrink-0 flex items-center gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="p-2 cursor-pointer text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all duration-200"
              title="Editar"
            >
              <span className="text-sm">✏️</span>
            </button>
            
            <button
              onClick={handleToggleComplete}
              disabled={isLoading}
              className={`p-2 rounded-lg cursor-pointer transition-all duration-200 ${
                task.completed
                  ? "text-gray-400 hover:text-orange-500 hover:bg-orange-50"
                  : "text-gray-400 hover:text-green-500 hover:bg-green-50"
              }`}
              title={task.completed ? "Reabrir" : "Completar"}
            >
              <span className="text-sm">
                {task.completed ? "↶" : "✓"}
              </span>
            </button>

            <button
              onClick={handleDelete}
              disabled={isLoading}
              className="p-2 cursor-pointer text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200"
              title="Eliminar"
            >
              <span className="text-sm">🗑️</span>
            </button>
          </div>
        </div>
      )}
    </li>
  );
}