# Lecture Note

[Course Information๐](https://www.inflearn.com/course/Angular)

## Angular Component
### ์ปดํฌ๋ํธ ์์ฑ

```shell
# generate component
ng g c <component-name>

# ex)
# ng g c section
# ng generate component section/stopwatch
```


## Angular Module
### ๋ชจ๋ ์์ฑ

```shell
# generate module
ng g m <module-name>

# ex)
# ng g m section
```

## Angular Service

- ๋น์ทํ ๊ธฐ๋ฅ(๊ด์ฌ์ฌ)๋ฅผ ๋ฌถ์ด ์ฝ๋์ ์ค๋ณต์ ์ ๊ฑฐ => ์ฌ์ฌ์ฉ ๊ฐ๋ฅํ ์ฝ๋ ๋ญ์น๋ก ๋ง๋ค ์ ์์
  - ==> ์ปดํฌ๋ํธ ๊ฐ ๋ฐ์ดํฐ ์ค๊ฐ
### ์๋น์ค ์์ฑ

```shell
# generate module
ng g s <service-name>

# ex)
# ng g s share/page-toggle
```

## Angular Injection

> * DI: Dependency Injection

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
>   - my component (self) -> parent component -> ... -> root component -> root module -> child module -> ... -> my module   
>   - If find service provider, stop searching it



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
  ```
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
