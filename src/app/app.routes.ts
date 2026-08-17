import { Routes } from '@angular/router';
import {EmployeeList} from './components/employee-list/employee-list';
import {EmployeeDetails } from './components/employee-details/employee-details';
import { Login } from './components/login/login';
import { authGuard } from './guards/auth.gaurd';


export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:Login
    },
    {
        path:'employee-list',
        component:EmployeeList,
        canActivate:[authGuard]
    },
    {
         path:'employee/:id',
        component:EmployeeDetails,
        canActivate:[authGuard]
    }
];
