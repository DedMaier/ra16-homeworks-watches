import {useState} from "react";
import './App.css';
import Header from "./header";
import Clock from "./clock";

function App() {

    let [clocks, setClock] = useState([])

    function onButtonClick(timeZone, offset, key) {
        setClock(prev => [...prev, {timeZone: timeZone, offset: offset, key: key}])
    }

    function onCloseClick(key) {
        setClock(prev => prev.filter(clock => clock.key !== key))
    }

    return (
        <>
            <Header onButtonClick={onButtonClick}/>
            <div className="clocks">
                {
                    clocks.map(e => <Clock id={e.key}
                                           key={e.key}
                                           timeZone={e.timeZone}
                                           offset={e.offset}
                                           onCloseClick={onCloseClick}/>)
                }
            </div>
        </>
    );
}

export default App;
