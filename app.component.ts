import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './employee-management/home/home.component';
import { EmployeeListComponent } from "./employee-management/employee-list/employee-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeComponent,EmployeeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
