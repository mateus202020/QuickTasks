const form = document.querySelector('.add-item');
const input = document.querySelector(".text_field");
const items = document.querySelector('.lista');
const alert = document.getElementById("alert");
const footer = document.querySelector("footer")
const btn_alert = document.getElementById('btn-remv');

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const valor = input.value;

    const item = document.createElement("div");
    item.innerHTML = `
            <div class="items">
                <input class="checkbox select" type="checkbox">
                <p>${valor}</p>
                <button class="btn-delete"><img src="./img/Frame (3).svg"></button>
            </div>
        `

    items.append(item);

    input.value = ""; // Limpa o campo de entrada após adicionar o item
    

    const btn_dlt = item.querySelector(".btn-delete");
    const div = item.querySelector(".items")
    
    
    btn_dlt.addEventListener('click', e => {

        footer.classList.add('alert')
        div.classList.add('delete')
        
    })

})

btn_alert.addEventListener('click', e => {
    footer.classList.remove('alert')
})