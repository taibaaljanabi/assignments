// You will have one section (<div>) for each math operation (so 3 sections) total
// Each section has two inputs to take the first and second numbers
// Each section will have a button to perform the operation
// You will inject the result into the HTML (not an alert)
// Your website will have 3 colors
// Your website will have proper padding/spacing to lay things out nicely

let form1 = document.addition

form1.addEventListener("submit", function(e){
    e.preventDefault()

    var value1 = (form1.num1.value)
    var value2 = (form1.num2.value)

    let result = +value1 + +value2
    let madLib = `${result}`
    document.getElementById('result1').innerHTML=`<h3>${madLib}</h3>`


})
let form2 = document.subtraction

form2.addEventListener("submit", function(e){
    e.preventDefault()

    var value1 = (form2.num1.value)
    var value2 = (form2.num2.value)

    let result = +value1 - +value2
    let madLib = `${result}`
    document.getElementById('result2').innerHTML=`<h3>${madLib}</h3>`
})
let form3 = document.multiplication

form3.addEventListener("submit", function(e){
    e.preventDefault()

    var value1 = (form3.num1.value)
    var value2 = (form3.num2.value)

    let result = +value1 * +value2
    let madLib = `${result}`
    document.getElementById('result3').innerHTML=`<h3>${madLib}</h3>`
})