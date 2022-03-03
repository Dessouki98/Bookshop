import {BookModel} from './book.model';
import {Injectable} from '@angular/core';
@Injectable()
export class ShopService {
  private books: BookModel[] = [
    new BookModel('Ulysses', ' James Joyce', 'https://upload.wikimedia.org/wikipedia/commons/c/c0/UlyssesCover.jpg',
      254, 'Joyce beschreibt im Ulysses in 18 Episoden einen Tag'),
      new BookModel('Ulysses', ' James Joyce', 'https://upload.wikimedia.org/wikipedia/commons/c/c0/UlyssesCover.jpg',
        254, 'Joyce beschreibt im Ulysses in 18 Episoden einen Tag'),
      new BookModel('Ulysses', ' James Joyce', 'https://upload.wikimedia.org/wikipedia/commons/c/c0/UlyssesCover.jpg',
        254, 'Joyce beschreibt im Ulysses in 18 Episoden einen Tag'),
      new BookModel('Ulysses', ' James Joyce', 'https://upload.wikimedia.org/wikipedia/commons/c/c0/UlyssesCover.jpg',
        254, 'Joyce beschreibt im Ulysses in 18 Episoden einen Tag'),
      new BookModel('Ulysses', ' James Joyce', 'https://upload.wikimedia.org/wikipedia/commons/c/c0/UlyssesCover.jpg',
        254, 'Joyce beschreibt im Ulysses in 18 Episoden einen Tag')];
  getBooks() {
    return this.books;
  }
  getBook(index: number) {
    return this.books[index];
  }
}
