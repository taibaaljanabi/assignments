import React,{Component} from 'react'

const Badge =()=>{
    return (
        <div className='badge'>
            <h1> Name: {this.state.firstName}{this.state.lastName}</h1>
            <h1> Place of birth: {this.state.placeOfBirth}</h1>
            <h1> Phone: {this.state.phone}</h1>
            <h1> Email: {this.state.email}</h1>
           
            <h1> Favorit food: {this.state.favFood}</h1>
            <div className='textA'>{this.state.tellUs}</div>
        </div>
    )
}

export default Badge