import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { FormsComponent } from './forms/forms.component';
import { GalaryComponent } from './galary/galary.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PipeComponent } from './pipe/pipe.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { ServcompdemoComponent } from './servcompdemo/servcompdemo.component';
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
},
{
  path:'pipe',
  component:PipeComponent
},
{
  path:'servcompdemo',
  component:ServcompdemoComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
