import { useState } from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, setTasks }) {
  const [filter, setFilter] = useState("all");

  const handleTaskUpdated = (updatedTask) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === updatedTask.id ? updatedTask : t))
    );
  };

  const handleTaskDeleted = (deletedId) => {
    setTasks((prev) => prev.filter((t) => t.id !== deletedId));
  };

  const filteredTasks =
    filter === "all"
      ? tasks
      : tasks.filter((task) => task.completed === (filter === "completed"));

  return (
    <div className="space-y-4">
      <div className="flex justify-center gap-4 mb-4">
        <button onClick={() => setFilter("all")} className="px-3 py-1 border rounded">
          Todas
        </button>
        <button onClick={() => setFilter("completed")} className="px-3 py-1 border rounded">
          Completadas
        </button>
        <button onClick={() => setFilter("pending")} className="px-3 py-1 border rounded">
          Pendientes
        </button>
      </div>

      {filteredTasks.length === 0 ? (
        <p className="text-center text-gray-500">No hay tareas.</p>
      ) : (
        <ul className="space-y-2">
          {filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onTaskUpdated={handleTaskUpdated}
              onTaskDeleted={handleTaskDeleted}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
