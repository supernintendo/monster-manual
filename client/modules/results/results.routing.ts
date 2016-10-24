import { Routes, RouterModule } from '@angular/router';

import { ResultsComponent } from './results.component';

export const routes: Routes = [
    { path: 'results', component: ResultsComponent }
];

export const routing = RouterModule.forChild(routes);