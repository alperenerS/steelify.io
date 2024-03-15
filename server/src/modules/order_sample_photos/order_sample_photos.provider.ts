import { ORDERSAMPLEPHOTOS_REPOSITORY } from '../../core/constants';
import { OrderSamplePhotos } from './order_sample_photos.entity';

export const orderSamplePhotosProvider = [
  {
    provide: ORDERSAMPLEPHOTOS_REPOSITORY,
    useValue: OrderSamplePhotos,
  },
];