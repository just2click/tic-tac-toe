import { ITile } from './../../../shared/model/tile';
import { IButton } from './../../../shared/model/button';
import { IBoard } from './../../../shared/model/board';
import { IPlayer } from '../../../shared/model/player';

export interface IUiState {
    messageId: number;
    player1: IPlayer;
    player2: IPlayer;
    activePlayerId: number;
    board: IBoard;
    startButton: IButton;
    gameOn: boolean;
    hasWinner: boolean;
    boardSize: number;
}

export const BOARD_SIZE = 3;

export const INITIAL_UI_STATE: IUiState = {
    messageId: undefined,
    player1: setPlayer(1, 'one'),
    player2: setPlayer(2, 'two'),
    activePlayerId: undefined,
    board: setBoard(BOARD_SIZE),
    startButton: undefined,
    gameOn: false,
    hasWinner: false,
    boardSize: BOARD_SIZE
};

function setPlayer (id: number, name: string): IPlayer {
    return {
        id: id,
        name: name,
        sign: (id % 2) === 0 ? 'X' : 'O',
        tiles: []
    };
}

function setBoard(size: number): IBoard {
    const freshBoard: IBoard = {
        size: size,
        tiles: []
    };

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const tile: ITile = {
                x: i,
                y: j,
                sign: ''
            };

            freshBoard.tiles.push(tile);
        }
    }

    return freshBoard;
}
