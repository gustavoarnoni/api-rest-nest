import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  async findAll(): Promise<Product[]> {
    return this.products;
  }

  findOne(id: number): Product {
    return this.products.find(product => product.id === id);
  }

  create(product: Omit<Product, 'id'>): Product {
    const newProduct = { ...product, id: this.products.length + 1 };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, productData: Partial<Product>): Product {
    const index = this.products.findIndex(product => product.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    const updatedProduct = { ...this.products[index], ...productData };
    this.products[index] = updatedProduct;
    return updatedProduct;
  }

  remove(id: number): void {
    const index = this.products.findIndex(product => product.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    this.products.splice(index, 1);
  }
}
