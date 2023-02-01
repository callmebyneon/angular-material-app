import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface FoodNode {
  name: string;
  children?: FoodNode[];
  icon?: string;
  href?: string;
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Time',
    children: [
      {
        name: 'Stopwatch',
        icon: 'timer',
        href: '/stopwatch'
      },
      {
        name: 'Clock',
        icon: 'schedule',
        href: '/clock'
      },
    ],
  },
  {
    name: 'Charts',
    children: [
      {
        name: 'Dashboard',
        icon: 'space_dashboard',
        href: '/dashboard'
      },
    ],
  },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor(
    private router: Router
  ) {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

  navigate(href: string) {
    this.router.navigateByUrl(href)
  }

}
