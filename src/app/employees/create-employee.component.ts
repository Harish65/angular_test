import { Component, OnInit } from '@angular/core';
//import { Departments } from "../models/departments.model";
import { Employees } from "../models/employee.model";
//import { ngForm } from '@angular/forms';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.less']
})
export class CreateEmployeeComponent implements OnInit {
  Departments = [
    { id: '', name: "SELECT" }, 
    { id: '1', name: "IT" }, 
    { id: '2', name: ".NET" }, 
    { id: '3', name: "JAVA" }
  ];
  emp : Employees = {
    id:null,
    name: null,
    gender : null,
    email: '',
    phoneNumber:null,
    contactPrefrences : null,
    dateofBirth : null,
    department : null,
    isActive : null,
    photoPath : null,
  }


  department = '';
  photoPreview = false;
  constructor() {
  }

  ngOnInit() {
  }
  saveEmployee(emploeeForm) {
    console.log(emploeeForm.value);
  }
  photopriview() {
    this.photoPreview = !this.photoPreview;
  }
}
