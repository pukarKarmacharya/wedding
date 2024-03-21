function addtocart(){
    alert("Added to Cart")
}

function validForm() {
    var fname = document.forms["messageForm"]["fname"].value;
    var lname = document.forms["messageForm"]["lname"].value;
    var email = document.forms["messageForm"]["email"].value;

    if (fname=="" || lname=="" || email==""){
        alert("Invalid")
    }else{
        alert("Thank you")
    }
}
