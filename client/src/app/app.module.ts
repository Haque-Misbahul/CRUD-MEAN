import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeFormComponent } from './employees/employee-form/employee-form.component'; 

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeFormComponent  // Declare your root component here
  ],
  imports: [
    BrowserModule// Import routes (if you have routes)
  ],
  providers: [],
  bootstrap: [AppComponent]  // Bootstrap the main component
})
export class AppModule { }
