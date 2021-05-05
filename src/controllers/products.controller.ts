import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit: number = 100,
    @Query('offset') offset: number = 0
  ) {
    return `products: limit ${limit}, offset ${offset}`
  }

  @Get(':productId')
  getProduct(@Param() params: any) {
    return `product ${params.productId}`
  }

  @Get('branch-office/:branchOfficeId/category/:categoryId')
  getProductsByBranchOfficeIdAndCategoryId(
    @Param('branchOfficeId') branchOfficeId: string,
    @Param('categoryId') categoryId: string
  ) {
    return `getProductsByBranchOfficeIdAndCategoryId ${branchOfficeId} - ${categoryId}`;
  }
}
