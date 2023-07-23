import showPricePerLiterByMonthPaidUseCase from '../use-cases/show-price-per-liter-by-month-paid.controller';

/**
 * @param {import('express').Request} request
 * @param {import('express').Response} reponse
 */
export default async function showPricePerLiterByMonthPaid(request, reponse) {
  const data = await showPricePerLiterByMonthPaidUseCase.execute({
    farmId: request.params.id,
    month: request.query.month ? +request.query.month - 1 : 0,
  });
  return reponse.status(200).json(data);
}
