import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();
let users = [{ id: 1, name: 'Alice' }];

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  try {
    const decoded = jwt.verify(token, 'secretkey');
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

router.get('/', authMiddleware, (req, res) => {
  res.json(users);
});

router.post('/', authMiddleware, (req, res) => {
  const newUser = { id: users.length + 1, name: req.body.name };
  users.push(newUser);
  res.status(201).json(newUser);
});

router.put('/:id', authMiddleware, (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (user) {
    user.name = req.body.name;
    return res.json(user);
  }
  res.status(404).json({ message: 'User not found' });
});

router.delete('/:id', authMiddleware, (req, res) => {
  users = users.filter(u => u.id != req.params.id);
  res.status(204).end();
});

export default router;