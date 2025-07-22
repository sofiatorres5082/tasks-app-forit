import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/task.routes.js';
import { errorHandler } from './middlewares/error.handler.js';

const app = express();

app.use(cors({
  origin: 'http://localhost:5173' 
}));

app.use(express.json());

app.use('/api/tasks', taskRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

app.use(errorHandler);

export default app;
