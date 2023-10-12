import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
    datasources: {
      db: {
        url: 'mysql://root:root@localhost:3306/crud',
      },
    },
  });
export class PrismaService {
  constructor() {}
  user = prisma.user;
}
