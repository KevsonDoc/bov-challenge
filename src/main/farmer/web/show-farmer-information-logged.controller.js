import showFarmerByIdUseCase from '../use-cases/show-farmer-by-id.use-case';

/**
 * @param {import('express').Request} request
 * @param {import('express').Response} reponse
 */
export default async function showFarmerInformationLoggedController(request, reponse) {
  const farmer = await showFarmerByIdUseCase.execute(request.user.id);
  return reponse.status(200).json(farmer);
}
