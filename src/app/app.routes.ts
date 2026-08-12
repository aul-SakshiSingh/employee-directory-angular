import { Routes } from '@angular/router';
import {EmployeeList} from './components/employee-list/employee-list';
import {EmployeeDetails } from './components/employee-details/employee-details';


export const routes: Routes = [
    {
        path:'',
        component:EmployeeList
    },
    {
         path:'employee/:id',
        component:EmployeeDetails
    }
];
