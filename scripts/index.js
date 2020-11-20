const buttonModal = document.querySelector('#button-modal');
const modal = document.querySelector('#myModal');
const closeButton = document.querySelector(".close");
const valide = document.querySelector("#submit");

let nom = document.querySelector("#nom");
let mail = document.querySelector("#email");

buttonModal.addEventListener('click', () => {
    modal.style.display = "block";
});


closeButton.addEventListener('click', () => {
    modal.style.display = "none";
})


window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

valide.addEventListener("click", () => {
    if (nom.value && mail.value) {
        alert("C'est bien enregistré ! Merci");
        modal.style.display = "none";
    } else {
        alert("Ne peut pas enregistrer, il manque des informations");
    }

})