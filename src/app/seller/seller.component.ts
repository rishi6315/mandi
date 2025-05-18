import { Component } from '@angular/core';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent {
  isVerified = false;
  selectedState = '';
  selectedProduct = '';
  productPrice: number | null = null;
  mobileNumber = '';
  
 constructor() {
    this.isVerified = false;
    this.selectedState = '';
    this.selectedProduct = '';
    this.productPrice = null;
    this.mobileNumber = '';  
    alert('Product entry cancelled!');
  }
  

  cancelProduct() {
                                  
    
  }

}
