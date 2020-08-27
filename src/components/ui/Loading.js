import React from 'react'

export const Loading = () => {
    return (
        <div className="loading">
            <div>
                <img src="./images/favicon.png" style={{width: 100}} alt="Logo"></img>
                <div className="spinner">
                </div>
            </div>
        </div>
    )
}
