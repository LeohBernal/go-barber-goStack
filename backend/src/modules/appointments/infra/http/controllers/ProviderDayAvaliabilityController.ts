import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderDayAvaliabilityService from '@modules/appointments/services/ListProviderDayAvaliabilityService';

export default class ProviderMonthAvaliabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { day, month, year } = request.body;

    const listProviderDayAvaliabilityService = container.resolve(
      ListProviderDayAvaliabilityService,
    );

    const avaliability = await listProviderDayAvaliabilityService.execute({
      day,
      year,
      month,
      provider_id,
    });

    return response.json(avaliability);
  }
}
