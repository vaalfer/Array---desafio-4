const array = [

    {   
        name: "TinyHouse",
        description: "Menos es más",
        src: "assets\img\2-conoces-tendencia-tiny-houses-cama.jpg" ,
        rooms: 2,
        m2: 20,
    },

    {   
        name: "Container House",
        description: "Autonomía y sustentabilidad en un solo lugar",
        src: "assets\img\iStock_1133768876.0.jpg",
        rooms: 2,
        m2: 80,
    },

    {   
        name: "Loft en Viña del mar",
        description: "Bello loft, estilo moderno",
        src: "assets\img\feature_-_CMCa_Loft_Holesovice_BoysPlayNice_04.jpg",
        rooms: 1,
        m2: 15,
    },

    {   
        name: "Departamento",
        description: "Departamento con azotea, frente a un parque ¿algo mejor?",
        src: "assets\img\414b49b66b0c1795c4a16681cda9abd4.jpg" ,
        rooms: 3,
        m2: 150,
    },

    {   
        name: "Departamento antiguo",
        description: "Revive los años de historia de este edificio fundado en 1850",
        src: "assets\img\depto antiguo.jpg",
        rooms: 3,
        m2: 120,
    },

    {   
        name: "Casa en la ciudad",
        description: "¿Preparade para tu nueva vida residencial?",
        src: "assets\img\casa ciudad.jpg",
        rooms: 4,
        m2: 150,
    }
]

const btn = document.querySelector("#filterBtn")
const min = document.querySelector("#mininput")
const max = document.querySelector("#maxinput")
const room = document.querySelector("#roominput")
const inmuebles = document.querySelector(".inmueble")

function Counter(contador){
    let count = document.querySelector("#counter").innerHTML = contador;
}

function carga() {
    inmuebles.innerHTML = "";
    for (const bienraiz of array) {
        inmuebles.innerHTML += `
        <div class="propiedad">
        <div class="img" style="background-image: url('${bienraiz.src}')"></div>
        <section>
            <h5 >${bienraiz.name}</h5>
            <div class="d-flex justify-content-between">
                <p>${bienraiz.rooms}</p>
                <p>${bienraiz.m2}</p>
            </div>
            <p class="my-3">${bienraiz.description}</p>
            <button class="btn btn-info ">Ver más</button>
        </section>
    </div>
        `
    }
}

carga()
Counter(array.length)
//function buscar () 
//validar que esten los campos con datos 
//return
//recorrer la lista de deptos
//validamos si el depto cumple con los filtros
//usamos template con objeto del depto
//almacenamos el resultado en una variable que se incrementa 
//con los resultados que cumplen los filtros
//mostramos los resultados y el contador


//onclick="buscar"
//document.querySelector().addEventListener('click', buscar)

//function templateDepto(depto) return ´´template here´´