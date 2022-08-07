const lista = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      rooms: 5,
      m: 500
    }
  ];
  
  const btn = document.querySelector("#filterBtn")
  const inmuebles = document.querySelector(".propiedades")

  let html = "";

function counter(contador){
    let count = document.querySelector("#counter").innerHTML = contador;
}

const template = (bienraiz) => {
  return `
   <div class="propiedad">
       <div class="img" style="background-image: url('${bienraiz.src}')"></div>
       <section>
         <h5 >${bienraiz.name}</h5>
         <div class="d-flex justify-content-between">
           <p>${bienraiz.rooms}</p>
           <p>${bienraiz.m}</p>
         </div>
         <p class="my-3">${bienraiz.description}</p>
         <button class="btn btn-info ">Ver más</button>
       </section>
   </div>
   `
 }


const carga = () => {
    for (const bienraiz of lista) {
        inmuebles.innerHTML += template(bienraiz)
    }
    inmuebles.innerHTML += html
}

function search (min, max, room) {
  html = ""
  let searching = []

  for (const bienraiz of lista) {
      if (
        min <= bienraiz.m &&
        max >= bienraiz.m &&
        room <= bienraiz.rooms
      ) {
        html += template(bienraiz)
        searching.push(bienraiz)
      }
  }

  if (searching.length > 0) {
    inmuebles.innerHTML = html
    counter.innerHTML = searching.length
  } else {
    alert ("sin resultados")
  }
}

function validar () {

  const min = document.querySelector("#mininput").value
  const max = document.querySelector("#maxinput").value
  const room = document.querySelector("#roominput").value

      if (room != "" && min != "" && max != "") {
        search(min, max, room)
      } else {
        alert ("Rellena los datos")
      }
  
}



counter(lista.length)

document.querySelector("#filterBtn").addEventListener('click', validar)

window.onload = function () {
  carga()
}


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