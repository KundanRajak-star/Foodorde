import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {
food!:Foods
  carService: any;
  constructor( private activatedRoute:ActivatedRoute, private foodservice:FoodService,cartService:CartService,private router:Router) {
    activatedRoute.params.subscribe((params)=>{
      if (params['id'])
      this.food=foodservice.getFoodById(params['id'])
    })
   }

  ngOnInit(): void {
  }
addToCart(){
  this.carService.addToCart(this.food);
  this.router.navigateByUrl('/cart-page')
}
}
