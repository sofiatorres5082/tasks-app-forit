import express from 'express';

const app = express();

app.use(express.json());

app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

export default app;
