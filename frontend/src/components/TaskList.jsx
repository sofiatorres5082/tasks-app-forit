import { useEffect, useState } from "react";
import { getTasks } from "../services/api";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    getTasks().then(setTasks);
  }, []);

  const filteredTasks =
    filter === "all"
      ? tasks
      : tasks.filter((task) => task.completed === (filter === "completed"));

  return (
    <div className="space-y-4">
      <div className="flex justify-center gap-4 mb-4">
        <button onClick={() => setFilter("all")} className="px-3 py-1 border rounded">Todas</button>
        <button onClick={() => setFilter("completed")} className="px-3 py-1 border rounded">Completadas</button>
        <button onClick={() => setFilter("pending")} className="px-3 py-1 border rounded">Pendientes</button>
      </div>

      {filteredTasks.length === 0 ? (
        <p className="text-center text-gray-500">No hay tareas.</p>
      ) : (
        <ul className="space-y-2">
          {filteredTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      )}
    </div>
  );
}
