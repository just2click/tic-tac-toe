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
}
