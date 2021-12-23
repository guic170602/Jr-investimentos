function menuNavBar(){
    const menuBar = document.getElementsByTagName("i")[0]
    const navBar = document.querySelector("header nav")
    menuBar.addEventListener("click", function() {
        navBar.classList.toggle("active")
    })
}

function missaoVisaoValores(){
    const mvv = document.querySelectorAll(".mvv")
    const mais = document.querySelectorAll(".mais")
    const text = document.querySelectorAll(".mvv p")
    for(let index = 0; index < mvv.length; index++){
        mvv[index].addEventListener("click", function(){
            switch (index){
                case 0:
                    text[index].classList.toggle("none")
                    text[1].classList.remove("none")
                    text[2].classList.remove("none")
                    if(mais[index].textContent == "+"){
                        mais[index].innerHTML = "-"
                        console.log('-')
                    }else{
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
                    if(mais[index].textContent == "+"){
                        mais[index].innerHTML = "-"
                    }else{
                        mais[index].innerHTML = "+"
                    }
                    mais[0].innerHTML = "+"
                    mais[2].innerHTML = "+"
                    break
                case 2:
                    text[index].classList.toggle("none")
                    text[1].classList.remove("none")
                    text[0].classList.remove("none")
                    if(mais[index].textContent == "+"){
                        mais[index].innerHTML = "-"
                    }else{
                        mais[index].innerHTML = "+"
                    }
                    mais[1].innerHTML = "+"
                    mais[0].innerHTML = "+"
                    break
            }
        })
    }
}

missaoVisaoValores()
menuNavBar()