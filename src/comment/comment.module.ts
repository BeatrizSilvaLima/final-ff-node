import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentSchema } from './comment.schema';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    // Cria uma tabela no BD com o nome comment e os valores do schema como colunas
    MongooseModule.forFeature([
      {
        name: 'Comment',
        schema: CommentSchema,
      },
    ]),
    UserModule
  ],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
