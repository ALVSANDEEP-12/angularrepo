import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalaryComponent } from './galary/galary.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BindingComponent } from './binding/binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import {ReactiveFormsModule} from '@angular/forms';
import { PipeComponent } from './pipe/pipe.component';
import { ServcompdemoComponent } from './servcompdemo/servcompdemo.component';
import { A1Component } from './a1/a1.component';
import { A2Component } from './a2/a2.component';
import { A3Component } from './a3/a3.component';
import { A4Component } from './a4/a4.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalaryComponent,
    LoginComponent,
    SignupComponent,
    BindingComponent,
    DirectiveComponent,
    FormsComponent,
    ReactiveformsComponent,
    PipeComponent,
    ServcompdemoComponent,
    A1Component,
    A2Component,
    A3Component,
    A4Component,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
