import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input('text')text:string='';
  @Input('color')color:string='';
  @Input('disable')disable:boolean=false;
  @Input('icon')icon:string='';
  @Input('type')type:string='';
  @Input('class')class:string='';

  @Output() clickButton = new EventEmitter<boolean>();

  constructor(){}

  ngOnInit(): void {}

  onClick(){
    this.clickButton.emit(true);
  }

}
