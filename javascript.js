const container = document.querySelector("#container");

function prompNum() {
    let numOfS = prompt("How many squares per side? Max: 100");
    for(let i = 1; i <= numOfS; i++) {
        let rows = document.createElement("div");
        rows.classList.add("rows");
        container.appendChild(rows);
        for(let i = 1; i <= numOfS; i++) {
            let squares = document.createElement("div");
            squares.classList.add("squares");
            rows.appendChild(squares);
            squares.addEventListener("mouseover", () => {
                squares.classList.add("touchedsquares");
            });
        };
    }
}

const button = document.querySelector("#button");
button.addEventListener("click", () => {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    prompNum();
});

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    window.location.reload();
});