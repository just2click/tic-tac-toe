import { messages } from './../../data/static-data';

export interface IButton {
    title: string;
}

export class ButtonFactory {
    public createButton (title: string): IButton {
        return {
            title: title
        };
    }
}
