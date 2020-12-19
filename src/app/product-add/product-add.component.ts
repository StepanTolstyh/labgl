import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpProductService } from '../shared/services/http-product.service';
import { MyProduct } from '../shared/services/model/myproduct.model';
import { MyProductsService } from '../shared/services/my-products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

productForm: FormGroup;
@Output() addProduct = new EventEmitter<MyProduct>();

  constructor(
    private myProductService: MyProductsService,
    private httpProductService: HttpProductService
    ) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required])
    });
  }


  async onAddProduct(){
// this.myProductService.myProducts.push(this.productForm.value);
// try{
// await this.httpProductService.postProduct(this.productForm.value);
// }catch(err){
//   console.error(err)
// }
this.addProduct.emit(this.productForm.value);
  }
}
