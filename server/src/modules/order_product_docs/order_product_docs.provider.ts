import { ORDERPRODUCTDOCS_REPOSITORY } from '../../core/constants';
import { OrderProductDocs } from './order_product_docs.entity';

export const orderProductDocsProvider = [
  {
    provide: ORDERPRODUCTDOCS_REPOSITORY,
    useValue: OrderProductDocs,
  },
];