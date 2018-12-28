import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortComponent } from './port/port.component';
import { RunnerComponent } from './runner/runner.component';
import { LapComponent } from './lap/lap.component';

const routes: Routes = [
  {
    path: 'port',
    component: PortComponent
  },
  {
    path: 'runner',
    component: RunnerComponent
  },
  {
    path: 'lap',
    component: LapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
