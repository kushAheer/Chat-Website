import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './Routes/user.routes.js';
import appDbContext from './Db/appDbContext.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use('/api/auth', userRoutes);

app.listen(PORT, () => {
    appDbContext();
    console.log(`Server is running on http://localhost:${PORT}`)
});

export default app;