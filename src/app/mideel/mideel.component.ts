import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mideel',
  templateUrl: './mideel.component.html',
  styleUrls: ['./mideel.component.css']
})
export class MideelComponent {

  constructor(private readonly router:Router){
  }
  
  gotoLogin(){
    this.router.navigate(['login']);
  }
}
