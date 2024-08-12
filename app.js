
const modalWindow = document.querySelector(".modal-window");
const modalBtn = document.querySelector(".modal button");
const modals = document.querySelectorAll(".modal");
const cards = document.querySelectorAll(".card");

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
