import React from 'react'
import style from './Form.module.css'

const Select = (props) => {
    return (
        <div className={style.inputBox}>
            <label htmlFor="">{props.label}</label>
            <select name="" id="" value={props.value} onChange={props.setValue}>
                <option value="">Select your Department/Office</option>
                {props.options.map((item, indx) => <option key={indx} value={item}>
                    {item}
                </option>)}
            </select>
        </div>
    )
}

export default Select