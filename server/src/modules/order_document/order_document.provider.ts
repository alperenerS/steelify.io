import { ORDERDOCS_REPOSITORY } from '../../core/constants';
import { OrderDocument } from './order_document.entity';

export const orderDocsProvider = [
  {
    provide: ORDERDOCS_REPOSITORY,
    useValue: OrderDocument,
  },
];