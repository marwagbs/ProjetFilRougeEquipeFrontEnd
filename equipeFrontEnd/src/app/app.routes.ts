import { Routes } from '@angular/router';

export const routes: Routes = [
     
    {path:"**", loadComponent:()=>import('./components/login-form/login-form.component').then((f=>f.LoginFormComponent)) }
];
