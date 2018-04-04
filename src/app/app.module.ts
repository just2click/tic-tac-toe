import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MessagesComponent } from './components/messages/messages.component';
import { PlayerComponent } from './components/player/player.component';
import { BoardComponent } from './components/board/board.component';
import { TileComponent } from './components/tile/tile.component';
import { MainComponent } from './components/main/main.component';
import { StoreModule } from '@ngrx/store';


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
    FormsModule,
    StoreModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
