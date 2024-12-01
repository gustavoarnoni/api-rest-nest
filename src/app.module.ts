import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    CacheModule.register({
      ttl: 10,
      max: 100,
    }),
    UsersModule,
    ProductsModule,
    AuthModule,
  ],
})
export class AppModule {}
