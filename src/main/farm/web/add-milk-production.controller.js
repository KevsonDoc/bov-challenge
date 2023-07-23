import addMilkProductionUseCase from '../use-cases/add-millk-production.use-case';

/**
 * @param {import('express').Request} request
 * @param {import('express').Response} reponse
 */
export default async function addMilkProductionController(request, reponse) {
  await addMilkProductionUseCase.execute(request.body);
  return reponse.status(201).json({
    message: 'created',
  });
}
