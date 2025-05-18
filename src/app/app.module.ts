import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HederComponent } from './heder/heder.component';
import { MideelComponent } from './mideel/mideel.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { WelcomeComponent } from './welcome/welcome.component';
import { SellerComponent } from './seller/seller.component';
import { BuyerComponent } from './buyer/buyer.component';

@NgModule({
  declarations:[
    AppComponent,
    HederComponent,
    MideelComponent,
    FooterComponent,
    // WelcomeComponent,
    SellerComponent,
    BuyerComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
