import { Component ,OnInit,inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { Loader } from '../loader/loader';


@Component({
  selector: 'app-employee-details',
  imports: [CommonModule,Loader],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css',
  standalone: true
})
export class EmployeeDetails implements OnInit {


  private route=inject(ActivatedRoute);
  private employeeService= inject(EmployeeService);

  employee!: Employee;

  loading: boolean=true;

  error: string='';

  ngOnInit(): void {
    const id= Number(this.route.snapshot.paramMap.get('id'));
    
    console.log("employee id: ",id);
    
    this.employeeService.getEmployee(id).subscribe({

      next: (data)=>{
        console.log('Employee details: ', data);

        this.employee=data;
        this.loading=false;
        console.log('Loading status:', this.loading);
      },

      error: (err)=>{
        console.error("error :", err );
        this.error ='Unable to load Employee Details. please try again later.';
        this.loading=false;
      }
    });
  }
}
