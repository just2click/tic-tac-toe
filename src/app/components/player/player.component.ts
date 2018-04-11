import { IPlayer } from './../../../../shared/model/player';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'player-tile',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, OnChanges {
  private amIActive = false;
  @Input () player: IPlayer;
  @Input () activePlayer: number;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges (changes: SimpleChanges): void {
    if (changes['activePlayer'] && this.player) {
      this.amIActive = changes['activePlayer'].currentValue === this.player.id;
    }
  }
}
