import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons/buttons.component';
import { TimeDisplayComponent } from './time-display/time-display.component';
import { StopwatchComponent } from './stopwatch.component';
import { RouterModule } from '@angular/router';
import { PageToggleService } from 'src/app/share/page-toggle.service';



@NgModule({
  declarations: [
    TimeDisplayComponent,
    ButtonsComponent,
    StopwatchComponent
  ],
  exports: [
    StopwatchComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    // 모듈 계층에서의 Provider 제공
    PageToggleService
  ]
})
export class StopwatchModule { }
