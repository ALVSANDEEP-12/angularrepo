import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { FormsComponent } from './forms/forms.component';
import { GalaryComponent } from './galary/galary.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
 {
  path:'home',
  component:HomeComponent
 },
 {
  path:'signup',
  component:SignupComponent
 },
 {
  path:'login',
  component:LoginComponent
 },
 {
  path:'galary',
  component:GalaryComponent
 },
 {
  path:'binding',
  component:BindingComponent
},
{
  path:'directive',
  component:DirectiveComponent
},
{
  path:'forms',
  component:FormsComponent
},
{
  path:'reactiveforms',
  component:ReactiveformsComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
