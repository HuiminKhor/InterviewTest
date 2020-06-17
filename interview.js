let pswInput = document.getElementById("psw")
let myInput = document.getElementById("newuser")
let length = document.getElementById("length");
let pswlimit = document.getElementById("pswlimit")


// validate username length
myInput.onkeyup = function() {
    if(myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
} 

// validate password characters
pswInput.onkeyup = function() {
    let password = /^[^\W_]{6,20}$/
    if(pswInput.value.match(password)){
    pswlimit.classList.remove("invalid");
    pswlimit.classList.add("valid")
    }
    else {
        pswlimit.classList.remove("valid");
        pswlimit.classList.add("invalid")
    }

}


