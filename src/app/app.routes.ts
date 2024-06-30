import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';




export const routes: Routes = [

    {path:'', component:HomepageComponent},
    {path:'my-dashboard', component: DashboardComponent},
    { path: 'contact', component: ContactComponent },
    {path:'home', redirectTo:'/my-dashboard', pathMatch:'full'},
 

];
