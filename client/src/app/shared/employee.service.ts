import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeForm: FormGroup;
  
  constructor(private fb:FormBuilder) { 

this.employeeForm = this.fb.group({
  _id: [null],
  fullName: ['',Validators.required],
  position: ['',Validators.required],
  location: [''],
  salary: ['',Validators.required]
})

  }
}
