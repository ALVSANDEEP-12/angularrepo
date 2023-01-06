import { Component } from '@angular/core';
import { ServdemoService } from '../servdemo.service';

@Component({
  selector: 'app-a2',
  templateUrl: './a2.component.html',
  styleUrls: ['./a2.component.css']
})
export class A2Component {

  constructor(private db2:ServdemoService){

  }
  A2comp(){
    this.db2.dbcommonlogic();
  }

}
