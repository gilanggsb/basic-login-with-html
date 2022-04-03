document.addEventListener("DOMContentLoaded", fetchSessStorage());

function fetchSessStorage() {
    let token = sessionStorage.token;

    document.getElementById("token").innerHTML = "Your Token : " + token;
}