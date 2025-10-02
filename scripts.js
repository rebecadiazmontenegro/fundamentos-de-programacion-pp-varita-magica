// 1. Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.

const link = document.querySelectorAll("a");
for(let enlaces of link){
    enlaces.addEventListener('click',(a) => {
        a.preventDefault()
    })
}

//2.Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:
    //2.1 Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.

const img = document.querySelectorAll("img");
for(let imagenes of img) {
    imagenes.addEventListener('click',() => {
        imagenes.src = "assets/magic-3.gif"
    })
}

    //2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

const p = document.querySelectorAll("p");
for(let parrafos of p) {
        parrafos.style.color = "#b0bff5ff";
        parrafos.style.backgroundColor = "#000000ff";
    }

    //2.3 Bloques de article o section: Cambia el color de fondo.

const article = document.querySelectorAll("article")
const section = document.querySelectorAll("section")

for(let elemento of article) {
        elemento.style.backgroundColor = "#54bbffff";
    }

for(let elemento2 of section) {
        elemento2.style.backgroundColor = "#921313ff";
    }

//3.Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.

    //3.1 Imágenes: Cambia la imagen por el gif abracadabra.gif.

for(let imagenes of img) {
    imagenes.addEventListener('mouseover',() => {
        imagenes.src = "assets/abracadabra.gif"
    })
}

for(let imagenes of img) {
    imagenes.addEventListener('mouseout',() => {
        imagenes.src = "index_files/IMG_0545.jpg"
    })
}

//3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

for(let parrafos of p) {
    parrafos.addEventListener('mouseover', () => {
        parrafos.style.color = "#b0f5b3ff";
        parrafos.style.backgroundColor = "#20006aff";
    })
}

//3.3 Bloques de article o section: Color de fondo distinto al de párrafo.

for(let parrafos of p) {
    parrafos.addEventListener('mouseover', () => {
        parrafos.style.color = "#b0f5b3ff";
        parrafos.style.backgroundColor = "#20006aff";
    })
}
for(let elemento of article) {
    elemento.addEventListener('mouseover', () => {
        elemento.style.backgroundColor = "#deb605ff";
    })
}

for(let elemento2 of section) {
    elemento2.addEventListener('mouseover', () => {
        elemento2.style.backgroundColor = "#ff6229ff";
    })
}



