function menuNavBar() {
    const main = document.querySelector('main')
    const menuBar = document.getElementsByTagName("i")[0]
    const navBar = document.querySelector("header nav")
    const links = document.querySelectorAll('header ul li a')
    menuBar.addEventListener("click", function() {
        navBar.classList.toggle("active")
        main.addEventListener('click', function() {
            if (navBar.classList.contains('active')) {
                navBar.classList.remove("active")
            }
        })
        for (let index = 0; index < links.length; index++) {
            links[index].addEventListener('click', () => navBar.classList.remove("active"))
        }
    })
}

function missaoVisaoValores() {
    const mvv = document.querySelectorAll(".mvv")
    const mais = document.querySelectorAll(".mais")
    const text = document.querySelectorAll(".mvv p")
    for (let index = 0; index < mvv.length; index++) {
        mvv[index].addEventListener("click", function() {
            switch (index) {
                case 0:
                    text[index].classList.toggle("none")
                    text[1].classList.remove("none")
                    text[2].classList.remove("none")
                    if (mais[index].textContent == "+") {
                        mais[index].innerHTML = "-"
                        console.log('-')
                    } else {
                        mais[index].innerHTML = "+"
                        console.log('+')
                    }
                    mais[1].innerHTML = "+"
                    mais[2].innerHTML = "+"
                    break
                case 1:
                    text[index].classList.toggle("none")
                    text[0].classList.remove("none")
                    text[2].classList.remove("none")
                    if (mais[index].textContent == "+") {
                        mais[index].innerHTML = "-"
                    } else {
                        mais[index].innerHTML = "+"
                    }
                    mais[0].innerHTML = "+"
                    mais[2].innerHTML = "+"
                    break
                case 2:
                    text[index].classList.toggle("none")
                    text[1].classList.remove("none")
                    text[0].classList.remove("none")
                    if (mais[index].textContent == "+") {
                        mais[index].innerHTML = "-"
                    } else {
                        mais[index].innerHTML = "+"
                    }
                    mais[1].innerHTML = "+"
                    mais[0].innerHTML = "+"
                    break
            }
        })
    }
}

function scrol() {
    const inicio = document.querySelector('#linkInicio')
    const sectionInicio = document.querySelector('#inicio')
    inicio.addEventListener('click', () => window.scrollTo({ top: sectionInicio.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' }))
    const sobre = document.querySelector('#linkSobre')
    const sectionSobre = document.querySelector('#sobre')
    sobre.addEventListener('click', () => window.scrollTo({ top: sectionSobre.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' }))
    const produtos = document.querySelector('#linkProdutos')
    const sectionProdutos = document.querySelector('#produtos')
    produtos.addEventListener('click', () => window.scrollTo({ top: sectionProdutos.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' }))
    const parceiros = document.querySelector('#linkParceiros')
    const sectionParceiros = document.querySelector('#parceiros')
    parceiros.addEventListener('click', () => window.scrollTo({ top: sectionParceiros.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' }))
}

scrol()
missaoVisaoValores()
menuNavBar()