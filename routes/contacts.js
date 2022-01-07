import express from 'express';
import { getContacts, saveContacts } from '../utils.js';

const router = express.Router();

// MIDDLEWARES ONLY IN API/USER

//          /api/user
router.get('/', (req, res) => {
  const contacts = getContacts();
  res.json(contacts);
})

router.get('/:name', (req, res) => {
  const contacts = getContacts();
  res.json(contacts[req.params.name]);
})

router.post('/', (req, res) => {
  const { name, lastName, phoneNumber } = req.body;
  const contacts = getContacts();
  const key = name + ' ' + lastName;
  contacts[key] = { name, lastName, phoneNumber };
  saveContacts(contacts)
  res.send({ message: 'Contacto creado', payload: contacts });
})

export default router;