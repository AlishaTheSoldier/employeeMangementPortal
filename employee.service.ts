 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs'; // Ensure Observable is imported

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

private apiUrl = 'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001'; // your API URL

  constructor(private http: HttpClient) { }

  
  getEmployees(){
    return this.http.get(this.apiUrl);
  }
}
 