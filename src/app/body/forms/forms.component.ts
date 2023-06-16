import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  form = {
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    nacionalidad: ['', Validators.required],
    edad: ['']
  }

  form2 = {
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    nacionalidad: ['', Validators.required],
    nacimiento: ['', Validators.required],
    email:['',Validators.required],
    password: ['', Validators.required]
  }

  inputs: any[] = [
    {
      type:'text',
      label:'Nombre',
      control: 'nombre'
    },
    {
      type:'text',
      label:'Apellido',
      control: 'apellido'
    },
    {
      type:'selectSimple',
      label:'Nacionalidad',
      control: 'nacionalidad',
      list: [
        {
          value: 1,
          description: 'Argentina'
        },
        {
          value: 2,
          description: 'Brasil'
        }
      ]
    },
    {
      type:'number',
      label:'Edad',
      control: 'edad'
    }

  ]

  inputs2: any[] = [
    {
      type:'text',
      label:'Nombre',
      control: 'nombre'
    },
    {
      type:'text',
      label:'Apellido',
      control: 'apellido'
    },
    {
      type:'selectSimple',
      label:'Nacionalidad',
      control: 'nacionalidad',
      list: [
        {
          value: 1,
          description: 'Argentina'
        },
        {
          value: 2,
          description: 'Brasil'
        }
      ]
    },
    {
      type:'date',
      label:'Fecha de nacimiento',
      control: 'nacimiento'
    },
    {
      type:'email',
      label:'Email',
      control: 'email'
    },
    {
      type:'password',
      label:'Contraseña',
      control: 'password'
    }
  ]

  constructor(){}

  ngOnInit(): void {}

}
