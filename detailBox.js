const kubtoron = document.getElementById("kubtoron");
const oneMoreStep = document.getElementById("oneMoreStep");
const checkerGame = document.getElementById("checkerGame");
const protein = document.getElementById("protein");
const webBody = document.getElementsByTagName("body")[0];
let opening_box;

kubtoron.addEventListener("click", function () {
    open("kubtoron_detail", "kubtoron_close");
});

oneMoreStep.addEventListener("click", function () {
    open("oneMoreStep_detail", "oneMoreStep_close");
});

checkerGame.addEventListener("click", function () {
    open("checkerGame_detail", "checkerGame_close");
});

protein.addEventListener("click", function(){
    open("protein_detail", "protein_close");
});

function open(id, closee_btn) {
    opening_box = document.getElementById(id);
    opening_box.style.display = "block";
    webBody.style.overflowY = "hidden";

    document.getElementById(closee_btn).addEventListener("click", function () {
        opening_box.style.display = "none";
        webBody.style.overflowY = "scroll";
    });
}