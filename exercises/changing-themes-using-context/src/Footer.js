import React from 'react'
import {withTheme} from './ThemeProvider'

const Footer = (props) => {
    return (
        <div className= {props.light ? 'Footerl': 'Footerd'}>
       <h1>Footer</h1>

        </div>
    )

}
export default withTheme(Footer)
