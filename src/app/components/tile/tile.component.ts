import { ITile } from './../../../../shared/model/tile';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'board-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit, OnChanges {
  private _tileData: ITile;
  private _tileClass: string;

  @Input ('tileData')
  set tileData(value: ITile) {
    this._tileData = {
      sign: value.sign,
      x: value.x,
      y: value.y
    };
  }

  @Input() sign: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges (changes: SimpleChanges) {
    if (changes.sign && changes.sign.currentValue !== '') {
      this._tileClass = changes.sign.currentValue === 'X' ? 'player-2' : 'player-1';
    }
  }
}
