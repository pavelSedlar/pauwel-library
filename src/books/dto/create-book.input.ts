import { Field, InputType, Int } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';

@InputType()
export class CreateBookInput {
  @IsAlpha()
  @Field()
  title: string;

  @Field((type) => Int)
  authorId: number;
}
