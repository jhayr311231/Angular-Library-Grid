import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  // Array of books with image URL, description, and rating included
  private books: Book[] = [
    {
      id: 1,
      title: '1984',
      author: 'George Orwell',
      year: 1949,
      imageUrl: 'https://i.pinimg.com/474x/17/fb/e1/17fbe1b3096863d5af032ce42c80c79c.jpg',
      description: 'A dystopian novel set in a totalitarian society under constant surveillance.',
      rating: 4.7 // Added rating
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      year: 1960,
      imageUrl: 'https://i.pinimg.com/474x/de/3a/33/de3a3352cfa36ee2dcec88ba19ac8cb6.jpg',
      description: 'A novel about racial injustice in the Deep South during the 1930s.',
      rating: 4.8 // Added rating
    },
    {
      id: 3,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      year: 1925,
      imageUrl: 'https://i.pinimg.com/474x/e1/cf/5e/e1cf5e169b77685a85a6e99b949681b2.jpg',
      description: 'A story of wealth, love, and the American Dream set in the 1920s.',
      rating: 4.5 // Added rating
    },
    {
      id: 4,
      title: 'Moby-Dick',
      author: 'Herman Melville',
      year: 1851,
      imageUrl: 'https://i.pinimg.com/474x/2a/fb/78/2afb780cfed71aefa9f0a28b64201ddb.jpg',
      description: 'A sea captain’s obsession with hunting the white whale that once wounded him.',
      rating: 4.0 // Added rating
    },
    {
      id: 5,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      year: 1813,
      imageUrl: 'https://i.pinimg.com/474x/a1/97/0c/a1970cc8c9073c181b57cf15bd7837ed.jpg',
      description: 'A classic romance novel about Elizabeth Bennet and her journey to understanding love.',
      rating: 4.9 // Added rating
    },
    {
      id: 6,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      year: 1951,
      imageUrl: 'https://i.pinimg.com/474x/53/33/4f/53334fc80a12be02195f18d23f7ad46c.jpg',
      description: 'A coming-of-age story about Holden Caulfield, a teenager facing the difficulties of life.',
      rating: 4.3 // Added rating
    },
    {
      id: 7,
      title: 'War and Peace',
      author: 'Leo Tolstoy',
      year: 1869,
      imageUrl: 'https://i.pinimg.com/474x/59/1a/ff/591aff2e466579e0b57afebf11a61580.jpg',
      description: 'A historical novel set during the Napoleonic wars, focusing on Russian aristocracy.',
      rating: 4.2 // Added rating
    },
    {
      id: 8,
      title: 'The Odyssey',
      author: 'Homer',
      year: 800,
      imageUrl: 'https://i.pinimg.com/474x/39/18/2b/39182b5a70622766a73f6340865a8ade.jpg',
      description: 'An epic Greek poem that tells the story of Odysseus’ long journey home after the Trojan War.',
      rating: 4.6 // Added rating
    },
    {
      id: 9,
      title: 'Frankenstein',
      author: 'Mary Shelley',
      year: 1818,
      imageUrl: 'https://i.pinimg.com/474x/14/f7/7b/14f77bba717e72fcbdadf38b8979510c.jpg',
      description: 'A novel about a scientist who creates a living being that soon turns against him.',
      rating: 4.4 // Added rating
    },
    {
      id: 10,
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      year: 1937,
      imageUrl: 'https://i.pinimg.com/474x/72/10/ad/7210ad89e6f21b3d32fad4cc3c20a89b.jpg',
      description: 'The first book in the epic tale of Bilbo Baggins, his adventure to find treasure, and his encounter with dragons.',
      rating: 4.8 // Added rating
    },
  ];

  constructor() {}

  // Get the list of books
  getBooks(): Book[] {
    return this.books;
  }

  // Add a new book to the list
  addBook(book: Book): void {
    this.books.push(book);
  }

  // Remove a book from the list by ID
  removeBook(id: number): void {
    this.books = this.books.filter(book => book.id !== id);
  }
}
