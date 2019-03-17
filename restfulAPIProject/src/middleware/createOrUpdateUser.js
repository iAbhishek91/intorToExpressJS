import fs from 'fs';
import path from 'path';
import usersData from '../../database/users.json';

const createUser = (newUser) => {
  usersData.users.push(newUser);
  fs.writeFile(
    path.join(__dirname, '../../database','users.json'), JSON.stringify(usersData), (err) => {
      if(err) {
        console.log(err.message);
        return;
      }
      console.log('User created');
    }
  );
};

const updateUser = ({ id, name }) => {
  usersData.users[id - 1].name = name;
  fs.writeFile(
    path.join(__dirname, '../../database','users.json'), JSON.stringify(usersData), (err) => {
      if(err) {
        console.log(err.message);
        return;
      }
      console.log('User updated');
    }
  );
};

export default (req, res, next) => {
  const newUserId = Number(req.body.id);
  let isUserPresent = false;

  usersData.users.forEach((user) => {
    if (user.id == newUserId) {
      isUserPresent = true;
      return;
    }
  });

  console.log(`isUserPresent ${isUserPresent}`);
  if (isUserPresent) {
    req.userAction = 'update'
    updateUser(req.body);
  } else {
    req.userAction = 'create'
    createUser(req.body);
  }

  next();
}