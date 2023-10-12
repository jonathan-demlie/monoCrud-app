import { Controller, Get, Post, Put, Delete, Param, Body, Header } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { UserService } from './user.service'; 

@Controller('api/v1/users')
export class UsersController {
  constructor(private prisma: PrismaService, private userService: UserService) {}

  @Post()
  async create(@Body() user) {
    try {
      const createdUser = await this.userService.createUser(user);
      return createdUser;
    } catch (error) {
      throw new Error('Error creating user: ' + error.message);
    }
  }

  @Get()
  async findAll() {
    try {
      const users = await this.prisma.user.findMany();
      return users;
    } catch (error) {
      throw new Error('Error fetching users: ' + error.message);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    try {
      const userId = Number(id);
      const user = await this.prisma.user.findUnique({
        where: {
          id: userId,
        },
      });
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    } catch (error) {
      throw new Error('Error fetching user: ' + error.message);
    }
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() user) {
    try {
      const userId = Number(id);
      const updatedUser = await this.prisma.user.update({
        where: { id: userId },
        data: user,
      });
      return updatedUser;
    } catch (error) {
      throw  Error('Error updating user: ' + error.message);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    try {
      const userId = Number(id);
      const deletedUser = await this.prisma.user.delete({
        where: { id: userId },
      });
      return deletedUser;
    } catch (error) {
      throw new Error('Error deleting user: ' + error.message);
    }
  }
}
