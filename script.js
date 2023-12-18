const listeMots = ["Cacholot", "Pétunia", "Serviette"];

let score = 0;



for (let i = 0 ; i < listeMots.length; i++) {
    let motUtilisateur = prompt("Entrez le mot : " + listeMots[i]);
    if (motUtilisateur === listeMots[i]) {
        score++;
    }

}
console.log(score);
