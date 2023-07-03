import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateproductsComponent } from './createproducts/createproducts.component';
import { UpdateproductsComponent } from './updateproducts/updateproducts.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { CreateordersComponent } from './createorders/createorders.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { CreatepaymentComponent } from './createpayment/createpayment.component';
import { PaymentlistComponent } from './paymentlist/paymentlist.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BuyerComponent } from './buyer/buyer.component';
import { SellerComponent } from './seller/seller.component';

import { SuccessComponent } from './success/success.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    CreateproductsComponent,
    UpdateproductsComponent,
    ProductdetailsComponent,
    ProductlistComponent,
    CreateordersComponent,
    OrderlistComponent,
    OrderdetailsComponent,
    CreatepaymentComponent,
    PaymentlistComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BuyerComponent,
    SellerComponent,
   
    SuccessComponent,
        ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
