const password = document.getElementById("password");
const eye = document.getElementById("eye");

if (eye) {
    eye.addEventListener("click", function () {

        if (password.type === "password") {

            password.type = "text";
            eye.classList.remove("ri-eye-line");
            eye.classList.add("ri-eye-off-line");

        } else {

            password.type = "password";
            eye.classList.remove("ri-eye-off-line");
            eye.classList.add("ri-eye-line");

        }

    });
}

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

const button = document.getElementById("logbutton");
const email = document.getElementById("email");

if (button) {
    button.addEventListener("click", function (e) {

        e.preventDefault();

        if (email.value && password.value) {

            localStorage.setItem("isLoggedIn", "true");
            window.location.href = "index.html";

        }

    });
}

tsParticles.load("points", {
    fullScreen: {
        enable: false
    },
    particles: {
        number: {
            value: 90
        },
        color: {
            value: "#ffffff"
        },
        size: {
            value: {
                min: 1,
                max: 3
            }
        },
        move: {
            enable: true,
            speed: 0.6
        },
        opacity: {
            value: 0.5
        }
    }
});