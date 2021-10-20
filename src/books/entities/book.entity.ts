import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Author } from '../../authors/entities/author.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Book {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field((type) => Int)
  authorId: number;

  @ManyToOne(() => Author, (author) => author.books)
  @Field((type) => Author)
  author: Author;
}
