import { IBoard } from './../../shared/model/board';
import { Injectable } from '@angular/core';
import { winStates } from '../../data/static-data';

@Injectable()
export class GameService {

    hasAWinner (gameBoard: IBoard) {
        let found = false;

        // Optimization, only check win state if there are more then 5 filled tiles
        if (gameBoard.usedTiles > 4) {
            for (const winState of winStates) {
              found = this.checkBoardForWinner(gameBoard, winState);
              if (found) { break; }
            }
        }
        return found;
    }

    checkBoardForWinner (gameBoard: IBoard, winState: any) {
        const cell1 = winState[0];
        const cell2 = winState[1];
        const cell3 = winState[2];

        return (
          gameBoard.tiles[cell1[0]][cell1[1]].sign === gameBoard.tiles[cell2[0]][cell2[1]].sign &&
          gameBoard.tiles[cell1[0]][cell1[1]].sign === gameBoard.tiles[cell3[0]][cell3[1]].sign &&
          gameBoard.tiles[cell1[0]][cell1[1]].sign !== '' &&
          gameBoard.tiles[cell2[0]][cell2[1]].sign !== '' &&
          gameBoard.tiles[cell3[0]][cell3[1]].sign !== ''
        );
      }
}
