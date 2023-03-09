import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

const pageDefaultStyle = {
  position: 'absolute',
  top: '40px',
  left: '40px',
  width: 'calc(100% - 40px * 2)',
  height: 'calc(100% - 40px * 2.5)',
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
        animate('500ms ease-in-out', style({ top: '40px', opacity: 1 }))
      ], { optional: true }),
    ])
  ]),
])
