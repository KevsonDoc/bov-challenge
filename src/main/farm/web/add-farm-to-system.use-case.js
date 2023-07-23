import addFarmToSystemUseCase from '../use-cases/add-farm-to-system.use-case';

/**
 * @param {import('express').Request} request
 * @param {import('express').Response} reponse
 */
export default async function addFarmToSystemController(request, reponse) {
  await addFarmToSystemUseCase.execute({ farmerId: request.user.id, ...request.body });
  return reponse.status(201).json({
    message: 'Farm created',
  });
}
