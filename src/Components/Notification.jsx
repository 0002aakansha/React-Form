import React from 'react'

const Notification = (props) => {

    return (
        <>
            <div className={`notify ${props.msgType}`}>
                <h6>{props.msg}</h6>
            </div>
        </>
    )
}

export default Notification