import {BookModel} from './book.model';
import {Injectable} from '@angular/core';
@Injectable()
export class ShopService {
  private books: BookModel[] = [
    new BookModel('Ulysses', ' James Joyce', 'https://upload.wikimedia.org/wikipedia/commons/c/c0/UlyssesCover.jpg',
      254, 'Joyce beschreibt im Ulysses in 18 Episoden einen Tag'),
      new BookModel('Klara and the Sun', '  Kazuo Ishiguro', 'https://upload.wikimedia.org/wikipedia/en/2/26/Klara_and_the_Sun_%28Kazuo_Ishiguro%29.png',
        145, 'Der Roman spielt in einer dystopischen Zukunft'),
      new BookModel('War and Peace', '  Leo Tolstoy', 'https://upload.wikimedia.org/wikipedia/commons/a/af/Tolstoy_-_War_and_Peace_-_first_edition%2C_1869.jpg',
        136, 'The novel chronicles the French invasion of Russia'),
      new BookModel('One Hundred Years of Solitude', ' Gabriel García Márquez', 'https://upload.wikimedia.org/wikipedia/en/a/a0/Cien_a%C3%B1os_de_soledad_%28book_cover%2C_1967%29.jpg',
        247, 'The magical realist style and thematic substance of One Hundred Years'),
      new BookModel('The Great Gatsby', ' F. Scott Fitzgerald', 'https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg',
        278, 'During World War II, the novel experienced an abrupt surge ')];
  getBooks() {
    return this.books;
  }
  getBook(index: number) {
    return this.books[index];
  }
}
