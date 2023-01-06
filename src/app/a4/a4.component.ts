import { Component, OnInit } from '@angular/core';
import { ServdemoService } from '../servdemo.service';

@Component({
  selector: 'app-a4',
  templateUrl: './a4.component.html',
  styleUrls: ['./a4.component.css']
})
export class A4Component { 
  //can use implements ngOninit for auto generate of tables as a display
  constructor(private emps:ServdemoService){

  }
  myemp:any=[];
A4comp(){

this.myemp=this.emps.emp;

}
  // ngOnInit(): void{
  //   this.myemp=this.emps.emp;
  // }

}
