import { Component } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styles: ``
})
export class EmployeeFormComponent {

  constructor(public service: EmployeeService) {}

  onSubmit(){
    console.log('Button works');
    console.log(this.service.employeeForm.value);
  }

}
