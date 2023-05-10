function RegisterForm(){
    text=document.getElementById('signup').innerHTML;
    if(text=="Sign Up"){
        document.getElementById('confirm-pass-div').style.display = 'initial';
        document.getElementById('login-title').innerText="Sign Up";
        document.getElementById('signup').innerHTML='Sign In';
    }
    else{
        document.getElementById('confirm-pass-div').style.display = 'none';
        document.getElementById('login-title').innerText="Sign In";
        document.getElementById('signup').innerHTML='Sign Up';
    }
}
function store(){

    var name = document.getElementById('username');
    var pwd = document.getElementById('password');
    var repwd = document.getElementById('repassword');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Please fill in email');

    }else if(pwd.value.length == 0){
        alert('Please fill in password');

    }else if(name.value.length == 0 && pwd.value.length == 0){
        alert('Please fill in email and password');
    }else if(!pwd.value.match(numbers)){
        alert('please add 1 number');

    }else if(!pwd.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pwd.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');

    }else if(pwd.value!=repwd.value){
        alert('please enter same password');

    }else{
        localStorage.setItem('username', name.value);
        localStorage.setItem('password', pwd.value);
        alert('Your account has been created');
    }
}

function login(){
    var storedName = localStorage.getItem('username');
    var storedPw = localStorage.getItem('password');
    var userName = document.getElementById('username');
    var userPw = document.getElementById('password');

    if(userName.value == storedName && userPw.value == storedPw){
        window.location.replace('homepage.html');
    }else{
        alert("Invalid Details")
    }
}

function check(){
    text=document.getElementById('signup').innerHTML;
    console.log(text)
    if(text=="Sign In"){
        store();
    }else{
        login();
    }
    return
}