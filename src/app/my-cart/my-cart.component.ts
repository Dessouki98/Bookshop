import {Component, OnInit} from '@angular/core';
import {BookModel} from '../shop/book.model';
import {ShopService} from '../shop/shop.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  books: BookModel[] = [];
  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.books = this.shopService.cartBooks;
  }

  remove(book: BookModel) {
  }
}
