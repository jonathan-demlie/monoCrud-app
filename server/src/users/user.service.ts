import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { User } from '@prisma/client';
import { validate } from 'class-validator';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(user: User) {
    const errors = await validate(user);

    if (errors.length > 0) {
      throw new Error('Validation failed: ' + errors.join(', '));
    }

    user.createdAt = new Date();


    return this.prisma.user.create({ data: user });
  }
}
