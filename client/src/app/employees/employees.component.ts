import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styles: ``
})
export class EmployeesComponent implements OnInit {

constructor(public service: EmployeeService) {}
  ngOnInit(): void {
    this.service.fetchEmployeeList();
  }

  populatedForm(seletedRecord: Employee){
    this.service.employeeForm.setValue({
      _id: seletedRecord._id,
  fullName: seletedRecord.fullName,
  position: seletedRecord.position,
  location: seletedRecord.location,
  salary: seletedRecord.salary
    })
  }

}
