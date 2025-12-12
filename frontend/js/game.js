ocument.getElementById("startBtn").addEventListener("click", () => {
    const name = document.getElementById("playerName").value.trim();

    if (name === "") {
        alert("Entre un nom avant de commencer !");
        return;
    }

    document.getElementById("output").innerText =
        "Bienvenue " + name + " ! Votre partie commence en 2000...";
});
