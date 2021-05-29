import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { IPrograms } from 'src/app/models/programs.model';
import { RegisterService } from '../../core/services/register/register.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  optPrograms: IPrograms[] = [];

  constructor( private fb: FormBuilder,
                private registerService: RegisterService, 
                private store: Store<AppState> ) {
    this.registerForm = this.fb.group({
      name: ["", Validators.required],
      family_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      program: [''],
      comment: ['']
    });
  }

  ngOnInit(): void {
   this.store.select('register').subscribe(({programs}) => this.optPrograms = programs);
  }

  save() {
    
    if (this.registerForm.invalid) { return; }

    const user = this.registerForm.value;
    this.registerService.saveRegister(user).subscribe(() => {
      this.registerForm.reset();
      Swal.fire({
        title: 'Genial!',
        text: 'Usuario registrado correctamente',
        icon: 'info',
        confirmButtonText: 'Aceptar'
      });
    });
  }

}
