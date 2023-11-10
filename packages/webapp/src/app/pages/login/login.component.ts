import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
})
export default class LoginComponent implements OnInit {

  validateForm!: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: ['chen', [Validators.required]],
      password: ['cheng', [Validators.required]],
    });
  }
}
