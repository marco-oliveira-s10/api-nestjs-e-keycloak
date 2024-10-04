import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

import * as jwksRsa from 'jwks-rsa';
import { PassportModule } from '@nestjs/passport';
import { JwtAuthGuard } from './JwtAuthGuard';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'your-secret-key', // Pode ser uma chave forte ou deixar em branco se estiver usando `secretOrKeyProvider` no Strategy
      signOptions: { expiresIn: '1h' }, // Opções de assinatura do token
    }),
  ],
  providers: [AuthService, JwtStrategy, JwtAuthGuard],
  exports: [JwtModule, JwtAuthGuard],
})
export class AuthModule {}
