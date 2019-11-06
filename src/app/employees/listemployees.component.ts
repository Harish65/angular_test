import { Component, OnInit } from '@angular/core';
import { Employees} from '../models/employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-listemployees',
  templateUrl: './listemployees.component.html',
  styleUrls: ['./listemployees.component.less']
})
export class ListemployeesComponent implements OnInit {
  employees : Employees[]  ;
  constructor(private _employeeService:EmployeeService ) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }
  
}
