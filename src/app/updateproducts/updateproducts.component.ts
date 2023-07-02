import { Component,OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

import { Products } from '../products';

import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-updateproducts',
  templateUrl: './updateproducts.component.html',
  styleUrls: ['./updateproducts.component.css']
})

export class UpdateproductsComponent implements OnInit{




  productId:number=0;

  products:Products = new Products();




  constructor(private productsService:ProductsService,

    private route:ActivatedRoute,

    private router:Router){}




  ngOnInit(): void {

    this.productId = this.route.snapshot.params['productId'];




    this.productsService.getProductById(this.productId).subscribe(data=>{

      this.products = data;

    },

    error => console.log(error)

    );

  }




  onSubmit(){

    this.productsService.updateProduct(this.productId,this.products).subscribe(data=>{

      this.goToProductlist();

    },

    error => console.log(error)

    );

  }




  goToProductlist(){

    this.router.navigate(['/products']);

  }

}
