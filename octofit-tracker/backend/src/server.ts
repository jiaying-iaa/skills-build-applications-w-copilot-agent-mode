import express from 'express';
import cors from 'cors';
import './config/database';
import usersRouter from './routes/users';
import activitiesRouter from './routes/activities';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/users', usersRouter);
app.use('/api/activities', activitiesRouter);

app.listen(PORT, () => {
  const codespaceName = process.env.CODESPACE_NAME;
  const baseUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : `http://localhost:${PORT}`;
  console.log(`Octofit Tracker API listening at ${baseUrl}`);
});
