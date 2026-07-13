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

const themeBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

if (themeBtn) {
    themeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        localStorage.setItem(
            "theme",
            document.body.classList.contains("dark-mode") ? "dark" : "light"
        );
    });
}

const signupBtn = document.getElementById("login-button");

if (signupBtn) {

    if (localStorage.getItem("isLoggedIn") === "true") {
        signupBtn.textContent = "Log out";
    }

    signupBtn.addEventListener("click", function () {

        if (localStorage.getItem("isLoggedIn") === "true") {

            localStorage.removeItem("isLoggedIn");
            window.location.reload();

        } else {

            window.location.href = "login.html";

        }

    });

}