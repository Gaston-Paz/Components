import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyRoutingModule } from './body-routing.module';
import { ButtonModule } from '../shared/button/button.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { InputsComponent } from './inputs/inputs.component';
import { InputModule } from '../shared/input/input.module';
import { FormsComponent } from './forms/forms.component';
import { FormModule } from '../shared/form/form.module';
import { TablesComponent } from './tables/tables.component';


@NgModule({
  declarations: [
    ButtonsComponent,
    InputsComponent,
    FormsComponent,
    TablesComponent
  ],
  imports: [
    CommonModule,
    BodyRoutingModule,
    ButtonModule,
    InputModule,
    FormModule
  ]
})
export class BodyModule { }
