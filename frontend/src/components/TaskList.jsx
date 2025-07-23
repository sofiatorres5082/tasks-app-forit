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

  const filterButtons = [
    { key: "all", label: "Todas", icon: "📋" },
    { key: "pending", label: "Pendientes", icon: "⏳" },
    { key: "completed", label: "Completadas", icon: "✅" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-center gap-2">
        {filterButtons.map(({ key, label, icon }) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`px-4 py-2 cursor-pointer rounded-full text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
              filter === key
                ? "bg-blue-500 text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            <span>{icon}</span>
            <span>{label}</span>
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filteredTasks.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">
              {filter === "completed" ? "🎉" : filter === "pending" ? "📝" : "📋"}
            </div>
            <p className="text-gray-500 text-lg">
              {filter === "completed" 
                ? "¡No hay tareas completadas aún!" 
                : filter === "pending" 
                ? "¡No hay tareas pendientes!" 
                : "No hay tareas creadas"}
            </p>
            <p className="text-gray-400 text-sm mt-2">
              {filter === "all" && "Crea tu primera tarea para comenzar"}
            </p>
          </div>
        ) : (
          <ul className="space-y-3">
            {filteredTasks.map((task, index) => (
              <div
                key={task.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <TaskItem
                  task={task}
                  onTaskUpdated={handleTaskUpdated}
                  onTaskDeleted={handleTaskDeleted}
                />
              </div>
            ))}
          </ul>
        )}
      </div>

      {tasks.length > 0 && (
        <div className="text-center pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-500">
            {filteredTasks.length} de {tasks.length} tareas mostradas
          </p>
        </div>
      )}
    </div>
  );
}