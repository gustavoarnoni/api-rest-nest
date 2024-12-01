import { Controller, Get, Post, Body, Param, Patch, Delete, UseInterceptors } from '@nestjs/common';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { ProductsService } from './products.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @UseInterceptors(CacheInterceptor)
  async findAll(): Promise<Product[]> {
    console.log('Fetching products from service...');
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Product {
    return this.productsService.findOne(+id);
  }

  @Post()
  create(@Body() product: Omit<Product, 'id'>): Product {
    return this.productsService.create(product);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() productData: Partial<Product>): Product {
    return this.productsService.update(+id, productData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    this.productsService.remove(+id);
  }
}
