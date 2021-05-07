import React, {FC} from 'react';
import {Dropdown} from 'primereact/dropdown';
import {useDispatch, useSelector} from "react-redux";


import './dropdown.scss';
import {IState} from "../../../store/reducers/reducers";
import {changeCompany} from "../../../store/actions/actions";

interface DropdownProps {
    groups: Group[]
}

interface Item {
    label: string;
    value?: string;
    selectable: boolean;
    icon?: string;
    link?: string;
    action?: 'settings' | 'logout';
}

export interface Group {
    items: Item[],
    label?: string
}

const AgroDropdown: FC<DropdownProps> = ({ groups}) => {

    const dispatch = useDispatch();
    const selectedCompany = useSelector((state: IState) => state.selectedCompany);

    const optionTemplate = (option: Item): JSX.Element => {
        return (
            <div className={`option-item ${option.selectable ? 'selectable' : ''}`}>
                {option.icon ? <span className={`icon ${option.icon}`}/> : null}
                <div className={'label'}>{option.label}</div>
                <span className={'selected pi pi-check'}/>
            </div>
        );
    }

    const onChangeHandler = (e: { value: any, preventDefault: () => void }): void => {
        if (typeof (e.value) !== 'string') {
            if (e.value.link) {
                window.open(e.value.link);
            }
            if (e.value.action) {
                // do action
            }

        } else {
            dispatch(changeCompany(e.value));
        }
    }

    return (
        <>
            <Dropdown value={selectedCompany}
                      options={groups}
                      itemTemplate={optionTemplate}
                      scrollHeight={'400px'}
                      optionLabel="label"
                      onChange={onChangeHandler}
                      optionGroupChildren="items" optionGroupLabel="label"/>
        </>
    )


}

export default AgroDropdown;
