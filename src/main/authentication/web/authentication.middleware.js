import authenticationGuardianUseCase from '../use-cases/authentication-guardian.use-case';

/**
 * @param {import('express').Request} request
 * @param {import('express').Response} reponse
 * @param {import('express').NextFunction} request
 */
export default function authenticationMiddeware(request, _, next) {
  const userId = authenticationGuardianUseCase.execute(request.headers.authorization);
  request.user = { id: userId };
  next();
}
