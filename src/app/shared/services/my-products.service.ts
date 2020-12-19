import { Injectable } from '@angular/core';
import { MyProduct } from './model/myproduct.model';

@Injectable({
  providedIn: 'root'
})
export class MyProductsService {
myProducts: MyProduct[] = [
  {name:'ТЫБЛОКИ', price: 99}];
  constructor() { }
}
