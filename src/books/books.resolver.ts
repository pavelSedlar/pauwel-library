import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { Book } from './entities/book.entity';
import { BooksService } from './books.service';
import { CreateBookInput } from './dto/create-book.input';
import { Author } from 'src/authors/entities/author.entity';
import { AuthorsService } from 'src/authors/authors.service';

@Resolver((of) => Book)
export class BooksResolver {
  constructor(
    private booksService: BooksService,
    private authorsService: AuthorsService,
  ) {}

  @Query((returns) => Book)
  getBook(@Args('id', { type: () => Int }) id: number): Promise<Book> {
    return this.booksService.findOne(id);
  }

  @Query((returns) => [Book])
  books(): Promise<Book[]> {
    return this.booksService.findAll();
  }

  @ResolveField((returns) => Author)
  author(@Parent() book: Book): Promise<Author> {
    return this.booksService.getAuthor(book.authorId);
  }

  @Mutation((returns) => Book)
  createBook(
    @Args('createBookInput') createBookInput: CreateBookInput,
  ): Promise<Book> {
    return this.booksService.createBook(createBookInput);
  }
}
