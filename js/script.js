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
    let sinal = true
    const text = document.querySelectorAll(".mvv p")
    for(let index = 0; index < mvv.length; index++){
        mvv[index].addEventListener("click", function(){
            switch (index){
                case 0:
                    text[0].classList.toggle("none")
                    text[1].classList.remove("none")
                    text[2].classList.remove("none")
                    break
                case 1:
                    text[1].classList.toggle("none")
                    text[0].classList.remove("none")
                    text[2].classList.remove("none")
                    break
                case 2:
                    text[2].classList.toggle("none")
                    text[1].classList.remove("none")
                    text[0].classList.remove("none")
                    break
            }
            if(sinal == true){
                mais[index].innerHTML = "-"
                sinal = false
                console.log(sinal);
            }else{
                mais[index].innerHTML = "+"
                sinal = true
            }
        })
    }
    console.log(sinal);
}

missaoVisaoValores()
menuNavBar()