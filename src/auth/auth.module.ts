import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

import { PassportModule } from '@nestjs/passport';
import { JwtAuthGuard } from './JwtAuthGuard';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'your-secret-key',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, JwtStrategy, JwtAuthGuard],
  exports: [JwtModule, JwtAuthGuard],
})
export class AuthModule { }
