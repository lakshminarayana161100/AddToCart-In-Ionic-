import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxPage } from '../dialog-box/dialog-box.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cartItem:number = 0;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
   this.cartItemFunc()
  }
  cartItemFunc(){
    if(localStorage.getItem('localCart') != null){
    var cartCount = JSON.parse(localStorage.getItem('localCart') || '{}');
    this.cartItem = cartCount.length;
    console.log(this.cartItem)
    }
}
  products = [
    {
      prodId: 1,
      imgurl: 'assets/ha1.jpg',
      name: 'realme',
      category: 'mobile',
      price: 67,
      qnt: 1,

    },
     {
      prodId: 2,
      imgurl: 'assets/hanna.jpg',
      name: 'vivo',
      category: 'mobile',
      price: 37,
      qnt: 1
    }, {
      prodId: 3,
      imgurl: 'assets/ha3.jpg',
      name: 'Realme 5',
      category: 'mobile',
      price: 77,
      qnt: 1
    }, {
      prodId: 4,
      imgurl: 'assets/ha4.jpg',
      name: 'MotoG',
      category: 'mobile',
      price: 65,
      qnt: 1
    },
    {
      prodId: 5,
      imgurl: 'assets/hanna.jpg',
      name: 'vivo',
      category: 'mobile',
      price: 37,
      qnt: 1
    },
    {
      prodId: 6,
      imgurl: 'assets/ha3.jpg',
      name: 'Realme 5',
      category: 'mobile',
      price: 77,
      qnt: 1
    },
    {
      prodId: 7,
      imgurl: 'assets/ha4.jpg',
      name: 'MotoG',
      category: 'mobile',
      price: 65,
      qnt: 1
    },
    {
      prodId: 8,
      imgurl: 'assets/ha1.jpg',
      name: 'realme',
      category: 'mobile',
      price: 67,
      qnt: 1,
    },
    {
      prodId: 9,
      imgurl: 'assets/ha4.jpg',
      name: 'MotoG',
      category: 'mobile',
      price: 65,
      qnt: 1
    },
    {
      prodId: 10,
      imgurl: 'assets/hanna.jpg',
      name: 'vivo',
      category: 'mobile',
      price: 37,
      qnt: 1
    }
  ];


  inc(prod: any) {
    if (prod.qnt != 5) {
      prod.qnt += 1;
    }
  }

  dec(prod: any) {
    if (prod.qnt != 1) {
      prod.qnt -= 1;
    }
  }
   
  itemsCart: any = [];  // itemsCart is a global array
  addCart(category: any) {
    let cartDataNull = localStorage.getItem('localCart'); // cartDataNull is a variable , localCart is a key,
    if (cartDataNull == null) {
      let storeDataGet: any = []; // storeDataGet is a array
      storeDataGet.push(category); // push the category into localstorage
      localStorage.setItem('localCart',JSON.stringify(storeDataGet));  //localCart is key ,storeDataGet is To convert the stringify
    }
    else {
      var id = category.prodId;  // this is product id represented
      let index: number = -1;
      this.itemsCart = JSON.parse(localStorage.getItem('localCart') || '{}'); // 
      for (let i = 0; i < this.itemsCart.length; i++) {   // i is a loop vice (inc is the products)
        if (parseInt(id) === parseInt(this.itemsCart[i].prodId)) {    // In parseInt to store itemcart array in index
          this.itemsCart[i].qnt = category.qnt;  // this qnt is inc and dec the product
          index = i;
          break;  // to break the function (end)
        }
      }
      if (index == -1) {
        this.itemsCart.push(category);  // this line product item to push itemcart array
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart));  //
      }
      else {
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
      }
    }
       this.cartItemFunc()
  }

  // To store product details into cart

  // open the dailog box function
  openDialog(prod:any): void {
    this.dialog.open(DialogBoxPage, {
         width: '60%',
         height:'50%',
         data: prod 
       });
   }
}
