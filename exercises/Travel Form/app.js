let form = document.travel

let userinfo = {}
form.addEventListener("submit", function (event) {
    event.preventDefault()

    const firstName = form.fname.value
    const lastName = form.lname.value
    const age = form.age.value
    const gender = form.gender.value
    const destination = form.Destination.value
    const diet = form.diet
    
    const arrdiet = []
    for (let i = 0; i < diet.length; i++) {
        if (diet[i].checked) {
            arrdiet.push(diet[i].value)

        }
      

    }

    alert(`First name: ${firstName}\n Last name: ${lastName}\n Age: ${age}\n Gender: ${gender}\n Destination: ${destination}\n Deit:${arrdiet}\n `)


})