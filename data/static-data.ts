import { IMessage } from './../shared/model/message';

export const winStates = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],

    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 0], [1, 0], [2, 0]],

    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]]
];

export const messages: IMessage = {
    'start': 'Start a new game',
    'player_1_turn': 'Player one turn',
    'player_2_turn': 'Player two turn',
    'player_1_win': 'Player one win',
    'player_2_win': 'Player two win',
    'tie': 'Tie, no one wins'
};
