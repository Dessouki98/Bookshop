import { Component, OnInit } from '@angular/core';
import {ShopService} from '../shop.service';
import {BookModel} from '../book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  shopBooks: BookModel[];
  constructor(private shopService: ShopService) { }

  ngOnInit() {
    this.shopBooks = this.shopService.getBooks();
  }

}
