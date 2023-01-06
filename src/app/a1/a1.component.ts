import { Component } from '@angular/core';
import { ServdemoService } from '../servdemo.service';

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrls: ['./a1.component.css']
})
export class A1Component {
constructor(private db1:ServdemoService){

}

A1comp(){
  this.db1.dbcommonlogic();
}

}
