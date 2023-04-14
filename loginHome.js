const login = document.querySelector(' .login');
login.onclick = (e) => {
    e.preventDefault();

    //catch the value which is typed user login page
    const emailAddress = document.getElementById("email").value;
    const passWord = document.getElementById("pass").value;

    //get value in localStorage which store user in registration
    const Email = localStorage.getItem("Email");
    const Password = localStorage.getItem("Password");

    if (emailAddress == "" && passWord == "") {
        swal("Oops...!", "Input field has no value", "error");

    } else {
        if (emailAddress == Email && passWord == Password) {
            swal("Good job!", "login succcessful!", "success");
        } else {
            swal("Oops...!", "Something is wrong", "error");
        }
        window.location.replace('home.html');
    }
    


}