import { PrismaService } from '../../prisma/prisma.service';
import { UserService } from './user.service';
export declare class UsersController {
    private prisma;
    private userService;
    constructor(prisma: PrismaService, userService: UserService);
    create(user: any): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        phoneNumber: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        phoneNumber: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        phoneNumber: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, user: any): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        phoneNumber: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        phoneNumber: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
