import { Component, OnInit, Input } from '@angular/core';
import { ITile } from '../../../../shared/model/tile';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @Input () size: number;
  
  private tiles: ITile[];
  private x: number = 0;
  private y: number = 0;
  
  constructor() { }

  ngOnInit() {
    this.tiles = [];
    this.tiles.length = this.size * this.size;
  }

}
