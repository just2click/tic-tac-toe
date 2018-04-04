import { IAppState } from './application-state';
import { IUiState, INITIAL_UI_STATE } from './ui-state';

export interface IAppState {
    uiState: IUiState;
}

export const INITIAL_APP_STATE: IAppState = {
    uiState: INITIAL_UI_STATE
};
