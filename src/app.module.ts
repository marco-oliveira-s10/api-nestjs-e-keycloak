
import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { TokenModule } from './token/token.module';

@Module({
  imports: [
    ProductModule,
    AuthModule,
    TokenModule,
  ],
})
export class AppModule { }
