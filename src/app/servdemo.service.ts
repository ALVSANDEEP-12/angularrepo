import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServdemoService {

  constructor() { }

emp=[ {
      "Id":31853,
      "Name":"Sandeep",
      "Branch":"cse",
      "Age":20,
      "Gender":"male"
      },
      {
        "Id":10000,
        "Name":"Hanu",
        "Branch":"cse",
        "Age":21,
        "Gender":"male"
      }
]

  dbcommonlogic(){
    console.log("Hi 100 lines of code was successfully created");
    // dependency injection was going on here..
  }
}
