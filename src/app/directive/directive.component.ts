import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {

  arr=[1,2,3,4,5,6,7,8,9];

 fruits=["apple","mango","grapes"];
 addFruit(fru:any){
    this.fruits.push(fru);
 }
 

}
