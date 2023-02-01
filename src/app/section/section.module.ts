import { SectionComponent } from './section.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StopwatchModule } from './stopwatch/stopwatch.module';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { ClockComponent } from './clock/clock.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes = [
  {
    path: 'stopwatch',
    component: StopwatchComponent
  },
  {
    path: 'clock',
    component: ClockComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
]


@NgModule({
  declarations: [
    SectionComponent,
  ],
  exports: [
    SectionComponent,
    RouterModule
  ],
  imports: [
    CommonModule,
    StopwatchModule,
    RouterModule.forChild(routes)
  ]
})
export class SectionModule { }
