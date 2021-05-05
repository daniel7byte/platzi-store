import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { HealthController } from './health/health.controller';
import { BrandsModule } from './brands/brands.module';

@Module({
  imports: [TerminusModule, BrandsModule],
  controllers: [AppController, ProductsController, HealthController],
  providers: [AppService],
})
export class AppModule {}
