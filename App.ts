import express from 'express';
import sequelize from './config/database';
import userRoutes from './routes/userRoutes';

const app = express();

app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/api', userRoutes);

sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(5000, () => console.log('Server running on http://localhost:5000'));
}).catch(err => console.log('Error syncing database', err));
