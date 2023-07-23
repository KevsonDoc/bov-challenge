import showPricePerMonthByYearUseCase from '../use-cases/show-price-per-month-by-year.use-case';

/**
 * @param {import('express').Request} request
 * @param {import('express').Response} reponse
 */
export default async function showPricePerMonthByYearController(request, reponse) {
  const data = await showPricePerMonthByYearUseCase.execute({
    farmId: request.params.id,
    year: request.query.year ? +request.query.year : new Date().getUTCFullYear(),
  });
  return reponse.status(200).json(data);
}
