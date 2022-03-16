import {Component, Input, OnInit} from '@angular/core';
import {BookModel} from '../../book.model';
import {ShopService} from '../../shop.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() selectedBook: BookModel;
  constructor(public shopService: ShopService) { }

  ngOnInit(): void {
  }

  addBook(booktoAdd: BookModel) {
    this.shopService.addBook(booktoAdd);
  }
}
