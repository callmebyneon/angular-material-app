import { SectionComponent } from './section.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StopwatchModule } from './stopwatch/stopwatch.module';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { RouterModule } from '@angular/router';
import { ClockComponent } from './clock/clock.component';


const routes = [
  {
    path: 'stopwatch',
    component: StopwatchComponent
  },
  {
    path: 'clock',
    component: ClockComponent
  }
]


@NgModule({
  declarations: [
    SectionComponent,
    ClockComponent,
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
