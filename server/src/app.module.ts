import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import * as path from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { SellerModule } from './seller/seller.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import { CouponModule } from './coupon/coupon.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    // ServeStaticModule.forRoot({
    //   rootPath: path.resolve(__dirname, 'static'),
    // }),
    MongooseModule.forRoot(process.env.MONGO_DB),
    SellerModule,
    OrderModule,
    ProductModule,
    CouponModule,
  ],
})
export class AppModule {}
