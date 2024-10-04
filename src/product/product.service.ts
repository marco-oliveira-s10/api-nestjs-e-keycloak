import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  list() {
    return [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }]; // exemplo de produtos
  }

  create() {
    return { message: 'Product created' }; // lógica para criar um produto
  }
}
