
const api_url = "https://reqres.in/api/login";
async function onLoginPressed() {
    let email = document.getElementById("username");
    let password = document.getElementById("password");
    console.log("username " + email.value + " password " + password.value);
    let request = await fetch(api_url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            "email": email.value,
            "password": password.value,
        }),
    });

    let response = await request.json();
    if (request.status == 200) {
        sessionStorage.token = response.token;
        window.location.href = "../html/homepage.html";
    } else {
        alert(response.error);
    }
}