import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  myname = "";
abc(username:string){
  // alert("you clicked me successfully "+"Mr."+username)
  this.myname=username;
}


// myname = "Sandeep"
// year = 2022
// total = 0;
// emi=0;

// cal(p:any,t:any,r:any){
//   this.total=(p*t*r)/100;
//   this.emi=this.total/t;
// }

total = 0;
percentage=0;
rank="";
cal(e:any,h:any,m:any,sc:any,ss:any){
  this.total=parseInt(e)+parseInt(h)+parseInt(m)+parseInt(sc)+parseInt(ss);
  this.percentage=(this.total)/5;
  if(this.percentage>=90){
    this.rank="RANKER";
  }
  else if(this.percentage <90 && this.percentage >=75){
    this.rank="First Rank";
  }
  else if(this.percentage <74 && this.percentage >=35){
    this.rank="Second Rank";
  }
  else if(this.percentage <35){
    this.rank="fail";
  }
}










// total = 0;
// emi=0;
// intrest:any;
// cal(p:any,t:any){
//   this.total=(p*t*this.intrest)/100;
//   this.emi=this.total/t;
// }

// roi(loantype:any){
//   if(loantype.target.value=="car"){
//     this.intrest=9;
//   }
//  else if(loantype.target.value=="home"){
//     this.intrest=8;
//   }
//   else if(loantype.target.value=="edu"){
//     this.intrest=10;
//   }
//  else if(loantype.target.value=="person"){
//     this.intrest=12;
//   }
// }


}
