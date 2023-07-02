import { Component,OnInit } from '@angular/core';
import { Products } from '../products';

import { ProductsService } from '../products.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-createproducts',
  templateUrl: './createproducts.component.html',
  styleUrls: ['./createproducts.component.css']
})
export class CreateproductsComponent implements OnInit{

  products:Products= new Products();

 

  constructor(private productsService:ProductsService,

    private router:Router){}




  ngOnInit(): void {    

  }




  saveProducts(){

    this.productsService.createProducts(this.products).subscribe(data=>{

      console.log(data);

      this.goToProductlist()

    },

    error => console.log(error)

    );

  }




  goToProductlist(){

    this.router.navigate(['/products'])

  }




  onSubmit(){

    console.log(this.products);

    this.saveProducts();

  }

}