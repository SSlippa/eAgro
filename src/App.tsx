import React from 'react';
import './App.scss';
import AgroDropdown, {Group} from "./components/common/dropdown/dropdown";

function App() {
    const list: Group[] = [
        {
            items: [
                {label: 'Viljatootja AS', value: 'Viljatootja', selectable: true},
                {label: 'Tartu Agro OU', value: 'Tartu Agro', selectable: true}
            ]
        },
        {
            label: '',
            items: [
                {label: 'Get the mobile app', selectable: false, icon: 'pi pi-mobile', link: 'some link'},
                {label: 'Community', selectable: false, icon: 'pi pi-users', link: 'some link'},
                {label: 'Knowledge base', selectable: false, icon: 'pi pi-book', link: 'some link'},
            ]
        },
        {
            label: '',
            items: [
                {label: 'Settings', selectable: false, icon: 'pi pi-sliders-h', action: 'settings'},
                {label: 'Log out', selectable: false, icon: 'pi pi-sign-out', action: 'logout'}
            ]
        }
    ]

    return (
        <div className="App">
            <AgroDropdown groups={list}/>
        </div>
    );
}

export default App;
