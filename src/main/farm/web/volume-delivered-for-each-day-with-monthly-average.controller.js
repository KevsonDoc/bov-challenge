import volumeDeliveredForEachDayWithMonthlyAverageUseCase from '../use-cases/volume-delivered-for-each-day-with-monthly-average.use-case';

/**
 * @param {import('express').Request} request
 * @param {import('express').Response} reponse
 */
export default async function volumeDeliveredForEachDayWithMonthlyAverageController(
  request,
  reponse,
) {
  const farms = await volumeDeliveredForEachDayWithMonthlyAverageUseCase.execute({
    farmId: request.params.id,
    month: request.query.month ? +request.query.month - 1 : 0,
  });
  return reponse.status(200).json(farms);
}
