import { IUiState } from './ui-state';
import { IStoreData } from './store-data';

export interface IAppState {
    uiState: IUiState;
    storeData: IStoreData;
}
