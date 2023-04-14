import React from 'react'

const Error = ({mensaje}) => {
    return (
        <div className="bg-red-100 text-red-900 my-2 p-2 border-red-200 border rounded-md" >
            <p>{mensaje}</p>
        </div>
    )
}

export default Error