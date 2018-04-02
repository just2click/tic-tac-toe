import { ITile } from './tile';

export interface IPlayer {
    id: number;
    name: string;
    sign: string;
    tiles: ITile[];
}
