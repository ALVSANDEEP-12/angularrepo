import { Component } from '@angular/core';
import { ServdemoService } from '../servdemo.service';

@Component({
  selector: 'app-a3',
  templateUrl: './a3.component.html',
  styleUrls: ['./a3.component.css']
})
export class A3Component {
 
   constructor(private db3:ServdemoService){

   }

   A3comp(){
    this.db3.dbcommonlogic();
   }


}
