import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './api/route/users';
import logger from './api/middleware/logger';
import crossOriginErrorHandler from './api/middleware/crossOriginErrorHandler';

const app = express();

// CORS error handler
app.use(crossOriginErrorHandler);
// logger
app.use(logger);

// body parsing
app.use(bodyParser.urlencoded({ extended: false })); // true in case of rich data
app.use(bodyParser.json());

// router
app.use('/users', userRouter);

// error handling
app.use((req, res, next) => {
  const err = new Error('not found abhishek');
  err.status = 404;
  next(err); // this parameter will be consumed by next middleware as fitst parameter
});

app.use((err, req, res) => {
  res.status(err.status);
  res.json({
    error: {
      message: err.message
    }
  });
});

export default app;