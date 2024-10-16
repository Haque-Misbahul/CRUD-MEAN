import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeForm: FormGroup;
  constructor(private fb:FormBuilder) { 

this.employeeForm = this.fb.group({
  _id: [null],
  fullName: [''],
  position: [''],
  location: [''],
  salary: ['']
})

  }
}
