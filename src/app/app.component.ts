import { Component, OnInit } from '@angular/core';
import { HttpProductService } from './shared/services/http-product.service';
import { MyProduct } from './shared/services/model/myproduct.model';
import { MyFirstService } from './shared/services/my-first.service';
import { MyProductsService } from './shared/services/my-products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'labgl';

  products: MyProduct[];
  constructor(
     private myFirstService: MyFirstService,
     private myProductsService: MyProductsService,
     private httpProductService: HttpProductService
     ){}

  ngOnInit(){
    // this.myFirstService.myFunction('hel');
    // this.products = this.myProductsService.myProducts;
    // console.log(this.products);
    this.getData();
  }
 async getData(){
try{
this.products = await this.httpProductService.getProducts();
} catch(err) {
  console.log(err);
 }
  }
  async onAddProduct(event: MyProduct) {
    try{
await this.httpProductService.postProduct(event);
    }catch(err){
      console.error(err);
    } finally {
      this.getData();
    }
  }
}
