import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {FailRouteComponent} from './components/fail-route/fail-route.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: '**', component: FailRouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
