console.log("hi");
const toogle = document.getElementById("toogle");
const body = document.querySelector("body");
const jumbo = document.getElementsByClassName("navbar");
const dynamic = document.getElementById("dynamic-text");
const skill_list = ["Web Developer", "Data Science", "Data Analysis", "Machine Learning", "Deep Learning", "Text Analysis", "Text Processing", "Data Processing"];

toogle.addEventListener("click", () => {
    var img_toogle = toogle.querySelector("img");
    if (body.classList.contains("c-light")){
        img_toogle.src = "images/moon.png";
        body.classList.remove("c-light");
        body.classList.add("c-dark");
        for (var i = 0; i < jumbo.length; i++) {
            jumbo[i].style.backgroundColor = '#264653';
            jumbo[i].style.color = "#FEFAE0";
        }
    }else{
        img_toogle.src = "images/sun.png";
        body.classList.add("c-light");
        body.classList.remove("c-dark");
        for (var i = 0; i < jumbo.length; i++) {
            jumbo[i].style.backgroundColor = "#FEFAE0";
            jumbo[i].style.color = '#264653';
        }
    }
});
