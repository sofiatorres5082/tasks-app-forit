export default function TaskItem({ task }) {
  return (
    <li className="bg-white shadow rounded p-3 flex justify-between items-center">
      <span className={task.completed ? "line-through text-gray-500" : ""}>
        {task.title}
      </span>
      <span
        className={`text-xs px-2 py-1 rounded ${
          task.completed ? "bg-green-200 text-green-800" : "bg-yellow-200 text-yellow-800"
        }`}
      >
        {task.completed ? "Completada" : "Pendiente"}
      </span>
    </li>
  );
}
