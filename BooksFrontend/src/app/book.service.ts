import { Injectable } from '@angular/core';
import { Book } from './book.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url:string= 'https://localhost:44357/api/books'
  books:Book[];
  book:Book;
  title:string;
  

  constructor(private http:HttpClient) { }
  GetAllBooks(){
    this.http.get(this.url).toPromise().then(
      res=>{
        this.books = res as Book[];
      }
    )
  }
  postBook(){
    return this.http.post(this.url,this.book);
  }
  putBook(){
    return this.http.put(this.url + "/" + this.book.id,this.book);
  }
  deleteBook(id:number){
    return this.http.delete(this.url +"/"+ id);
  }
  SearchBook(title:string){
    this.books = this.books.filter(res=>
      { 
        return this.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase())
      });
    
      }
    
  }

