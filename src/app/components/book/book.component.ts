import { Component } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  books: Book[] = [];
  newBook: Book = { id: 0, title: '', author: '', year: 0, imageUrl: '', description: '', rating: 0 };  // Add rating to the new book

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    // Load the initial list of books from the service
    this.books = this.bookService.getBooks();
  }

  // Add a new book to the list
  addBook(): void {
    if (this.newBook.title && this.newBook.author && this.newBook.year && this.newBook.imageUrl && this.newBook.description && this.newBook.rating >= 1 && this.newBook.rating <= 5) {
      this.bookService.addBook(this.newBook);
      this.books = this.bookService.getBooks();  // Update the book list
      this.newBook = { id: 0, title: '', author: '', year: 0, imageUrl: '', description: '', rating: 0 };  // Reset the form
    }
  }

  // Remove a book from the list
  removeBook(id: number): void {
    this.bookService.removeBook(id);
    this.books = this.bookService.getBooks();  // Update the book list
  }

  // Convert rating to an array of stars for display
  getStars(rating: number): string[] {
    return new Array(5).fill('').map((_, index) => index < rating ? 'filled' : 'empty');
  }
}
