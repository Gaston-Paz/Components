import { Component, OnInit } from '@angular/core';
import { NavItem } from '../interfaces/NavItem.interface';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  navList: NavItem[] = [
    {
      title: 'Buttons',
      url:''
    },
    {
      title: 'Cards',
      url:''
    },
    {
      title: 'Forms',
      url:''
    },
    {
      title: 'Inputs',
      url:''
    },
    {
      title: 'Navs',
      url:''
    },
    {
      title: 'Tables',
      url:''
    },
    {
      title: 'Tooltips',
      url:''
    }
  ];

  constructor(){}

  ngOnInit(): void {}

}
