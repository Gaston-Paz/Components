import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { ButtonModule } from '../button/button.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    DialogComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    ButtonModule,
    MatDialogModule
  ]
})
export class DialogModule { }
