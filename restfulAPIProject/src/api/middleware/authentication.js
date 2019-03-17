import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  try {
    const decodedToken = jwt.verify(req.headers.authorization.split(' ')[1], 'private-key');
    req.userData = decodedToken;
    next();
  } catch (e) {
    return res.status(401).json({
      error: "Auth failed"
    });
  }
}
