import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { ProductService } from './product.service';
import { SetMetadata } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/JwtAuthGuard';
import { RolesGuard } from 'src/auth/RolesGuard';


@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @SetMetadata('roles', ['USER', 'ADM']) // Permitir acesso para USER e ADM
    public async list(@Request() req) {
        return this.productService.list();
    }

    @Post()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @SetMetadata('roles', ['ADM']) // Apenas ADM pode acessar
    public async create(@Request() req) {
        return this.productService.create();
    }
}
