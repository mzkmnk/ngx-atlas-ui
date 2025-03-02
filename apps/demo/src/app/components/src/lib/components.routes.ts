import { Route } from '@angular/router';

export const COMPONENT_ROUTES: Route[] = [
  {
    path: 'button',
    loadComponent: () => import('@ngx-atlas-ui/components/demo-button').then((M) => M.DemoButtonComponent),
  },
  {
    path: '**',
    redirectTo: 'button',
    pathMatch: 'full',
  },
];
