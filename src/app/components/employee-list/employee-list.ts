import { Component ,OnInit,inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


import { SearchComponent } from '../search/search';
import { Loader } from '../loader/loader';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  standalone:true,
  imports: [CommonModule, FormsModule, RouterModule, Loader, SearchComponent],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList implements OnInit{
  private employeeService=inject(EmployeeService);
  private router=inject(Router);


  employees: Employee[]=[];
  filteredEmployees: Employee[]=[];

  searchText : string='';

  loading : boolean =true;

  error : string='';
  searchError: string='';

  sortBy:string='';
  sortOrder:string='asc';




  ngOnInit(): void {
    console.log('employee List Loaded');
    this.getEmployees();
  }

  getEmployees():void{
    this.employeeService.getEmployees().subscribe({

      next: (data)=>{
        console.log(data);
        this.employees=data;
        this.filteredEmployees=data;
        this.loading=false;
        console.log('Loading status:', this.loading);

      },
      error:(err)=>{
        console.log(err);
        this.error='Unable to Load Employee Data. Please try again later.';
        this.loading=false;
      }
    });
  }

  sortEmployees(): void {
 
  if (!this.sortBy) {
    return;
  }
 
  this.filteredEmployees.sort((a, b) => {
 
    let valueA = '';
    let valueB = '';
 
    if (this.sortBy === 'name') {
      valueA = a.name.toLowerCase();
      valueB = b.name.toLowerCase();
    }
 
    if (this.sortBy === 'company') {
      valueA = a.company.name.toLowerCase();
      valueB = b.company.name.toLowerCase();
    }
 
    if (valueA < valueB) {
      return this.sortOrder === 'asc' ? -1 : 1;
    }
 
    if (valueA > valueB) {
      return this.sortOrder === 'asc' ? 1 : -1;
    }
 
    return 0;
  });
 
}
 
 

  search(searchValue:string): void {
 
  const value = searchValue.toLowerCase().trim();
 
  this.filteredEmployees = this.employees.filter(employee =>
    employee.name.toLowerCase().includes(value) ||
    employee.email.toLowerCase().includes(value)
  );
 
  this.sortEmployees();
 
}
  searchEmployee():void{
    const searchValue=this.searchText.trim().toLowerCase();

    if(!searchValue){
      return;
    }
    const employee=this.employees.find(emp=> emp.name.toLowerCase()===searchValue || emp.email.toLowerCase()===searchValue);


    if(employee){
      this.router.navigate(['/employee', employee.id]);
    }else{
      this.searchError='Incorrect employee name or email.';
    }
  }

}
