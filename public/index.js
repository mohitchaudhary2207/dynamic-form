const Name = document.getElementById('inputname');
const lastname = document.getElementById('inputlastname');
const email = document.getElementById('inputEmail4');
const password = document.getElementById('inputPassword4');
const phone = document.getElementById('inputZip');
const car = document.getElementById('inputState');
const submit = document.getElementById('btn');
let validname = false;
let validlastname = false;
let validemail = false;
let validpassword = false;
let validcar = false;
let validphone = false;
$('#fail').hide();
$('#success').hide();

Name.addEventListener('blur', function () {
    let regex = /^[a-zA-Z]([a-zA-Z]){3,10}\s?$/;
    let str = Name.value;
    if (regex.test(str)) {
        Name.classList.remove('is-invalid')
        Name.classList.add('is-valid')
        validname = true;
    } else {
        Name.classList.add('is-invalid')
        validname = false;
    }

})

lastname.addEventListener('blur', function () {
    let regex = /^[a-z]([a-zA-Z]){2,11}\s?$/;
    let str = lastname.value;
    if (regex.test(str)) {
        lastname.classList.remove('is-invalid')
        lastname.classList.add('is-valid')
        validlastname = true;
    } else {
        lastname.classList.add('is-invalid')
        validlastname = false;
    }
})
email.addEventListener('blur', function () {
    let regex = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.([a-zA-Z]){2,8}$/;
    let str = email.value;
    if (regex.test(str)) {
        email.classList.remove('is-invalid')
        email.classList.add('is-valid')
        validemail = true;
    } else {
        email.classList.add('is-invalid')
        validemail = false;
    }
})
password.addEventListener('blur', function () {
    console.log('password is blur');
    let regex = /^[A-Z]([a-zA-Z0-9]+)[0-9]$/;
    let str = password.value;
    if (regex.test(str)) {
        password.classList.remove('is-invalid')
        password.classList.add('is-valid')
        validpassword = true;
    } else {
        password.classList.add('is-invalid')
        validpassword = false;
    }
})


phone.addEventListener('blur', function () {
    let regex = /^(\+91)?([0-9]){10}\s?$/;
    let str = phone.value;
    if (regex.test(str)) {
        phone.classList.remove('is-invalid')
        phone.classList.add('is-valid')
        validphone = true;
    } else {
        phone.classList.add('is-invalid')
        validphone = false;
    }
})


car.addEventListener('blur', function () {
    if (car.value === 'Choose your car') {
        regex = /kuch bhi(?!Choose your car)/;
    } else {
        regex = /[a-zA-Z](?!Choose your car)/;
    }
    let str = car.value;
    if (regex.test(str)) {
        car.classList.remove('is-invalid')
        car.classList.add('is-valid')
        validcar = true;
    } else {
        car.classList.add('is-invalid')
        validcar = false;
    }

})

submit.addEventListener('click', function (e) {
    e.preventDefault();
    if (validemail && validname && validphone && validcar && validlastname && validpassword) {
        e.preventDefault();
        show = document.getElementById('success');
        setTimeout(() => {
            show.classList.add('show');
        }, 500);
        setTimeout(() => {
            show.classList.remove('show');
        }, 5000);
        // fail.classList.remove('show');
        $('#fail').hide();
        $('#success').show();
    } else {
        fail = document.getElementById('fail');
        setTimeout(() => {
            fail.classList.add('show');
        }, 500);
        setTimeout(() => {
            fail.classList.remove('show');
        }, 5000);
        // show.classList.remove('show');        
        $('#success').hide();
        $('#fail').show();
    }
})

function myFunction() {
    var x = document.getElementById("inputPassword4");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}



