import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {
  student:any;
  ngOnInit(): void {
    this.student=new FormGroup({
      firstname:new FormControl("",Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10)
      ])),
      lastname:new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)
    ])),
    age:new FormControl("",Validators.compose([
      Validators.required,
      Validators.min(18),
      Validators.max(60)
  ])),
  
    })
  }
 
}
