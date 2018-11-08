import { RouterModule } from '@angular/router';
import { NewsContainer } from "./containers/news.container";

export const routes = [
  { path: '', component: NewsContainer}
];
export const routing = RouterModule.forChild(routes);
