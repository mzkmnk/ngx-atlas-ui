import { Route } from '@angular/router';

export const COMPONENT_ROUTES: Route[] = [
  {
    path: 'button',
    loadComponent: () => import('@ngx-atlas-ui/components/demo-button').then((M) => M.DemoButtonComponent),
  },
  {
    path: 'overview',
    loadComponent: () => import('@ngx-atlas-ui/components/overview').then((M) => M.OverviewComponent),
  },
  {
    path: '**',
    redirectTo: 'button',
    pathMatch: 'full',
  },
];
