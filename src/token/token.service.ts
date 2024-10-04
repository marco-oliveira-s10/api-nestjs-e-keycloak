import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class TokenService {
  constructor(private readonly httpService: HttpService) {}

  async getToken(user: any) {
    const formData = new URLSearchParams();
    formData.append('client_id', user.clientId);
    formData.append('username', user.username);
    formData.append('password', user.password);
    formData.append('grant_type', user.grantType);

    const result = await firstValueFrom(
      this.httpService.post('http://localhost:8080/realms/youtube/protocol/openid-connect/token', formData.toString(), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }),
    );

    return result.data;
  }
}
