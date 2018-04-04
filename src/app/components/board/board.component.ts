import { IBoard } from './../../../../shared/model/board';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITile } from '../../../../shared/model/tile';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  private lastTileClicked: ITile;
  @Input () board: IBoard;
  @Input () gameOn: boolean;
  
  @Output() tileClicked: EventEmitter<ITile> = new EventEmitter<ITile>();
  
  constructor() { }

  ngOnInit() {
  }

  onTileClick (tile: ITile) {
    if (this.gameOn) {
      if (tile.sign === '') {
        this.lastTileClicked = tile;
        this.tileClicked.emit(tile);
      }      
    }
  }
}
