import { ORDERPRODUCT_REPOSITORY } from '../../core/constants';
import { OrderProduct } from './order_product.entity';

export const orderProductProvider = [
  {
    provide: ORDERPRODUCT_REPOSITORY,
    useValue: OrderProduct,
  },
];