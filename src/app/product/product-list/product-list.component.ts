import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/products';
import { ProductService } from '../../../product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
   products:any
   
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    const productObservable = this.productService.getProducts()
    productObservable.subscribe(
      (data)=> {
        this.products = data
        console.log('OKeeeeee'+data)
      },
      (err) => {console.log('erreeeeee')},
      () => {}

    )
  /*  
    const productObservable = this.productService.getProducts()
    productObservable.subscribe(
      (data)=>{console.log('OK')},
      (erro)=>{console.log('erro')},
      ()=>{}

    )
    */
  }
}
