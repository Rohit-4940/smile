import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'charity/home',
    pathMatch: 'full'
  },
  {
    path: 'charity',
    loadChildren: () =>
      import('./components/@charity-module/charity.routes').then(
        (m) => m.CharityRoutes
      ),
    data: { preload: true, title: 'Give with Smile' }
  },
  {
    path: 'tools',
    loadChildren: () =>
      import('../app/components/@tools-module/tools.routes').then(
        (m) => m.ToolsRoutes
      ),
    /*canActivate: [AdminGuard],*/
    data: { preload: true, title: 'Tools Page' }
  },
  {
    path: '**',
    resolve: {
      logRoute: () => {
        console.error('Unknown route accessed!');
        // Log route details to an analytics service here
        return null;
      },
    },
    redirectTo: 'charity/home', // Or a 404 page
    pathMatch: 'full'
  }

];
