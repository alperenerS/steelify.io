import { ADDRESS_REPOSITORY } from '../../core/constants';
import { Address } from './address.entity';

export const addressesProvider = [
  {
    provide: ADDRESS_REPOSITORY,
    useValue: Address,
  },
];