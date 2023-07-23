import addFarmerToSystemUseCase from '../use-cases/add-farmer-to-system.use-case';

/**
 * @param {import('express').Request} request
 * @param {import('express').Response} reponse
 */
export default async function addFarmerToSystemController(request, reponse) {
  await addFarmerToSystemUseCase.execute(request.body);
  return reponse.status(201).json({
    message: 'Farmer created',
  });
}
