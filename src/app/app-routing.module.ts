import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { GetApiComponent } from './get-api/get-api.component';
import { UkmcodeComponent } from './ukmcode/ukmcode.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent, pathMatch: 'full'
  },
  {
    path: 'getApi',
    component: GetApiComponent, pathMatch: 'full'
  },
  {
    path: 'ukmcode',
    component: UkmcodeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
