import { Component, OnInit, Input } from '@angular/core';
import { IPlayer } from '../../../../shared/model/player';

@Component({
  selector: 'player-tile',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input () player: IPlayer;

  constructor() { }

  ngOnInit() {
  }

}
