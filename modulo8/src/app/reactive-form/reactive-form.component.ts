import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Suscripcion } from '../models/suscripcion.enum';
import { passwordValidation } from '../validations/password-validation.directive';
import { UsernameUnicoService } from '../validations/username-unico.directive';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private usernameUnicoService: UsernameUnicoService) { }

  get username() {
    return this.registerForm.get('username');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get telefonos(){
    return this.registerForm.get('telefonos') as FormArray;
  }

  registerForm = this.formBuilder.group({
    username: ['', {
      validators: [Validators.required],
      asyncValidators: [this.usernameUnicoService.validate.bind(this.usernameUnicoService)],
      updateOn: 'blur'
    }],
    password: ['', {
      validators: [Validators.required, Validators.minLength(4), passwordValidation()]
    }],
    suscripcion: [Suscripcion.Basica],
    promociones: [true],
    telefonos: this.formBuilder.array([])
  });

  suscripciones: any[] = [];
  ngOnInit() {
    for (let item in Suscripcion) {
      if (isNaN(Number(item))) {
        this.suscripciones.push({ text: item, value: Suscripcion[item] });
      }
    }
  }

  agregarTelefono(){
    const telefonoFormGroup  = this.formBuilder.group({
      telefono: '',
      descripcion: ''
    });
    this.telefonos.push(telefonoFormGroup);
  }

  removerTelefono(indice: number) {
    this.telefonos.removeAt(indice);
  }

  submit() {

    if (!this.registerForm.valid) {
      alert('Alguna regla de validación no se está cumpliendo');
      return;
    }


    console.log(this.registerForm.value);
  }

  refrescar() {
    this.registerForm.patchValue({
      username: '',
      password: '',
      suscripcion: Suscripcion.Basica,
      promociones: true
    });
    this.telefonos.controls.splice(0, this.telefonos.length);
  }
}
