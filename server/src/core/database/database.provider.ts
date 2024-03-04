import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants'
import { databaseConfig } from './database.config';
import { User } from 'src/modules/user/user.entity';
import { Order } from 'src/modules/order/order.entity';
import { Address } from 'src/modules/address/address.entity';
import { OrderDocument } from 'src/modules/order_document/order_document.entity';
import { OrderProduct } from 'src/modules/order_product/order_product.entity';
import { OrderProductDocs } from 'src/modules/order_product_docs/order_product_docs.entity';


export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV as any) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);

      sequelize.addModels([
        User,
        Order,
        Address,
        OrderDocument,
        OrderProduct,
        OrderProductDocs
      ]);

      await sequelize.sync();
      return sequelize;
    },
  },
];