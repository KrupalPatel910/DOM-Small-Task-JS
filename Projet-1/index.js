var btn = document.querySelector("button")
var img = document.querySelector("#img")
var h = document.querySelector("h1")
var h3 = document.querySelector("h3")
var flag = 0

btn.addEventListener("click", function () {
    if (flag == 0) {
        btn.innerHTML = "Unfollow";
        img.style.backgroundImage = "url(/Projet-1/krupal2.jpg)"
        h.innerHTML = " Krupal Patel is your friend"
        h3.innerHTML = "Friends❤️"
        flag = 1;
    } else {
        btn.innerHTML = "Follow";
        img.style.backgroundImage = "url(IMG_3947.jpeg)"
        h.innerHTML = "Make a New Friend?"
        h3.innerHTML = "Stranger!!"


        flag = 0;
    }
})