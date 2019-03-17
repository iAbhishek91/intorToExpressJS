import express from 'express';
import users from '../../../database/users.json';
import createOrUpdateUser from '../middleware/createOrUpdateUser';
import authentication from '../middleware/authentication';
import { login } from '../controllers/users';

const userRouter = express.Router();

userRouter.get('/', authentication, (_, res) => {
  res.status(200).json(users);
});

userRouter.get('/:userId', authentication, (req, res) => {
  const { userId } = req.params;
  const user = users.users[Number(userId) - 1] || 'not found';

  res.status(200).json({ user });
});

userRouter.post('/', createOrUpdateUser, (req, res) => {
  const status = req.userAction === 'created' ? 201 : 200;

  res.status(status).json({
    message: req.userAction
  });
});

userRouter.post('/login', login);

export default userRouter;