function menuNavBar() {
    const main = document.querySelector('main')
    const menuBar = document.getElementsByTagName("i")[0]
    const navBar = document.querySelector("header nav")
    menuBar.addEventListener("click", function() {
        navBar.classList.toggle("active")
        main.addEventListener('click', function() {
            if (navBar.classList.contains('active')) {
                navBar.classList.remove("active")
            }
        })
    })
}

menuNavBar()