// ------------------------FOOTER SCRIPT (1)------------------------

let footerYear = document.getElementById("year");
let date = new Date();

footerYear.innerText = date.getFullYear();


// -------------------------FORM SCRIPT (2)-------------------------

let form = document.getElementById('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let phone = document.getElementById('email').value;
    let email = document.getElementById('number').value;
    let message = document.getElementById('message').value;

    if(firstName.length <= 3)
        firstName = "Guest";

    alert("Thank you " + firstName + " for contacting us. You'll get your response in a while :)"); 

    // console.log(firstName);
    // console.log(lastName);
    // console.log(email);
    // console.log(message);

    form.reset();
})