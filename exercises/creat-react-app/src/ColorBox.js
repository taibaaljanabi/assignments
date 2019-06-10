import React from 'react'
import Color from './Color'



const colorInfo = [
    
{
background : 'blue',
title:"Box1" ,
subtitle="This is box 1",
info='It has background color'
},{
 background : 'red',
 title:"Box2" ,
 subtitle="This is box 1",
 info='It has background color'
},{
    background : 'green',
    title:"Box3" ,
    subtitle="This is box 1",
    info='It has background color' 
},{
 background : 'pink',
 title:"Box1" ,
 subtitle="This is box 1",
 info='It has background color'
}
]
function ColorBox (){
    const mappedColors = colorInfo.map((color) =>{
        return <Color colorObj = {color}/>
    })
}



export default ColorBox