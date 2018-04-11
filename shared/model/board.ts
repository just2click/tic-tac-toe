import { ITile } from './tile';

export interface IBoard {
    tiles: any;
    size: number;
    usedTiles: number;
}

export class BoardFactory {
    public createBoard(size?: number): IBoard {
        const newBoard: IBoard = {
            tiles: [],
            size: size ? size : 3,
            usedTiles: 0
        };

        for (let x = 0; x < newBoard.size; x++) {
            newBoard.tiles.push(new Array());
            for (let y = 0; y < newBoard.size; y++) {
                newBoard.tiles[x].push({
                    x: x,
                    y: y,
                    sign: ''
                });
            }
        }

        return newBoard;
    }
}
