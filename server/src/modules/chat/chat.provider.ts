import { MESSAGE_REPOSITORY } from 'src/core/constants';
import { Message } from './chat.entity';

export const messageProvider = [
  {
    provide: MESSAGE_REPOSITORY,
    useValue: Message,
  },
];
