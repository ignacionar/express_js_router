import express from 'express';

const router = express.Router();

// MIDDLEWARES ONLY IN API/USER

//          /api/user
router.get('/', (req, res) => {
  res.send({ message: 'ok' });
})

router.post('/', (req, res) => {
  console.log(req.body);
  res.send({ message: 'ok' });
})

export default router;