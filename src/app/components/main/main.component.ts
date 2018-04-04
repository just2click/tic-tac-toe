import { IAppState } from './../../store/application-state';

import { IPlayer } from './../../../../shared/model/player';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private player1: IPlayer;
  private player2: IPlayer;
  private size: number;

  constructor(private store: IAppState) {
  }

  ngOnInit() {
  }
}
