import { Component, Input, OnInit } from '@angular/core';
import { NavItem } from '../interfaces/NavItem.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input('navItems')navItems:NavItem[]=[];

  constructor(private router: Router){}

  ngOnInit(): void {}

}
