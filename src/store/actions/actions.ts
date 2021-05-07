import ActionsType from './action-types';

export interface Action {
    type: string;
    payload: any;
}

export const changeCompany = (value: string): Action => ({
    type: ActionsType.CHANGE_COMPANY,
    payload: {
        value
    }
});
