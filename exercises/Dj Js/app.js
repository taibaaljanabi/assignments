// Blue when the mouse hovers over the square
document.getElementById("DJBox").addEventListener("mouseover", function(){
    this.style.backgroundColor="blue"
})


// Red when the mouse button is held down over the square

document.getElementById("DJBox").addEventListener("mousedown", function(){
    this.style.backgroundColor="red"
})

// Yellow when the mouse button is let go over the square

document.getElementById("DJBox").addEventListener("mouseup", function(){
    this.style.backgroundColor="yellow"
})

// Green when the mouse is double clicked in the square

document.getElementById("DJBox").addEventListener("dblclick", function(){
    this.style.backgroundColor="green"
})

// Orange when the mouse scroll is used somewhere in the window (not just over the square).
window.addEventListener("scroll", function(){
    document.getElementById("DJBox").style.backgroundColor="orange"
})
