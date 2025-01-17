import { Component,OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { NgFor } from '@angular/common';
//import { MatDialog } from '@angular/material/dialog';
//import { AddUserComponent } from '../add-user/add-user.component';
//import { UserTableComponent } from '../user-table/user-table.component';

@Component({
  selector: 'app-employee-list',
  imports: [NgFor],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  dataList:any;
constructor(private employeeData: EmployeeService){

  employeeData.getEmployees().subscribe((data)=>
    {
      
      this.dataList=data
      
    });
  
}




  ngOnInit() {
      
    }
      
  }


