import express from "express";
import userRouter from './routes/users.js';
import contactsRouter from './routes/contacts.js';

const app = express();

// BODY INTERPRETATION MIDDLEWARES
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// ROUTES

app.use('/api/user/', userRouter);
app.use('/api/contacts/', contactsRouter);

app.listen(5000, () => {
  console.log('Server is running in port 5000');
})