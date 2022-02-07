import { CelebrateError, isCelebrateError } from 'celebrate';
import { NextFunction, Request, Response } from 'express';

const CelebrateErrorHandler = (
  err: CelebrateError,
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void => {
  if (isCelebrateError(err)) {
    const errorBody = err.details.get('body');
    const errorParams = err.details.get('params');
    const errorQuery = err.details.get('query');
    return res.status(400).send({
      message: err.message,
      details:
        errorBody?.message || errorParams?.message || errorQuery?.message,
    });
  }

  return next(err);
};

export default CelebrateErrorHandler;
