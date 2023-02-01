import { PageToggleService } from '../../../share/page-toggle.service';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss']
})
export class TimeDisplayComponent implements OnInit {

  @Input() inputData: string = '';

  min: number = 0
  sec: number = 0
  ms: number = 0

  timeInterval: any;

  constructor(
    private PageToggleService: PageToggleService // can inject! (stopwatch ->)
    // => (component level) 같은 서비스 provider를 가지고 있을 때, 가장 먼저 만나는 서비스 제공
    // => (module level) 공유되지 않음? [#서비스 - Angular Injector 1]
  ) { }

  timeStart() {
    this.timeStop()
    this.timeInterval = setInterval(() => {
      // 60sec -> 1min
      if (this.sec === 59) {
        this.sec = 0
        this.min++
      }

      // 1000ms (10 * 100) -> 1sec
      if (this.ms === 99) {
        this.ms = 0
        this.sec++
      }

      this.ms++
    }, 10)
  }

  timeStop() {
    clearInterval(this.timeInterval)
  }

  timeReset() {
    this.timeStop()
    this.min = 0
    this.sec = 0
    this.ms = 0
  }

  // ngOnChanges(changes: SimpleChanges): void {
    /* Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
      Add '${implements OnChanges}' to the class. */

  //   for (let propName in changes) {
  //     if (propName == "inputData") {
  //       switch (changes[propName].currentValue) {
  //         case "start":
  //           this.timeStart();
  //           break;
  //         case "stop":
  //           this.timeStop();
  //           break;
  //         case "reset":
  //           this.timeReset();
  //           break;
  //         default:
  //           return;
  //       }
  //     }
  //   }
  // }

  // ngOnChanges(): void {
  //   console.log('child# %cng On Changes', 'color: yellow;')
  // }
  ngOnInit(): void {

  }
  // ngDoCheck(): void {
  //   console.log('child# %cng Do Check', 'color: yellow;')
  // }
  // ngAfterContentInit(): void {
  //   console.log('child# %cng After Content Init', 'color: yellow;')
  // }
  // ngAfterContentChecked(): void {
  //   console.log('child# %cng After Content Checked', 'color: yellow;')
  // }
  // ngAfterViewInit(): void {
  //   console.log('child# %cng After View Init', 'color: yellow;')
  // }
  // ngAfterViewChecked(): void {
  //   console.log('child# %cng After View Checked', 'color: yellow;')
  // }
  // ngDestroy(): void {
  //   console.log('ng Destroy')
  // }

}
