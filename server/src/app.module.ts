import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './core/database/database.module';
import { OrderModule } from './modules/order/order.module';
import { AddressModule } from './modules/address/address.module';


@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    AuthModule,
    UserModule,
    DatabaseModule,
    OrderModule,
    AddressModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
