import { ITile } from './../../../../shared/model/tile';
import { messages, winStates } from './../../../../data/static-data';
import { ButtonFactory, IButton } from './../../../../shared/model/button';
import { IBoard, BoardFactory } from './../../../../shared/model/board';

import { IPlayer, PlayerFactory } from './../../../../shared/model/player';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private player1: IPlayer;
  private player2: IPlayer;

  private gameBoard: IBoard;
  private button: IButton;
  private gameOn = false;
  private activePlayer: IPlayer;
  private activePlayerId: number;
  private messageKey: string;

  constructor (private playerFactory: PlayerFactory,
    private boardFactory: BoardFactory,
    private buttonFactory: ButtonFactory) {

  }

  ngOnInit () {
    this.reset();
  }

  startGame() {
    this.reset();

    this.activePlayerId = (Math.floor((Math.random() * 2) + 1));
    this.activePlayer = this.activePlayerId === 1 ? this.player1 : this.player2;
    this.messageKey = `player_${this.activePlayer.id}_turn`;
    this.gameOn = true;
    this.button.title = 'Restart';
  }

  reset() {
    this.player1 = this.playerFactory.createPlayer('one');
    this.player2 = this.playerFactory.createPlayer('two');
    this.gameBoard = this.boardFactory.createBoard();
    this.button = this.buttonFactory.createButton('Start');
    this.gameOn = false;
  }

  onTileClick (tile: ITile) {
    this.tilePlayed(tile, this.activePlayer);
    // Switch players
    this.activePlayer = this.activePlayerId === 1 ? this.player2 : this.player1;
    this.activePlayerId = this.activePlayer.id;
    this.messageKey = `player_${this.activePlayer.id}_turn`;
  }

  tilePlayed (tile: ITile, player: IPlayer) {
    this.gameBoard.tiles[tile.x][tile.y].sign = player.sign;
    if (this.hasAWinner()) {
      this.gameOverWin(this.activePlayer);
    }
  }

  hasAWinner () {
    let found = false;

    for (const winState of winStates) {
      found = this.checkBoardForWinner(winState);
      if (found) { break; }
    }

    return found;
  }

  checkBoardForWinner (winState: any) {
    const cell1 = winState[0];
    const cell2 = winState[1];
    const cell3 = winState[2];

    return (
      this.gameBoard.tiles[cell1[0]][cell1[1]].sign === this.gameBoard.tiles[cell2[0]][cell2[1]].sign &&
      this.gameBoard.tiles[cell1[0]][cell1[1]].sign === this.gameBoard.tiles[cell3[0]][cell3[1]].sign &&
      this.gameBoard.tiles[cell1[0]][cell1[1]].sign !== ''
    );
  }

  gameOverWin (winner: IPlayer) {
    this.button.title = 'Start';
    this.messageKey = `player_${winner.id}_wins`;
    this.gameOn = false;
  }

  gameOverTie () {
    this.button.title = 'Start';
    this.messageKey = 'tie';
    this.gameOn = false;
  }
}
