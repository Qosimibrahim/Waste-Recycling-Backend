/* eslint-disable import/prefer-default-export */
import { isLoggedIn } from '../auth';
import { BadRequest } from '../errors';

export const guest = (req, res, next) => {
  if (isLoggedIn(req)) {
    return next(new BadRequest('You are already logged in'));
  }

  return next();
};
