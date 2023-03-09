import { Component, OnInit } from '@angular/core';

interface NavItemType {
  id: string;
  title: string;
  path?: string;
  icon?: string;
  items?: NavItemType[];
}

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {

  locationNow: string = '';

  navItems: NavItemType[] = [
    {
      id: '0',
      title: 'monitoring',
      items: [
        { id: '2', path: '/dashboard', title: 'Dashboard', icon: 'grid_view' },
      ]
    },
    {
      id: '1',
      title: '모델',
      items: [
        { id: '0', path: '/upload', title: 'Upload', icon: 'upload' },
        { id: '1', path: '/download', title: 'Download', icon: 'download' },
        { id: '2', path: '/redirect', title: 'Redirect', icon: 'explore' },
      ]
    },
  ];

  constructor() { }

  ngOnInit(): void { }

}
