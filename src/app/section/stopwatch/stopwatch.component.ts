import { PageToggleService } from '../../share/page-toggle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  // template - An inline template for an Angular component. If provided, do not supply a template file using `templateUrl`
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss'],
  // * 컴포넌트 계층에서의 Provider 제공 시, 컴포넌트의 부모/자식 관계에서만 제공된 Provider를 가져올 수 있음 (~ root component)
  // * root component에서도 찾지 못할 시, 해당 서비스를 주입하지 못했다는 오류를 출력하게 됨
  // * 가장 먼저 만나는 Injector의 값을 사용
  // * 같은 서비스를 바라보고 있다 === 데이터를 공유할 수 있다
  // * 서비스에 provideIn으로 지정하는 것을 권장하고 있음
  // providers: [
  //   PageToggleService
  // ]
})
export class StopwatchComponent implements OnInit {

  present: string = "welcome";

  routingCount: number = 0;

  constructor(
    // private router: Router
    private PageToggleService: PageToggleService
  ) { }

  goClock() {
    // this.router.navigateByUrl('/clock')
    this.PageToggleService.goPage('/clock')
  }

  ngOnInit() {
  }



  // ngAfterContentInit(): void {
  //   console.log('parent# %cng After Content Init', 'color: orange')
  // }
  // ngAfterContentChecked(): void {
  //   console.log('parent# %cng After Content Checked', 'color: orange')
  // }
  // ngAfterViewInit(): void {
  //   console.log('parent# %cng After View Init', 'color: orange')
  // }
  // ngAfterViewChecked(): void {
  //   console.log('parent# %cng After View Checked', 'color: orange')
  // }

}
