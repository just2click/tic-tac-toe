import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'board-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  @Input () x: number;
  @Input () y: number;

  @Input () sign: string;

  constructor() { }

  ngOnInit() {
    this.sign = '';
  }

}
