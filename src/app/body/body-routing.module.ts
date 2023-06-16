import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { InputsComponent } from './inputs/inputs.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  {
    path: 'buttons',
    component: ButtonsComponent
  },
  {
    path: 'inputs',
    component: InputsComponent
  },
  {
    path: 'forms',
    component: FormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodyRoutingModule { }
