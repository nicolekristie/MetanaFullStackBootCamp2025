import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();
const mockUser = { id: 1, username: 'testuser', password: 'testpass' };

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === mockUser.username && password === mockUser.password) {
    const token = jwt.sign({ id: mockUser.id }, 'secretkey');
    return res.json({ token });
  }
  res.status(401).json({ message: 'Invalid credentials' });
});

export default router;