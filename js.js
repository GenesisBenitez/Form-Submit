let name = document.getElementById("username");
console.log(username.value);
let password = document.getElementById("password");

let form = document.getElementById("loginForm");
form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(username.value);
    console.log(password.value);
    let error = document.getElementById("error");
    let success = document.getElementById("success");
    error.innerHTML = "";
    success.innerHTML = "";
        if(username.value == "Genesis" && password.value == "Genesis"){
            success.innerHTML = "Succesful login";
        }else{
            error.innerHTML = "Username and Password are incorrect";
        }
        

})