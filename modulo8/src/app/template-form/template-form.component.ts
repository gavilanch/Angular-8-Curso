import { Component, OnInit, ViewChild } from '@angular/core';
import { Registro } from '../models/registro';
import { Suscripcion } from '../models/suscripcion.enum';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  model: Registro = { username: '', password: '', suscripcion: Suscripcion.Gratuita, promociones: true };
  constructor() { }
  suscripciones: any[] = [];

  @ViewChild('formularioRegistro', null)
  registerForm: NgForm;

  ngOnInit() {
    for (let item in Suscripcion) {
      if (isNaN(Number(item))) {
        this.suscripciones.push({ text: item, value: Suscripcion[item] });
      }
    }
  }

  submit() {
    console.log(this.model);
  }

  refrescar() {
    this.model = { username: '', password: '', suscripcion: Suscripcion.Gratuita, promociones: true };
    console.log(this.registerForm);
    this.registerForm.resetForm();
  }

}
