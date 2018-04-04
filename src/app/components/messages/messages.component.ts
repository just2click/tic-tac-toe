import { messages } from './../../../../data/static-data';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'messages-bar',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  private message: string = messages['empty'];

  @Input('messageKey')
  set messageKey (key: string) {
    this.message = messages[key];
  }

  constructor() { }

  ngOnInit() {
  }

}
