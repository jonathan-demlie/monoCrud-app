import { PrismaService } from '../../prisma/prisma.service';
import { User } from '@prisma/client';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createUser(user: User): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        phoneNumber: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
