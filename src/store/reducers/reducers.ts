import {Action} from "../actions/actions";
import ActionsType from '../actions/action-types';

export interface IState {
    selectedCompany: string;
}


export const initialState: IState = {
    selectedCompany: 'Viljatootja'
};

export const reducers = (state: IState = initialState, action: Action): IState => {
    console.log('action', action);
    switch (action.type) {
        case ActionsType.CHANGE_COMPANY:
            return {
                ...state,
                selectedCompany: action.payload.value
            };
        default:
            return state;
    }
}
