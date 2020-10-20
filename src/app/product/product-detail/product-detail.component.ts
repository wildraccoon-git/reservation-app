import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import{products} from '../../products'
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})


export class ProductDetailComponent {
  product
  constructor(private route:ActivatedRoute) { }

  ngOnInit(){
    this.route.paramMap.subscribe(param=>{
      this.product = products[+param.get('productId')]
    })
  }

}
