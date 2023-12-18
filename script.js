const listeMots = ["Cacholot", "Pétunia", "Serviette"];

let score = 0;

let motUtilisateur = prompt("Entrez le mot : " + listeMots[0]);

if(motUtilisateur === listeMots[0]) {
    score += 1;
}

motUtilisateur = prompt("Entrez le mot : " + listeMots[1]); 

if(motUtilisateur === listeMots[1]) {
    score += 1;
}

motUtilisateur = prompt("Entrez le mot : " + listeMots[2] );

if (motUtilisateur === listeMots[2]) {
    score++;
}
console.log(score);
