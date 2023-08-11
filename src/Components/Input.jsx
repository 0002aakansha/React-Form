import style from './Form.module.css'

const Input = (props) => {
    return (
        <div className={style.inputBox}>
            <label htmlFor="">{props.label}</label>
            <input type={props.type} placeholder={props.placeholder} onChange={props.setValue} autoComplete='true' value={props.value} />
        </div>
    )
}

export default Input