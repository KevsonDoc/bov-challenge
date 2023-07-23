import listFarmsOfUserUseCase from '../use-cases/list-farms-of-user.use-case';

/**
 * @param {import('express').Request} request
 * @param {import('express').Response} reponse
 */
export default async function listFarmsOfUserController(request, reponse) {
  const farms = await listFarmsOfUserUseCase.execute(request.user.id);
  return reponse.status(201).json(farms);
}
