let modal = document.querySelector(".modal")
let modalOpenBtns = document.querySelectorAll(".getBtn")
let modalCloseBtn = document.querySelector('.closeModal')

for(let modalOpenBtn of modalOpenBtns) {
    modalOpenBtn.onclick = () => {
        modal.style.display = 'block'
    }
}

modalCloseBtn.onclick = () => {
    modal.style.display = 'none'
}