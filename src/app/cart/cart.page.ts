// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.page.html',
//   styleUrls: ['./cart.page.scss'],
// })
// export class CartPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartItem: number = 0;
  constructor() { }

  ngOnInit() {
    this.CartDetails() // get the data
    this.loadCart() // total product amount
    this.cartItemFunc()
  }

  getCartDetails: any = [];
  // get the details into localstorage
  CartDetails() {
    if (localStorage.getItem('localCart')) {          // localCartis a key
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart') || '{}');
    }
  }

  incQnt(prodId: any, qnt: any) {  // increase the qnt product 
    for (let i = 0; i < this.getCartDetails.length; i++) {   // this is forloop
      if (this.getCartDetails[i].prodId === prodId) {  // based on the prodId
        if (qnt != 5)
          this.getCartDetails[i].qnt = parseInt(qnt) + 1;  // increase the qnt max5
      }
    }
    localStorage.setItem('localCart', JSON.stringify(this.getCartDetails)); // localCart is akey ,getCartDetails is aarray
    this.loadCart()
  }

  decQnt(prodId: any, qnt: any) {   // decrease the qunt product
    for (let i = 0; i < this.getCartDetails.length; i++) {  // thi is for loop
      if (this.getCartDetails[i].prodId === prodId) { // decrease the product based on the id
        if (qnt != 1)
          this.getCartDetails[i].qnt = parseInt(qnt) - 1;  // decrease the product lessthan 1
      }
    }
    localStorage.setItem('localCart', JSON.stringify(this.getCartDetails)); // localCart is akey ,getCartDetails is aarray
    this.loadCart()
  }

  // total amount
  total: number = 0;
  //total function
  loadCart() {
    if (localStorage.getItem('localCart')) {
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart') || '{}');
      this.total = this.getCartDetails.reduce(function (acc: number, val: { price: number; qnt: number; }) {   // acc is a name,val isa rate
        return acc + (val.price * val.qnt);  // return the total amount
      }, 0);
    }
  }

  //remove all item
  removeall() {
    localStorage.removeItem('localCart');
    this.getCartDetails = [];
    this.total = 0;
  }
  // single delete
  singleDelete(cart: any) {
    console.log(cart);  // show in console
    if (localStorage.getItem('localCart')) {
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart') || '{}');  // get the details in localstorage
      for (let i = 0; i < this.getCartDetails.length; i++) {   // for loop
        if (this.getCartDetails[i].prodId === cart) {    //show based on id to delete product 
          this.getCartDetails.splice(i, 1);  // delete product one by one
          localStorage.setItem('localCart', JSON.stringify(this.getCartDetails)); // localcartis akey, getCartDetails is array
          this.loadCart();
          this.CartDetails();
          this.cartItemFunc()

        }
      }
    }
  }

  cartItemFunc() {
    if (localStorage.getItem('localCart') != null) {
      var cartCount = JSON.parse(localStorage.getItem('localCart') || '{}');
      this.cartItem = cartCount.length;

    }
  }
}