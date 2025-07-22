const API_URL = import.meta.env.VITE_API_URL;

export const getTasks = async () => {
  try {
    const response = await fetch(`${API_URL}/tasks`);
    if (!response.ok) throw new Error("Error al obtener tareas");
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const createTask = async (task) => {
  try {
    const response = await fetch(`${API_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    if (!response.ok) throw new Error("Error al crear tarea");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

