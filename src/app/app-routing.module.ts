import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerComponent } from './seller/seller.component';
import { MideelComponent } from './mideel/mideel.component';
import { HederComponent } from './heder/heder.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: 'seller', component: SellerComponent },
  { path: 'home', component: MideelComponent },
  { path: 'login', component: HederComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
