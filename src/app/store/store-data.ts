import { IMessage } from './../../../shared/model/message';
import { IPlayer } from '../../../shared/model/player';

export interface IStoreData {
    messages: { [key: number]: IMessage  };
    winingStates: any;
}
