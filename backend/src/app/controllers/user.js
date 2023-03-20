import { Router } from 'express';
import userService from '../services/userService.js';
import CustomError from '../utils/customError.js';
const router = Router();

router.post('/create', async (req, res, prox) => {
  try {
    const newUser = await userService.create(req.body.user);
    res.status(201).json(newUser);
  } catch (err) {
    prox(err);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const token = await userService.login(req.body.user);
    res.status(200).json(newUser);
  } catch (err) {
    next(err);
  }
});

export default router;
