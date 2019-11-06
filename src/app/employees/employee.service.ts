import { Injectable } from '@angular/core';
import {Employees} from '../models/employee.model'

@Injectable()
export class EmployeeService{
    private listEmployees:Employees[]=[
        {
          id : 1,
          name: "Mark Jen",
          gender : "Male",
          email: "markp019@gmail.com",
          phoneNumber:"98765445",
          contactPrefrences : "Email",
          dateofBirth : new Date('09/12/1994'),
          department : "Admin",
          isActive : true,
          photoPath : "assets/images/avatar2.png"
        },
        {
          id : 2,
          name: "Jeny Neel",
          gender : "female",
          email: "jeny20@gmail.com",
          phoneNumber:"2398765445",
          contactPrefrences : "Phone",
          dateofBirth : new Date('01/08/1991'),
          department : "Developer Python",
          isActive : true,
          photoPath : "assets/images/jeny.png"
        },
        {
          id : 3,
          name: "Neelson",
          gender : "Male",
          email: "neel20@gmail.com",
          phoneNumber:"9874561238",
          contactPrefrences : "Email",
          dateofBirth : new Date('05/08/1992'),
          department : "Developer Php",
          isActive : true,
          photoPath : "assets/images/images.png"
        },
        {
          id : 3,
          name: "Sukhdev",
          gender : "Male",
          email: "sukhdev@gmail.com",
          phoneNumber:"987687123",
          contactPrefrences : "Email",
          dateofBirth : new Date('05/08/1990'),
          department : "Developer Php",
          isActive : true,
          photoPath : "assets/images/ben.png"
        },
      ];
      getEmployees():Employees[]{
          console.log(this.listEmployees);
          return this.listEmployees;
      }
}