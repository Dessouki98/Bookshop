
export class BookModel {
  public name: string;
  public author: string;
  public imgSrc: string;
  public pageCount: number;
  public discreption: string;
  constructor(name: string, author: string, imgSrc: string, pageCount: number, discreption: string) {
    this.name = name;
    this.author = author;
    this.imgSrc = imgSrc;
    this.pageCount = pageCount;
    this.discreption = discreption;
  }
}
