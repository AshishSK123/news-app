import React from 'react'

export default function Alert(props) {

    return (
        <div className='my-2' style={{height:'50px'}}>
            {props.msg &&
            <div className="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Success</strong> : {props.msg}
            </div>}
        </div>
    )
}