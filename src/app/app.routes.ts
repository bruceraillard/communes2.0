import {Routes} from '@angular/router';
import {ParProvinceComponent} from './pages/par-province/par-province.component';
import {ParPopulationComponent} from './pages/par-population/par-population.component';
import { ParDensiteComponent } from './pages/par-densite/par-densite.component';

export const routes: Routes = [
  {path: '', redirectTo: 'par-province', pathMatch: 'full'},
  {path: 'par-province', component: ParProvinceComponent},
  {path: 'par-population', component: ParPopulationComponent},
  { path: 'densite', component: ParDensiteComponent }
];
