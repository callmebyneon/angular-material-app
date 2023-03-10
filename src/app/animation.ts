import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

const pageDefault = {
  top: '40px',
  left: '40px',
  width() { return `calc(100% - ${this.left} * 2)`},
  height() { return `calc(100% - ${this.left} * 2.5)`},
}
const pageDefaultStyle = {
  position: 'absolute',
  top: pageDefault.top,
  left: pageDefault.left,
  width: pageDefault.width(),
  height: pageDefault.height(),
  opacity: 0
}

export const slideInAnimation = trigger('routeAnimations', [
  transition('loginPage => *', [
    style({ position: 'relative' }),
    query(':enter', style({ opacity: 0 })),
    query(':leave', [
      style(pageDefaultStyle)
    ], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [
        animate('500ms ease-in-out', style({ top: '-100%', opacity: 0 }))
      ], { optional: true }),
      query(':enter', [
        animate('500ms ease-in-out', style({ opacity: 1 }))
      ], { optional: true }),
    ])
  ]),
  transition('* => loginPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style(pageDefaultStyle)
    ], { optional: true }),
    query(':enter', [
      style({ top: '-100%' })
    ], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [
        animate('500ms ease-in-out', style({ opacity: 0 }))
      ], { optional: true }),
      query(':enter', [
        animate('500ms ease-in-out', style({ top: pageDefault.top, opacity: 1 }))
      ], { optional: true }),
    ])
  ]),
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style(pageDefaultStyle)
    ], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    query(':enter', style({ left: '50%', opacity: 0 })),
    group([
      query(':leave', [
        animate('500ms ease-in-out', style({ left: '-50%' }))
      ], { optional: true }),
      query(':enter', [
        animate('500ms ease-in-out', style({ left: pageDefault.left, opacity: 1 }))
      ], { optional: true }),
    ])
  ]),
])
