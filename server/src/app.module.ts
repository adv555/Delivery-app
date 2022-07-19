import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
// import * as path from 'path';
// import { ServeStaticModule } from '@nestjs/serve-static';
import { SellerModule } from './seller/seller.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import { CouponModule } from './coupon/coupon.module';
import {
  GoogleRecaptchaModule,
  GoogleRecaptchaNetwork,
} from '@nestlab/google-recaptcha';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    GoogleRecaptchaModule.forRoot({
      secretKey: process.env.GOOGLE_RECAPTCHA_SECRET_KEY,
      response: (req) => req.headers.recaptcha,
      // skipIf: process.env.NODE_ENV !== 'production',
      network: GoogleRecaptchaNetwork.Recaptcha,
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
