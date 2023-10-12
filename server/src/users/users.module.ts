import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { PrismaModule } from '../../prisma/prisma.module';
import { UserService } from './user.service';

@Module({
  imports: [PrismaModule],
  providers: [UserService],
  controllers: [UsersController],
})
export class UsersModule {}