let listeFilms = ["Star Wars", "Le Seigneur des Anneaux", "Le Hobbit", "Harry Potter"];
let ul = document.createElement("ul")
for (let i = 0; i < listeFilms.length; i++) {
    let li = document.createElement("li")
    li.textContent = listeFilms[i]
    ul.appendChild(li)

}

let zoneQuiz = document.querySelector(".zoneQuiz");
zoneQuiz.append(ul);

let baseLi = document.querySelectorAll("ul li");
for(let i= 0; i < baseLi.length; i++){
    let li = baseLi[i]
    li.addEventListener("click", function() {
        li.classList.add("selected");
    });
    li.addEventListener("click", function () {
            li.classList.remove("selected");


        let classeNameLi = document.getElementsByClassName("selected");
        console.log(classeNameLi);
    })


}



function showPopupInfo() {
    console.log("jai cliquer")
}
let btnPlusInfos = document.getElementById("btnPlusInfos");
btnPlusInfos.addEventListener("click", () => {
    showPopupInfo();
})



const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("email");
    console.log(email.value);
    console.log("Il n'ya pas eu de rechargement de page");
})




