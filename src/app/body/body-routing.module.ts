import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { InputsComponent } from './inputs/inputs.component';
import { FormsComponent } from './forms/forms.component';
import { TablesComponent } from './tables/tables.component';

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
  },
  {
    path: 'tables',
    component: TablesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodyRoutingModule { }
