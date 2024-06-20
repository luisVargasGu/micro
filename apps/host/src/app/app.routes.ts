import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
  {
    path: 'remote',
    loadChildren: () => import('remote/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'remote1',
    loadChildren: () => import('mfe-1/Component').then((m) => m.Mfe2TestModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
