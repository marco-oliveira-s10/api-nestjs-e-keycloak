// src/products/product.module.ts

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { JwtAuthGuard } from 'src/auth/JwtAuthGuard';
import { RolesGuard } from 'src/auth/RolesGuard';

@Module({
  imports: [
    JwtModule.register({
      secret: 'your-secret-key', // Utilize uma chave secreta forte e mantenha-a segura
      signOptions: { expiresIn: '1h' }, // Tempo de expiração do token
    }),
  ],
  controllers: [ProductController],
  providers: [ProductService, JwtAuthGuard, RolesGuard], // Registrando os guards como provedores
})
export class ProductModule {}
