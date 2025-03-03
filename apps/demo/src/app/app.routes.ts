import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'components',
    loadChildren: () => import('@ngx-atlas-ui/components').then((M) => M.COMPONENT_ROUTES),
  },
  {
    path: '**',
    redirectTo: 'components',
  },
];
