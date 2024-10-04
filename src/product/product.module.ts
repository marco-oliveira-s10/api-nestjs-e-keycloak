import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { JwtAuthGuard } from 'src/auth/JwtAuthGuard';
import { RolesGuard } from 'src/auth/RolesGuard';

@Module({
  imports: [
    JwtModule.register({
      secret: 'your-secret-key',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [ProductController],
  providers: [ProductService, JwtAuthGuard, RolesGuard],
})
export class ProductModule { }
