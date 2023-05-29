
registerAccount = () =>{
    let nameSurname = document.getElementById("nameSurname").value;
    let email = document.getElementById("email").value;
    let contact = document.getElementById("contact").value;
    let subjectChoice = document.getElementById("subjectChoice").value;

    if(document.getElementById("newsletter").checked){
        alert("Welcome" + " " + nameSurname + " " + "Thank you for your interest in " + subjectChoice + " We will contact you via the email provided: " + email + " " + "or alternatively on the phone number: " + " " + contact)
    }else{
        alert("Whoops something went wrong");
    }
}