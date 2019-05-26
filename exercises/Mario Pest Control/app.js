let form = document.caughts
form.addEventListener("submit", function (e) {
    e.preventDefault()
    let a = form.bad1.value
    let b = form.bad2.value
    let c = form.bad3.value

    let result = a * 5 + b * 7 + c * 11


    document.getElementById('result').innerHTML = `<h3>${result}</h3>`

})