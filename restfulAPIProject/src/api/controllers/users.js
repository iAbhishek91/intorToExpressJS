import jwt from 'jsonwebtoken';
import { isUserPresent } from '../middleware/createOrUpdateUser';
import users from '../../../database/users.json';

export const createAuthToken = (userMatches) => jwt.sign({
    id: users.users[userMatches - 1].id,
    name: users.users[userMatches - 1].name
  },
  'private-key',
  {
    expiresIn: 10 * 10
  },
);


export const login = (req, res) => {
  const { name } = req.body;
  const userMatches = isUserPresent(req.body);

  if (!userMatches || (userMatches > 0 && (users.users[userMatches - 1].name != name))
  ) {
    return res.status(401).json({
      error: "Auth failed"
    })
  };
  const token = createAuthToken(userMatches);

  res.status(200).json({
    message: "Auth successful",
    token,
  });
}