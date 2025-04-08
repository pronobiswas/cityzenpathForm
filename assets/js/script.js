let phase1input = document.querySelectorAll("#phase1 .inputRow input");
console.log(phase1input);

phase1input.forEach((input) => {
    input.addEventListener("click", () => {
        console.log("heloo");
        
    });
    input.addEventListener("input", (e) => {
        console.log(e.target);
    });
})