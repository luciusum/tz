function myFunction() {
    var change = document.getElementById("clockForYet");
    if (change.innerHTML == "еще...")
    {
        change.innerHTML = "12:00";
    }
    else {
        change.innerHTML = "12:00";
    }
}

const btn = document.querySelectorAll(".clock");


btn.forEach(el => { el.addEventListener('click', () => {
    el.classList.toggle("clock_active")})
});
