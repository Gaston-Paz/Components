import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ButtonModule } from '../button/button.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  standalone: true,
  imports: [
    MatCheckboxModule,
    ButtonModule,
    CommonModule
  ]
})
export class DialogComponent implements OnInit {

  newListCols:string[]=[];

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
  private _dialogRef: MatDialogRef<DialogComponent>){}

  ngOnInit(): void {
    this.newListCols = this.data.colsActives;
  }

  onCheck(ev:any,col:string){
    const { checked } = ev;
    if(checked) this.newListCols = [...this.newListCols, col];
    else this.newListCols = this.newListCols.filter(f => f !== col);
  }

  onClickButton(){
    this._dialogRef.close(this.newListCols);
  }
  
  onClickButtonCancel(){
    this._dialogRef.close(this.data.colsActives);

  }
}
