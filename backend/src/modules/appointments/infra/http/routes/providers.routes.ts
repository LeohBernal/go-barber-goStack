import { Router } from 'express';

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
  providerMonthAvaliabilityController.index,
);
providersRouter.get(
  '/:provider_id/day-availability',
  providerDayAvaliabilityController.index,
);

export default providersRouter;
