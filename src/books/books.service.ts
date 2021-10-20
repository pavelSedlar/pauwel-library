import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';
import { CreateBookInput } from './dto/create-book.input';
import { AuthorsService } from '../authors/authors.service';
import { Author } from '../authors/entities/author.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private booksRepository: Repository<Book>,
    private authorsService: AuthorsService,
  ) {}

  createBook(createBookInput: CreateBookInput): Promise<Book> {
    const newBook = this.booksRepository.create(createBookInput);

    return this.booksRepository.save(newBook);
  }

  findAll(): Promise<Book[]> {
    return this.booksRepository.find();
  }

  findOne(id: number): Promise<Book> {
    return this.booksRepository.findOneOrFail(id);
  }

  getAuthor(authorId: number): Promise<Author> {
    return this.authorsService.findOne(authorId);
  }
}
