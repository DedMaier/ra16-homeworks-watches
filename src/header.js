import Shortid from "shortid"

export default function Header({onButtonClick}) {

    function onClick() {
        const timeZone = document.getElementsByClassName('time-zone')[0]
        const offset = document.getElementsByClassName('offset')[0]
        onButtonClick(timeZone.value, offset.value, Shortid.generate())
    }

    return (<div className="header">
        <div className="column">
            <span> Название </span>
            <input className={"time-zone"} type="text"/>
        </div>
        <div className="column">
            <span> Временная зонна </span>
            <input className={"offset"} type="text"/>
        </div>

        <button onClick={onClick}> Добавить</button>
    </div>)
}