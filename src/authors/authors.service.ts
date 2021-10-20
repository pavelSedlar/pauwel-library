import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from './entities/author.entity';
import { CreateAuthorInput } from './dto/create-Author.input';
import { UpdateAuthorInput } from './dto/update-author.input';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author) private authorsRepository: Repository<Author>,
  ) {}

  async createAuthor(createAuthorInput: CreateAuthorInput): Promise<Author> {
    const newAuthor = this.authorsRepository.create(createAuthorInput);

    return this.authorsRepository.save(newAuthor);
  }

  async findAll(): Promise<Author[]> {
    return this.authorsRepository.find();
  }

  async findOne(id: number): Promise<Author> {
    return this.authorsRepository.findOneOrFail(id);
  }

  update(id: number, updateAuthorInput: UpdateAuthorInput) {
    return `This action updates a #${id} author`;
  }

  remove(id: number) {
    return this.authorsRepository.delete(id);
  }
}
