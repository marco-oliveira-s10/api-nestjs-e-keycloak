import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  list() {
    return { message: 'Método visivel para role USER e ADM' };
  }

  create() {
    return { message: 'Método visivel para role ADM' };
  }
}
