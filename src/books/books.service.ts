import { Injectable } from '@nestjs/common';
import { Book } from './book.entity';

@Injectable()
export class BooksService {
  async findAll(): Promise<Book[]> {
    const book = new Book();
    book.id = 1;
    book.title = 'Mambo';

    return [book];
  }
}
