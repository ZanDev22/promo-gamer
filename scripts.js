let promos = JSON.parse(localStorage.getItem("promos")) || [];

const container = document.getElementById("container");

function save() {
    localStorage.setItem("promos", JSON.stringify(promos));
}

function render() {
    container.innerHTML = "";

    promos.forEach((p, index) => {
        const div = document.createElement("div");
        div.className = "promo";

        div.innerHTML = `
            <h2>${p.nome}</h2>
            <p class="price">${p.preco}</p>
            <p>Plataforma: ${p.plataforma}</p>
            <a href="${p.link}" target="_blank">Ver oferta</a>
            <br><br>
            <button onclick="removePromo(${index})">🗑️ Apagar</button>
        `;

        container.appendChild(div);
    });
}

function addPromo() {
    const nome = document.getElementById("nome").value;
    const preco = document.getElementById("preco").value;
    const plataforma = document.getElementById("plataforma").value;
    const link = document.getElementById("link").value;

    if (!nome || !preco || !plataforma) {
        alert("Preenche tudo aí 😄");
        return;
    }

    promos.push({ nome, preco, plataforma, link });

    save();
    render();

    document.getElementById("nome").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("plataforma").value = "";
    document.getElementById("link").value = "";
}

function removePromo(index) {
    promos.splice(index, 1);
    save();
    render();
}

render();