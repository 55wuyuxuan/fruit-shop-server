import { Controller, Get, Param, Query } from '@nestjs/common';
import { products, Product } from './products.data';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(@Query('category') category?: string): { code: number; msg: string; data: Product[] } {
    console.log('[Products] GET /api/products - Query:', { category });
    
    let result = products;
    if (category && category !== '全部') {
      result = products.filter(p => p.category === category);
    }
    
    console.log('[Products] Response:', { count: result.length });
    return { code: 200, msg: 'success', data: result };
  }

  @Get(':id')
  getProductById(@Param('id') id: string): { code: number; msg: string; data: Product | null } {
    console.log('[Products] GET /api/products/:id - Params:', { id });
    
    const product = products.find(p => p.id === parseInt(id));
    
    if (!product) {
      console.log('[Products] Product not found:', { id });
      return { code: 404, msg: 'Product not found', data: null };
    }
    
    console.log('[Products] Response:', product);
    return { code: 200, msg: 'success', data: product };
  }

  @Get('categories/list')
  getCategories(): { code: number; msg: string; data: string[] } {
    console.log('[Products] GET /api/products/categories/list');
    
    const categories = ['全部', ...new Set(products.map(p => p.category))];
    
    console.log('[Products] Response:', { categories });
    return { code: 200, msg: 'success', data: categories };
  }
}
