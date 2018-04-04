import { messages } from './../../../../data/static-data';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'messages-bar',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit, OnChanges {
  private message: string = messages['empty'];

  @Input() messageKey: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges (changes: SimpleChanges) {
    if (changes.messageKey.currentValue !== changes.messageKey.previousValue) {
      this.message = messages[changes.messageKey.currentValue];
    }
  }

}
