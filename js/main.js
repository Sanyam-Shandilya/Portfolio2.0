console.log("hi");
var toogle = document.getElementById("toogle");
var body = document.querySelector("body");

toogle.addEventListener("click", () => {
    var img_toogle = toogle.querySelector("img");
    if (body.classList.contains("c-light")){
        img_toogle.src = "images/moon.png";
        body.classList.remove("c-light");
        body.classList.add("c-dark");
    }else{
        img_toogle.src = "images/sun.png";
        body.classList.add("c-light");
        body.classList.remove("c-dark");
    }
    console.log(body.classList);
});