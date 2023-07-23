import signUseCase from '../use-cases/sign.use-case';

/**
 * @param {import('express').Request} request
 * @param {import('express').Response} reponse
 */
export default async function signController(request, reponse) {
  const token = await signUseCase.execute(request.body);
  return reponse.status(201).json({
    token,
  });
}
