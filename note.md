# Note

[Course Information👉](https://www.inflearn.com/course/Angular)

## Angular Component

### 컴포넌트 생성

```shell
# generate component
ng g c <component-name>

# ex)
# ng g c section
# ng generate component section/stopwatch
```

## Angular Module

### 모듈 생성

```shell
# generate module
ng g m <module-name>

# ex)
# ng g m section
```

## Angular Service

- 비슷한 기능(관심사)를 묶어 코드의 중복을 제거 => 재사용 가능한 코드 뭉치로 만들 수 있음
  - ==> 컴포넌트 간 데이터 중개

### 서비스 생성

```shell
# generate module
ng g s <service-name>

# ex)
# ng g s share/page-toggle
```

## Angular Injection

> - DI: Dependency Injection

- Injectors follow angular component tree structure => A Component has no Injector or a Injector by Provider

```ts
// 1. in component.ts
@Component({
  ...
  providers: [
    // service injection...
  ]
})
// => find service from parent component
// => use first found service in path: (parent component? -> grandparent component? -> ... -> root component)
// => can use this service in this component and children
```

```ts
// 2. in module.ts
@NgModule({
  ...
  providers: [
    // service injection...
  ]
})
// => find service from parent module(this component imported)
// => use first found service in path: (parent module? -> grandparent module? -> ... -> root module)
```

```ts
// 3. in service.ts
@Injectable({
  ...
  // providedIn: SomeComponent
  // providedIn: SomeModule
  providedIn: // service injection...
})
```

> **Example of finding injector
>
> - my component (self) -> parent component -> ... -> root component -> root module -> child module -> ... -> my module
> - If find service provider, stop searching it

## Angular Component Life Cycle

- Life cycle methods
  - ngOnChanges
  - ngOnInit
  - ngDoCheck
  - ngAfterContentInit
  - ngAfterContentChecked
  - ngAfterViewInit
  - ngAfterViewChecked
  - ngDestroy

- After children components rendered, parent component run init method.
- example console.log

  ```txt
  parent# ng After Content Init
  parent# ng After Content Checked
  child# ng On Init
  child# ng Do Check
  child# ng After Content Init
  child# ng After Content Checked
  child# ng After View Init
  child# ng After View Checked
  parent# ng After View Init
  parent# ng After View Checked
  ```

<!-- 
1. 컴포넌트
2. 모듈
3. 서비스 
-->
