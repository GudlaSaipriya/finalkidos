import { Component,OnInit } from '@angular/core';
import { Products } from '../products';

import { ActivatedRoute } from '@angular/router';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})

export class ProductdetailsComponent implements OnInit{




  productId:number=0;

  products:any;




  constructor(private productsService:ProductsService,

    private route:ActivatedRoute){}




  ngOnInit(): void {

    this.productId = this.route.snapshot.params['productId'];

    this.products = new Products();

    this.productsService.getProductById(this.productId).subscribe(data=>{

        this.products = data;

    });

  }




 

}