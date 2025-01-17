
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./employee-management/home/home.component";
import { EmployeeListComponent } from "./employee-management/employee-list/employee-list.component";
import { EmployeeMedicalComponent } from "./employee-management/employee-medical/employee-medical.component";
import { ChartComponent } from "./employee-management/chart/chart.component";
import { ChartModule } from "./employee-management/chart/chart.module";
import { EmployeeService } from "./employee-management/employee.service";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations:[AppComponent],
  imports:[BrowserModule,CommonModule,AppRoutingModule,ReactiveFormsModule,HomeComponent,EmployeeListComponent,EmployeeService,EmployeeMedicalComponent,ChartComponent,ChartModule],
  bootstrap:[AppComponent]
  
})

export class AppModule{}