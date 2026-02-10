let clickCount = 0;
const nonButton = document.getElementById("non");
const ouiButton = document.getElementById("oui");
const nonText = ["Non", "I ber son ??", "Eh bébé !???", "Je sais que tu blague !", "Tchiiiip"];

nonButton.addEventListener("click", function() {
    clickCount++;

    if (clickCount <= 4) {
        nonButton.innerHTML = nonText[clickCount];  // Changer le texte de "Non"
        ouiButton.style.fontSize = (24 + clickCount * 6) + "px";  // Augmenter la taille du bouton "Oui"
    }

    // À partir du 4ème clic, "Tchiiiip" va disparaître avec une transition
    if (clickCount === 4) {
        nonButton.classList.add("fade-out");  // Ajouter la classe CSS pour faire disparaître "Tchiiiip"
        setTimeout(() => {
            nonButton.style.display = 'none';  // Masquer "Non" après la transition
            ouiButton.style.fontSize = '80px'; // Agrandir considérablement "Oui"
        }, 1000);  // Attendre 1 seconde pour que la transition soit terminée
    }
});

ouiButton.addEventListener("click", function() {
    window.location.href = "page2.html";  // Rediriger vers la page suivante lorsque "Oui" est cliqué
});
