import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food/food.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  cartService: any;

  constructor(private carService:CartService ,private foodService:FoodService) {
    let foods=foodService.getAll();
    this.cartService.addToCart(foods[1])
    this.cartService.addToCart(foods[2])
    this.cartService.addToCart(foods[4])
    this.cartService.addToCart(foods[6])

    this.setCart
   }

  ngOnInit(): void {
  }
  setCart(){
    this.cart=this.cartService.getCart();
  }
  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(CartItem.food.id);
    this.setCart();
  }
  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity=parseInt(quantityInString)
    this.cartService.changeQuantity(cartItem.food.id,quantity)
    this.setCart()
  }



}
