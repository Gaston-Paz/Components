import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  text:string = 'Guardar';
  icon:string = 'save';

  constructor(){}

  ngOnInit(): void {}

  onClick(){
    console.log('click');
    
  }

}
