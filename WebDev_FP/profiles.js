document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("section div").forEach((div) => {
        const triviaButton = document.createElement("button");
        triviaButton.innerText = "Show Trivia";
        triviaButton.style.marginTop = "10px";
        triviaButton.style.cursor = "pointer";

        triviaButton.addEventListener("click", () => {
            const violinist = div.querySelector("h2").innerText;
            let trivia = "";

            if (violinist.includes("Lisa Batiashvili")) {
                trivia = "Lisa was the youngest ever competitor at the Sibelius Competition.";
            } else if (violinist.includes("David Oistrakh")) {
                trivia = "David once performed for Albert Einstein, who reported that he admired his artistry.";
            } else if (violinist.includes("Leonidas Kavakos")) {
                trivia = "Leonidas is renowned for his stunning speed and accuracy.";
            }

            alert(`${violinist}: ${trivia}`);
        });

        div.appendChild(triviaButton);
    });
});
