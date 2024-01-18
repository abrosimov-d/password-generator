export default function PasswordEditor(props) {
    return (
        <div className="password-editor">
            <div className="pe-line">
                <label className="pe-checkbox"><input type="checkbox"/><span class="checkable">Верхний регистр</span></label>
                <label className="pe-checkbox"><input type="checkbox"/><span class="checkable">Нижний регистр</span></label>
            </div>
            <div className="pe-line">
                <label className="pe-checkbox"><input type="checkbox"/><span class="checkable">Цифры</span></label>
                <label className="pe-checkbox"><input type="checkbox"/><span class="checkable">Символы</span></label>
            </div>
            <input readOnly value={props.password}></input>
            <button onClick={props.onClick}>Сгенерировать и скопировать</button>
        </div>
    )
}