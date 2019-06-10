let form = document.getElementById("airline-form");
let submit = document.getElementById("submit");
let query = document.querySelector;

function formAlert() {
    let firstName = form.first.value;
    let lastName = form.last.value;
    let age = form.age.value;
    let gender = form.gender.value;
    let location = form.location.value;
   let diet = [];
    if (form.elements["vegan"].checked) {
         diet.push(document.getElementById("vegan").value);
    }
     if (form.elements["gluten"].checked) {
        diet.push(document.getElementById("gluten").value);
    }
    if (form.elements["paleo"].checked) {
        diet.push(document.getElementById("paleo").value);
    }


   formAlert = alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}


submit.addEventListener("click", formAlert);