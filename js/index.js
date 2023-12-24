let loginEmail = document.querySelector("#loginEmail")
let loginPassword = document.querySelector("#loginPassword")
let signUpName = document.querySelector("#signUpName")
let signUpEmail = document.querySelector("#signUpEmail")
let signUpPassword = document.querySelector("#signUpPassword")
let loginBtn = document.querySelector("#loginBtn")
let signupBtn = document.querySelector("#signupBtn")

function goToLog(){
    document.getElementById("signupBtn").innerHTML =window.location.assign("./index.html");
}
function goToHome(){
    document.getElementById("loginBtn").innerHTML =window.location.assign("./home.html");
}
var userDataArray = [];
if (localStorage.getItem('userInfo') == null) {
    userDataArray = []
} else {
    userDataArray = JSON.parse(localStorage.getItem('userInfo'))
}
                                                                                // CHECK LOGIN PAGE
function loginEmpty() {
    if (loginEmail.value == "" || loginPassword.value == "") {
        return false
    } else {
        return true
    }
}
                                                                                // LOGIN PAGE
function logIn(){
    if (loginEmpty() == false) {
        document.getElementById('loginValid').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    var email = loginEmail.value 
    var password = loginPassword.value
    for (var i = 0; i < userDataArray.length; i++) {
    if (userDataArray[i].email == email && userDataArray[i].password == password) {
        localStorage.setItem("firstName", userDataArray[i].name)
        goToHome()
    }else{
        document.getElementById('loginValid').innerHTML = '<span class="text-danger m-3">Enter correct Email and Password</span>'
    }
    }
}
                                                                                //CHECK SIGN UP PAGE
function signUpEmpty(){
    if (signUpName.value == "" || signUpEmail.value == "" || signUpPassword.value == "") {
        return false
    }else{
        return true
    }
}
function isEmailExist() {
    for (var i = 0; i < userDataArray.length; i++) {
        if (userDataArray[i].email.toLowerCase() == signUpEmail.value.toLowerCase()) {
            return false
        }
    }
}
                                                                                // SIGN UP PAGE
function signUp(){
    if (signUpEmpty() == false) {
        document.getElementById('signupValid').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    var signUpInfo = {
        name : signUpName.value ,
        email : signUpEmail.value ,
        password : signUpPassword.value
    }
    if (userDataArray.length == 0) {
        userDataArray.push(signUpInfo)
        localStorage.setItem('userInfo', JSON.stringify(userDataArray))
        document.getElementById('signupValid').innerHTML = '<span class="text-success m-3">Success</span>'
        return true
    }
    if (isEmailExist() == false) {
        document.getElementById('signupValid').innerHTML = '<span class="text-danger m-3">email already exists</span>'
    } else {
        userDataArray.push(signUpInfo)
        localStorage.setItem('userInfo', JSON.stringify(userDataArray))
        document.getElementById('signupValid').innerHTML = '<span class="text-success m-3">Success</span>'
        goToLog()
    }
}
                                                                                // HOME PAGE
var username = localStorage.getItem('firstName')
if (username) {
    document.getElementById('userName').innerHTML = "Welcome ," + username
}