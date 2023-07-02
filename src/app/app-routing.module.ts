import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateproductsComponent } from './createproducts/createproducts.component';

import { UpdateproductsComponent } from './updateproducts/updateproducts.component';

import { ProductlistComponent } from './productlist/productlist.component';

import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CreateordersComponent } from './createorders/createorders.component';

import { OrderdetailsComponent } from './orderdetails/orderdetails.component';

import { OrderlistComponent } from './orderlist/orderlist.component';
import { CreatepaymentComponent } from './createpayment/createpayment.component';
import { PaymentlistComponent } from './paymentlist/paymentlist.component';

const routes: Routes = [

  {path:'products',component:ProductlistComponent},

  {path:'createproducts',component:CreateproductsComponent},

  {path:'',redirectTo:'products',pathMatch:'full'},

  {path:'updateproducts/:productId',component:UpdateproductsComponent},

  {path:'productdetails/:productId',component:ProductdetailsComponent},
  {path:'orders',component:OrderlistComponent},

  {path:'orderdetails/:productid',component:OrderdetailsComponent},

  {path:'createorders',component:CreateordersComponent},

  {path:'',redirectTo:'orders',pathMatch:'full'},

  {path:'payment',component:PaymentlistComponent},
  {path:'createpayment',component:CreatepaymentComponent},
  {path:'',redirectTo:'payment',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
