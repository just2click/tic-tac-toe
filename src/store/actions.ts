import { Action } from '@ngrx/store';

import { ITile } from './../../../shared/model/tile';
import { IPlayer } from './../../../shared/model/player';


export const MESSAGE_CHANGE = '[Messages] Change';
export const GAME_START = '[GAME] Start';
export const GAME_END = '[Game] End';
export const TILE_CLICKED = '[Tile] Clicked';
export const GAME_WIN = '[Game] Win';
export const GAME_TIE = '[Game] Tie';

export class GameStart implements Action {
    readonly type = GAME_START;

    constructor (public payload: null) {}
}

export class GameEnd implements Action {
    readonly type = GAME_END;

    constructor (public payload: null) {}
}

export class GameWin implements Action {
    readonly type = GAME_WIN;

    constructor (public payload: IPlayer) {}
}

export class GameTie implements Action {
    readonly type = GAME_TIE;

    constructor (public payload: null) {}
}

export class MessageChange implements Action {
    readonly type = MESSAGE_CHANGE;

    constructor (public payload: string) {}
}

export class TileClicked implements Action {
    readonly type = TILE_CLICKED;

    constructor (public payload: ITile) {}
}


