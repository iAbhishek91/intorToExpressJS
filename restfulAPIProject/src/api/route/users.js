import express from 'express';
import users from '../../../database/users.json';
import createOrUpdateUser from '../../middleware/createOrUpdateUser';

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
  res.status(200).json(users);
});

userRouter.get('/:userId', (req, res) => {
  const { userId } = req.params;
  const user = users.users[Number(userId) - 1] || 'not found';

  res.status(200).json({ user });
});

userRouter.post('/', createOrUpdateUser, (req, res) => {
  const status = req.userAction === 'create' ? 201 : 200;

  res.status(status).json({
    message: req.userAction
  });
});

export default userRouter;