import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ProvidersController from '@modules/appointments/infra/http/controllers/ProvidersController';
import ProviderMonthAvaliabilityController from '@modules/appointments/infra/http/controllers/ProviderMonthAvaliabilityController';
import ProviderDayAvaliabilityController from '@modules/appointments/infra/http/controllers/ProviderDayAvaliabilityController';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const providersRouter = Router();

const providersController = new ProvidersController();
const providerMonthAvaliabilityController = new ProviderMonthAvaliabilityController();
const providerDayAvaliabilityController = new ProviderDayAvaliabilityController();

providersRouter.use(ensureAuthenticated);

providersRouter.get('/', providersController.index);
providersRouter.get(
  '/:provider_id/month-availability',
  celebrate({
    [Segments.PARAMS]: {
      provider_id: Joi.string().uuid().required(),
    },
  }),
  providerMonthAvaliabilityController.index,
);
providersRouter.get(
  '/:provider_id/day-availability',
  celebrate({
    [Segments.PARAMS]: {
      provider_id: Joi.string().uuid().required(),
    },
  }),
  providerDayAvaliabilityController.index,
);

export default providersRouter;
