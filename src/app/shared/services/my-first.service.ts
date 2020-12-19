import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {

  constructor() { }
  myFunction(p){
    console.log(p);
  }
}
