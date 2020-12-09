import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import{products} from '../../products'
import { ProductService } from '../../../product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})


export class ProductDetailComponent {
  product
  constructor(private route:ActivatedRoute,private productService:ProductService) { }

  ngOnInit(){
    this.route.paramMap.subscribe(param=>{
      //this.product = this.productService.getProductById(param.get('productId'))
      const productObservable = this.productService.getProductById(param.get('productId'))

      productObservable.subscribe(
        (data)=>{
          this.product = data
        },
        (err) =>
        {

        }
      )
    })
  }

}
