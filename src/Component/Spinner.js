import React, { Component } from 'react'
import loadingGif from "./loading.gif"

export class Spinner extends Component {
    render() {
        return (
            <div className='text-center'>
                <img src={loadingGif} alt="loading spinner image" />
            </div>
        )
    }
}


export default Spinner