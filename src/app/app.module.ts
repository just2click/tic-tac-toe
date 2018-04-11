import { GameService } from './../services/game.service';
import { ButtonFactory } from './../../shared/model/button';
import { BoardFactory } from './../../shared/model/board';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MessagesComponent } from './components/messages/messages.component';
import { PlayerComponent } from './components/player/player.component';
import { BoardComponent } from './components/board/board.component';
import { TileComponent } from './components/tile/tile.component';
import { MainComponent } from './components/main/main.component';
import { PlayerFactory } from '../../shared/model/player';


@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    PlayerComponent,
    BoardComponent,
    TileComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    PlayerFactory,
    BoardFactory,
    ButtonFactory,
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
