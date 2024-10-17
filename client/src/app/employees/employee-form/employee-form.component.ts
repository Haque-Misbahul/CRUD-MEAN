import { Component } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { Employee } from '../../shared/employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styles: ``
})
export class EmployeeFormComponent {

  submitted: boolean = false;

  constructor(public service: EmployeeService) {}

  onSubmit() {
    this.submitted = true;
  
    const confirmSubmit = confirm('Do you want to submit?');
  
    if(this.service.employeeForm.get('_id')?.value == '')
    { 
      if (confirmSubmit && this.service.employeeForm.valid) {
        this.service.postEmployee().subscribe(res => {
          console.log('got the response');
          alert('Form submitted successfully!');  
          this.resetForm();
          this.service.fetchEmployeeList();
        }, err => {
          console.error('Error occurred:', err);
          alert('Failed to submit the form!');  
        });
      } else {
        console.log('Form submission canceled or invalid form');
      }
    }
    else{
      if (confirmSubmit && this.service.employeeForm.valid) {
        this.service.putEmployee().subscribe(res => {
          console.log('got the response');
          alert('Form updated successfully!');  
          this.resetForm();
          this.service.fetchEmployeeList();
        }, err => {
          console.error('Error occurred:', err);
          alert('Failed to update the form!');  
        });
      } else {
        console.log('Form update canceled or invalid form');
      }

    }
  
  }
  
  resetForm(){
    this.service.employeeForm.reset(new Employee());
    this.submitted = false;
  }

}
