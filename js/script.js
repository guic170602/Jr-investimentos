const menuBar = document.getElementsByTagName("i")[0]
const navBar = document.querySelector("header nav")

menuBar.addEventListener("click", function() {
    navBar.classList.toggle("active")
})