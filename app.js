
const modalWindow = document.querySelector(".modal-window");
const modalBtn = document.querySelector(".modal button");
const modals = document.querySelectorAll(".modal");
const cards = document.querySelectorAll(".card");
const hamburger = document.querySelector(".hamburger-menu")
const mobileNavBar = document.querySelector(".mobile-nav")
const barOne = document.querySelector(".bar-1")
const barTwo = document.querySelector(".bar-2")
const barThree = document.querySelector(".bar-3")

for(let i = 0; i < cards.length; i++){
   cards[i].addEventListener("click", function(){
    const currentModal = document.querySelector(`.modal--${i}`)
    modalWindow.classList.remove("hidden")
    currentModal.classList.remove("hidden")

   })
}


modalWindow.addEventListener("click", function(){
    modalWindow.classList.add("hidden")
    for(let modal of modals){
        modal.classList.add("hidden")
    }
})
for(let modal of modals){
    modal.addEventListener("click", function(e){
        e.stopPropagation()
    })
}

hamburger.addEventListener("click", ()=>{
    mobileNavBar.classList.toggle("display-nav")
    barOne.classList.toggle("bar-1-transform")
    barTwo.classList.toggle("bar-2-transform")
    barThree.classList.toggle("bar-3-transform")
})