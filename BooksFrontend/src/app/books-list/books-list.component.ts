import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  title:string;
   constructor(public service:BookService) {}

   ngOnInit() {
    this.service.GetAllBooks();
   }
   fillData(item:Book){
   this.service.book.id = item.id;
   this.service.book.title = item.title;
   this.service.book.author = item.author;
   this.service.book.numberOfPages = item.numberOfPages;
   this.service.book.publishedAt = item.publishedAt;

   }
   Delete(id:number){
    this.service.deleteBook(id).subscribe(res=>
      {this.service.GetAllBooks()})
   }
   Search(title:string){
   return  this.service.SearchBook(title);
    
   }
}
