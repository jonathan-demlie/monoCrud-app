"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const user_service_1 = require("./user.service");
let UsersController = class UsersController {
    constructor(prisma, userService) {
        this.prisma = prisma;
        this.userService = userService;
    }
    async create(user) {
        try {
            const createdUser = await this.userService.createUser(user);
            return createdUser;
        }
        catch (error) {
            throw new Error('Error creating user: ' + error.message);
        }
    }
    async findAll() {
        try {
            const users = await this.prisma.user.findMany();
            return users;
        }
        catch (error) {
            throw new Error('Error fetching users: ' + error.message);
        }
    }
    async findOne(id) {
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
        }
        catch (error) {
            throw new Error('Error fetching user: ' + error.message);
        }
    }
    async update(id, user) {
        try {
            const userId = Number(id);
            const updatedUser = await this.prisma.user.update({
                where: { id: userId },
                data: user,
            });
            return updatedUser;
        }
        catch (error) {
            throw Error('Error updating user: ' + error.message);
        }
    }
    async remove(id) {
        try {
            const userId = Number(id);
            const deletedUser = await this.prisma.user.delete({
                where: { id: userId },
            });
            return deletedUser;
        }
        catch (error) {
            throw new Error('Error deleting user: ' + error.message);
        }
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "remove", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('api/v1/users'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, user_service_1.UserService])
], UsersController);
//# sourceMappingURL=users.controller.js.map