/* eslint-disable no-console */
import NotFound from '../core/not-found.error';
import ServerError from '../core/server.error';
import UnauthorizedError from '../core/unauthorized.error';
import UnprocessableEntity from '../core/unprocessable-entity.error';

export default async function addFarmerToSystemController(error, _, response, next) {
  if (!error) {
    return next();
  }

  if (error instanceof NotFound) {
    console.log(error);
    return response.status(404).json({ message: error.message });
  }

  if (error instanceof ServerError) {
    console.log(error);
    return response.status(500).json({ message: error.message });
  }

  if (error instanceof UnauthorizedError) {
    console.log(error);
    return response.status(401).json({ message: 'unauthorized' });
  }

  if (error instanceof UnprocessableEntity) {
    console.log(error);
    return response.status(422).json({ message: error.message });
  }

  console.log(error);
  return response.status(500).json({ message: 'ServerError' });
}
