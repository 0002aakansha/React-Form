import React, { useState } from 'react'
import Input from './Input'
import Select from './Select'
import style from './Form.module.css'
import Notification from './Notification'

const Form = () => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [select, setSelect] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [Cpassword, setCpassword] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [message, setMessage] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        if (fname && lname && select && username && password && Cpassword && email && contact) {
            if (password === Cpassword) {
                localStorage.setItem('user', JSON.stringify({
                    firstName: fname,
                    lastName: lname,
                    department: select,
                    email,
                    contact
                }))
                setMessage({ type: 'success', msg: 'Form Submitted Successfully!' })
                setFname('')
                setLname('')
                setSelect('')
                setUsername('')
                setPassword('')
                setCpassword('')
                setEmail('')
                setContact('')
            }
            else setMessage({ type: 'err', msg: 'Password must match!' })
        }
        else setMessage({ type: 'err', msg: 'All fields are required!' })
    }

    return (
        <>
            {message.type === 'err' && <Notification msg={message.msg} msgType="error" />}

            {message.type === 'success' && <Notification msg={message.msg} msgType="success" />}

            <div className={style.box}>
                <h2 className='heading'>Register</h2>
                <form action="" onSubmit={submitHandler}>
                    <Input label='First Name' type='text' placeholder='First Name' value={fname} setValue={(e) => setFname(e.target.value)} />

                    <Input label='Last Name' type='text' placeholder='Last Name' value={lname} setValue={(e) => setLname(e.target.value)} />

                    <Select label='Select your Department/Office' options={['HR', 'IT', 'Sales']} value={select} setValue={(e) => setSelect(e.target.value)} />

                    <Input label='Username' type='text' placeholder='Username' value={username} setValue={(e) => setUsername(e.target.value)} />

                    <Input label='Password' type='password' placeholder='Password' value={password} setValue={(e) => setPassword(e.target.value)} />

                    <Input label='Confirm Password' type='password' placeholder='Confirm Password' value={Cpassword} setValue={(e) => setCpassword(e.target.value)} />

                    <Input label='E-mail Address' type='email' placeholder='E-mail Address' value={email} setValue={(e) => setEmail(e.target.value)} />

                    <Input label='Contact no' type='text' placeholder='Contact no' value={contact} setValue={(e) => setContact(e.target.value)} />

                    <div className={style.btnBox}>
                        <button type='submit' className={style.btn}>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form