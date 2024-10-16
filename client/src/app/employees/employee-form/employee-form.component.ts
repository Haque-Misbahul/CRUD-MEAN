import { Component } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styles: ``
})
export class EmployeeFormComponent {

  submitted: boolean = false;

  constructor(public service: EmployeeService) {}

  onSubmit(){
    this.submitted = true;

    if(this.service.employeeForm.valid){
     this.service.postEmployee().subscribe(res => {
      console.log('got the response');
     })
    }
  }
  resetForm(){
    this.service.employeeForm.reset();
    this.submitted = false;
  }

}
