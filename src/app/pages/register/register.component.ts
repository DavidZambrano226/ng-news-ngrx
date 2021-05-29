import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor( private fb: FormBuilder ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      family_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.min(2), Validators.max(10)]],
      program: [''],
      comment: ['']
    });
  }

  ngOnInit(): void {
   
  }

  save() {
    console.log(this.registerForm.value);
    console.log(this.registerForm.valid);
  }

}
