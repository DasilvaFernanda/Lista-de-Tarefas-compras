function adicionar() {
    let text = document.getElementById("texto").value;

    if (text.trim() !== "") {
        let li = document.createElement("li");
        li.textContent = text;
        document.getElementById("lista").appendChild(li);
        document.getElementById("texto").value = "";
    } else {
        alert("Por favor, insira algum texto.");
    }
}
