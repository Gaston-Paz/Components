import { Component } from '@angular/core';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import 'moment/locale/es';
import { NavItem } from './interfaces/NavItem.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es-ES'},
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ]
})
export class AppComponent {
  navList: NavItem[] = [
    {
      label: 'Buttons',
      url:'components/buttons'
    },
    {
      label: 'Cards',
      url:''
    },
    {
      label: 'Forms',
      url:'components/forms'
    },
    {
      label: 'Inputs',
      url:'components/inputs'
    },
    {
      label: 'Navs',
      url:''
    },
    {
      label: 'Tables',
      url:'components/tables'
    },
    {
      label: 'Tooltips',
      url:''
    }
  ];
}
