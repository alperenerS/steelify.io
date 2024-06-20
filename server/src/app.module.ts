import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './core/database/database.module';
import { OrderModule } from './modules/order/order.module';
import { AddressModule } from './modules/address/address.module';
import { OrderDocumentModule } from './modules/order_document/order_document.module';
import { LoggerMiddleware } from './middlewares/customLogger';
import { OrderProductModule } from './modules/order_product/order_product.module';
import { OrderProductDocsModule } from './modules/order_product_docs/order_product_docs.module';
import { OrderSamplePhotosModule } from './modules/order_sample_photos/order_sample_photos.module';
import { EmailSenderModule } from './modules/email-sender/email-sender.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { ChatModule } from './modules/chat/chat.module';


@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    MailerModule,
    AuthModule,
    UserModule,
    DatabaseModule,
    OrderModule,
    AddressModule,
    OrderDocumentModule,
    OrderProductModule,
    OrderProductDocsModule,
    OrderSamplePhotosModule,
    EmailSenderModule,
    ChatModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
