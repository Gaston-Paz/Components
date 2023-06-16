import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from './MyErrorStateMatcher';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input('class')class:string='';
  @Input('label')label:string='';
  @Input('type')type:string='';
  @Input('style')style:string='';

  @Output() changeInput = new EventEmitter<any>();

  inputValue:string = 'Clear me';
  inputNumberValue:number | undefined = undefined;
  
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();
  
  toppings = new FormControl('');
  inputMultipleValue:string[] = [];
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  constructor(){}

  ngOnInit(): void {}

  onClearInput(){
    if(this.style.includes('Number')) this.inputNumberValue = undefined;
    else this.inputValue = '';
  }

  onChangeInput(){    
    if(this.style.includes('Number'))this.changeInput.emit(this.inputNumberValue);
    else if(this.style.includes('Multiple'))this.changeInput.emit(this.inputMultipleValue);
    else this.changeInput.emit(this.inputValue);
  }

}
