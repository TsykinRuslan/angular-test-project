import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';


//import { Component } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})

//@Component({
  //selector: 'spy-parent',
 // templateUrl: './spy.component.html',
 // providers:  [LoggerService]
//})

export class CartService {
  items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
  
  constructor(
    private http: HttpClient,
    public logger: LoggerService
  ) { }
}