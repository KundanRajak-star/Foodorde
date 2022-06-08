import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Foods{
    return this.getAll().find(food=>food.id==id)!
  }

  getAllFoodByTag(tag:string):Foods[]{

    return tag=="All"?
    this.getAll() :this.getAll().filter(food=>food.tags?.includes(tag))

  }
  getAllTag():Tag[]{
    return[
      {name: 'All', count:24},
      {name: 'StreetFood', count:5},
      {name: 'pizzaburgger', count:3},
      {name: 'Lunch', count:3},
      {name: 'SlowFood', count:2},
      {name: 'Hamburger', count:1},
      {name: 'fry', count:1},
      {name: 'Myfamily', count:4}
    ]

  }

  getAll():Foods[]{
    return[
      {
      id:1,
      name:'Street Food ',
      cookTime:'10-20',
      price:30,
      favorite:false,
      origins:['Italy'],
      star:4.5,
      imageUrl:'/assets/fig21.jpeg',
      tags:['fastfood','hotel']
     },
     {
      id:2,
      name:'pizza burgger',
      cookTime:'20-30',
      price:55,
      favorite:true ,
      origins:['France'],
      star:5,
      imageUrl:'/assets/fig2.jpeg',
      tags:['pizzaburgger']
     },
     {
      id:6,
      name:'French Fried',
      cookTime:'10-15',
      price:40,
      favorite:true,
      origins:['Bankok, France'],
      star:3.5,
      imageUrl:'/assets/fig6.jpeg',
      tags:['fry']
     
     },
     {
      id:4,
      name:'Fish',
      cookTime:'30-50',
      price:150,
      favorite:false,
      origins:['India'],
      star:4.5,
      imageUrl:'/assets/fig13.jpeg',
      tags:['SlowFood']
     },
     {
      id:5,
      name:'Mixed Salad',
      cookTime:'10-20',
      price:70,
      favorite:false,
      origins:['russia','pantok','mongolia'],
      star:4.5,
      imageUrl:'/assets/fig12.jpeg',
      tags:['Hamburger']
     },
     {
      id:3,
      name:'Bread Toast',
      cookTime:'10-20',
      price:20,
      favorite:false,
      origins:['germany','peris','japan'],
      star:2,
      imageUrl:'/assets/fig10.jpeg',
      tags:['StreetFood']
     },
    
     {
      id:7,
      name:'Gajer Halwa',
      cookTime:'10-30',
      price:35,
      favorite:true,
      origins:['India'],
      star:1,
      imageUrl:'/assets/fig14.jpeg',
      tags:['Lunch']
     
     },
     {
      id:8,
      name:'Idali',
      cookTime:'30-45',
      price:40,
      favorite:true,
      origins:['South india'],
      star:3,
      imageUrl:'/assets/fig15.jpeg',
      tags:['Lunch','hotel']
     
     },
     {
      id:9,
      name:'Chicken Soup',
      cookTime:'30-50',
      price:90,
      favorite:true,
      origins:['Bankok'],
      star:3.5,
      imageUrl:'/assets/fig16.jpeg',
      tags:['fLunch','hotel']
     
     },
     {
      id:10,
      name:'Biryani',
      cookTime:'20-30',
      price:78,
      favorite:true,
      origins:['Bankok'],
      star:5,
      imageUrl:'/assets/fig4.jpeg',
      tags:['StreetFood']
     
     },
     {
      id:11,
      name:' Jalebi',
      cookTime:'10-35',
      price:78,
      favorite:true,
      origins:['Bankok'],
      star:4,
      imageUrl:'/assets/fig11.jpeg',
      tags:['StreetFood']
     
     },
     {
      id:12,
      name:'Fish',
      cookTime:'10-40',
      price:78,
      favorite:true,
      origins:['Bankok'],
      star:4.5,
      imageUrl:'/assets/fig5.jpeg',
      tags:['fast delevery','hotel']
     
     },
     {
      id:13,
      name:'Samber',
      cookTime:'10-40',
      price:78,
      favorite:true,
      origins:['Bankok'],
      star:4.5,
      imageUrl:'/assets/fig6.jpeg',
      tags:['fast delevery','hotel']
     
     },
     {
      id:14,
      name:'Samber',
      cookTime:'10-40',
      price:78,
      favorite:true,
      origins:['Bankok'],
      star:4.5,
      imageUrl:'/assets/fig7.jpeg',
      tags:['fast delevery','hotel']
     
     },
     {
      id:15,
      name:'Samber',
      cookTime:'10-40',
      price:78,
      favorite:true,
      origins:['Bankok'],
      star:4.5,
      imageUrl:'/assets/fig8.jpeg',
      tags:['fast delevery','hotel']
     
     },
     {
      id:16,
      name:'Anjali darling',
      cookTime:'10-40',
      price:887,
      favorite:true,
      origins:['Bankok'],
      star:5,
      imageUrl:'/assets/fig16.jpeg',
      tags:['fast delevery','hotel']
     
     },
     {
      id:17,
      name:'Chaumin',
      cookTime:'10-40',
      price:384,
      favorite:true,
      origins:['Bankok'],
      star:5,
      imageUrl:'/assets/fig17.jpeg',
      tags:['StreetFood']
     
     },
     {
      id:18,
      name:'Mutton',
      cookTime:'10-40',
      price:437,
      favorite:true,
      origins:['Bankok'],
      star:5,
      imageUrl:'/assets/fig18.jpeg',
      tags:['fast delevery','hotel']
     
     },
     {
      id:19,
      name:'Egg Omlet',
      cookTime:'5-15',
      price:283,
      favorite:true,
      origins:['Bankok'],
      star:5,
      imageUrl:'/assets/fig19.jpeg',
      tags:['StreetFood']
     
     },
     {
      id:20,
      name:'Veg Food',
      cookTime:'10-40',
      price:299,
      favorite:true,
      origins:['Bankok'],
      star:5,
      imageUrl:'/assets/fig20.jpeg',
      tags:['fast delevery','hotel']
     
     },
     {
      id:21,
      name:'Burger',
      cookTime:'10-40',
      price:378,
      favorite:true,
      origins:['Bankok'],
      star:5,
      imageUrl:'/assets/fig1.png',
      tags:['pizzaburgger']
     
     },
     {
      id:22,
      name:'Soya chunk',
      cookTime:'10-25',
      price:103,
      favorite:true,
      origins:['Bankok'],
      star:5,
      imageUrl:'/assets/fig22.jpeg',
      tags:['fast delevery','hotel']
     
     },
     {
      id:23,
      name:'Panir',
      cookTime:'10-40',
      price:1002,
      favorite:true,
      origins:['Bankok'],
      star:5,
      imageUrl:'/assets/fig23.jpeg',
      tags:['fast delevery','hotel']
     
     },
     {
      id:24,
      name:'KFC',
      cookTime:'30-55',
      price:1003,
      favorite:true,
      origins:['Bankok'],
      star:5,
      imageUrl:'/assets/fig24.jpeg',
      tags:['pizzaburgger']
     
     },


  
     {
      id:25,
      name:'Khusboo',
      cookTime:'30-55',
      price:1003,
      favorite:true,
      origins:['Smastipur'],
      star:5,
      imageUrl:'/assets/fig26.png',
      tags:['Myfamily']
     
     },
     {
      id:26,
      name:'Simple',
      cookTime:'30-55',
      price:1003,
      favorite:true,
      origins:['Drbhanga'],
      star:5,
      imageUrl:'/assets/fig27.png',
      tags:['Myfamily']
     
     },
     {
      id:27,
      name:'Bhanji',
      cookTime:'30-55',
      price:1003,
      favorite:true,
      origins:['Hajpurba'],
      star:5,
      imageUrl:'/assets/fig28.png',
      tags:['Myfamily']
     
     },
     {
      id:28,
      name:'Ansika ',
      cookTime:'30-55',
      price:1003,
      favorite:true,
      origins:['Hajpurba'],
      star:5,
      imageUrl:'/assets/fig29.png',
      tags:['Myfamily']
     
     },
    ]

  }
}


