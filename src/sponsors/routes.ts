import { RouterModule } from '@angular/router';
import { SponsorsContainer } from "./containers/sponsors.container";

export const routes = [
  { path: '', component: SponsorsContainer}
];
export const routing = RouterModule.forChild(routes);
