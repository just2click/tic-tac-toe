import { ITile } from './tile';

export interface IPlayer {
    id: number;
    name: string;
    sign: string;
    class: string;
    tiles: ITile[];
}

export class PlayerFactory {
    private lastId = 1;

    public createPlayer (name: string): IPlayer {
        const newPlayer: IPlayer = {
            id: this.lastId,
            name: name,
            class: this.lastId % 2 ? 'blue lighten-3' : 'green lighten-3',
            sign: this.lastId % 2 ? 'X' : 'O',
            tiles: []
        };

        this.lastId++;
        if (this.lastId === 3) { this.lastId = 1; }

        return newPlayer;
    }
}
