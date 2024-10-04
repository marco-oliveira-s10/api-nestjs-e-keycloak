// src/app.module.ts

import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module'; // Se você tiver um módulo de autenticação
import { ProductModule } from './product/product.module';
import { TokenModule } from './token/token.module'; // Importa o TokenModule

@Module({
  imports: [
    ProductModule, // Adicione seu ProductModule aqui
    AuthModule, // Adicione seu AuthModule se existir
    TokenModule, // Adicione o TokenModule
  ],
})
export class AppModule {}
