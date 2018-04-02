import { ITile } from './tile';

export interface IBoard {
    tiles: { [key: number]: ITile };
    size: number;
}
