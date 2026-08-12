
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
 
@Injectable({
  providedIn: 'root'
})


export class EmployeeService {
 
  private http = inject(HttpClient);
 
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';



 
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  
 
  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/${id}`);
  }
 
}
 