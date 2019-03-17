import fs from 'fs';
import path from 'path';
import usersData from '../../../database/users.json';

const createUser = (newUser) => {
  usersData.users.push(newUser);

  fs.writeFile(
    path.join(__dirname, '../../../database','users.json'), JSON.stringify(usersData), (err) => {
      if(err) return err.message;
    }
  );

  return 'created';
};

const updateUser = ({ id, name }) => {
  usersData.users[id - 1].name = name;

  fs.writeFile(
    path.join(__dirname, '../../../database','users.json'), JSON.stringify(usersData), (err) => {
      if(err) return err.message;
    }
  );

  return 'updated';
};

export const isUserPresent = ({ id }) => {
  let isUserPresentFlag = false;

  usersData.users.forEach((user) => {
    if (user.id == id) {
      isUserPresentFlag = id;
      return;
    }
  });

  return isUserPresentFlag;
}

export default (req, res, next) => {
  if (isUserPresent(req.body)) {
    req.userAction = updateUser(req.body);
  } else {
    req.userAction = createUser(req.body); 
  }

  next();
}