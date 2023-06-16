import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input('form')form!:any;
  @Input('inputs')inputs:any[]=[];
  formulario!:FormGroup;
  formularioCargado: boolean = false;

  @Output() sendForm = new EventEmitter<any>();

  constructor(private _formBuilder: FormBuilder,
    @Inject(MAT_DATE_LOCALE) private _locale: string,
    private adapter: DateAdapter<any>){}

  ngOnInit(): void {
    this.formulario = this._formBuilder.group(this.form); 
    if(this.formulario !== undefined)this.formularioCargado = true;   
  }

  spanish() {
    this._locale = 'es-ES';
    this.adapter.setLocale(this._locale);
  }

  getDateFormatString(): string {
    if (this._locale === 'ja-JP') {
      return 'YYYY/MM/DD';
    } else if (this._locale === 'es-ES') {
      return 'DD/MM/YYYY';
    }
    return '';
  }

  onClickButton(){
    this.sendForm.emit(this.formulario.value);
  }

  onKeyPress(ev:any){
    const { keyCode } = ev;
    if(keyCode >= 48 && keyCode <= 57)return true;
    else return false;
  }
}
