import { StopwatchComponent } from '../section/stopwatch/stopwatch.component';
import { StopwatchModule } from '../section/stopwatch/stopwatch.module';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  // 주입할 대상인 컴포넌트 혹은 모듈을 설정할 수 있음
  // providedIn: StopwatchComponent,
  // providedIn: StopwatchModule
  providedIn: 'root',
})
export class PageToggleService {

  routingCount: number = 0;

  constructor(
    private router: Router
  ) { }

  goPage(target: string) {
    this.routingCount++;
    this.router.navigateByUrl(`/${target}`)
  }

}
