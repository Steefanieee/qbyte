import { PreloadAllModules, RouterModule } from '@angular/router';

export const routes = [
  {
    path: '',
    loadChildren: 'news/index#NewsModule'
  },
  {
    path: 'sponsors',
    loadChildren: 'sponsors/index#SponsorsModule'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
export const routing = RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules});

