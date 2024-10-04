// src/auth/jwt-payload.interface.ts
export interface JwtPayload {
    username: string;
    sub: number; // Ou string, dependendo do tipo do seu ID
    roles: string[]; // As roles do usuário
  }
  