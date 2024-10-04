import { Body, Controller, Post } from '@nestjs/common';
import { TokenService } from './token.service';

export class User {
  constructor(
    public username: string,
    public password: string,
    public clientId: string,
    public grantType: string,
  ) { }
}

@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) { }

  @Post()
  async token(@Body() user: User) {
    return await this.tokenService.getToken(user);
  }
}
