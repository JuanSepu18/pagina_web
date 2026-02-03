const reveals = document.querySelectorAll('.pilares-section, .planes-section, .equipo-section, .formulario-contacto-section, .validadores-section');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        console.log('Elemento visible');
      }
    });
  },
  {
    threshold: 0.2
  }
);

reveals.forEach(el => observer.observe(el));

const objetivosFinancieros = [
  "Comprar mi casa propia",
  "Comprar mi apartamento",
  "Dar la cuota inicial de una vivienda",
  "Pagar mi crédito hipotecario",
  "Comprar una vivienda VIS",
  "Remodelar mi casa",
  "Ampliar mi vivienda",
  "Comprar un lote",
  "Construir mi casa propia",
  "Pagar mi arriendo sin endeudarme",

  "Comprar un carro nuevo",
  "Comprar un carro usado",
  "Comprar una moto",
  "Pagar mi crédito vehicular",
  "Reparar mi vehículo",
  "Cambiar de carro",
  "Comprar una bicicleta eléctrica",

  "Pagar mis estudios universitarios",
  "Pagar un posgrado o maestría",
  "Pagar estudios en el exterior",
  "Pagar el colegio de mis hijos",
  "Pagar cursos técnicos",
  "Aprender inglés",
  "Obtener certificaciones profesionales",
  "Tomar cursos de programación",
  "Mejorar mi educación financiera",

  "Mantener a mi familia",
  "Cubrir los gastos de mi hogar",
  "Pagar mis servicios públicos",
  "Crear un fondo para mis hijos",
  "Planear mi boda",
  "Pagar mi luna de miel",
  "Apoyar económicamente a mis padres",

  "Crear mi propio negocio",
  "Invertir en un emprendimiento",
  "Contar con capital de trabajo",
  "Comprar maquinaria",
  "Abrir una tienda",
  "Expandir mi negocio",
  "Pagar nómina",
  "Formalizar mi empresa",
  "Invertir en marketing",

  "Pagar mis tarjetas de crédito",
  "Salir de mis deudas",
  "Unificar mis deudas",
  "Pagar un crédito de libre inversión",
  "Pagar deudas atrasadas",
  "Mejorar mi historial crediticio",
  "Evitar intereses",
  "Negociar mis deudas",

  "Crear mi fondo de emergencia",
  "Ahorrar mensualmente",
  "Ahorrar para imprevistos",
  "Ahorrar para mi futuro",
  "Aumentar mi capacidad de ahorro",
  "Ahorrar en dólares",
  "Ahorrar en CDT",
  "Ahorrar para gastos anuales",

  "Invertir en fondos de inversión",
  "Invertir en acciones",
  "Invertir en ETF",
  "Invertir en criptomonedas",
  "Invertir en bienes raíces",
  "Generar ingresos pasivos",
  "Diversificar mis inversiones",
  "Invertir a largo plazo",
  "Proteger mi capital",

  "Pagar mis gastos médicos",
  "Comprar un seguro de vida",
  "Comprar un seguro de salud",
  "Cubrir gastos de emergencias médicas",
  "Realizar tratamientos médicos",
  "Realizar cirugías",
  "Cuidar a adultos mayores",

  "Viajar por Colombia",
  "Viajar al exterior",
  "Tomar vacaciones familiares",
  "Realizar un viaje de estudios",
  "Viajar por Europa",
  "Viajar a Estados Unidos",
  "Viajar a la playa",
  "Mochilear",

  "Planear mi jubilación",
  "Ahorrar para mi vejez",
  "Complementar mi pensión",
  "Invertir para mi retiro",
  "Lograr mi independencia financiera",
  "Retirarme joven"
];


const input = document.getElementById('input-objetivo-financiero');

const lista = document.getElementById("autocomplete-list");

function mostrarResultados(resultados) {
  const maxResultados = 5;
  const contenedor = input.closest(".autocomplete");

  if (resultados.length === 0) {
    contenedor.classList.remove("open");
    return;
  }

  contenedor.classList.add("open");

  resultados.slice(0, maxResultados).forEach(texto => {
    const item = document.createElement("div");
    item.textContent = texto;
    item.classList.add("autocomplete-item");

    item.addEventListener("click", () => {
      input.value = texto;
      lista.innerHTML = "";
      contenedor.classList.remove("open");
    });

    lista.appendChild(item);
  });
}

document.addEventListener("click", (e) => {
  if (!e.target.closest(".autocomplete")) {
    lista.innerHTML = "";
    input.closest(".autocomplete").classList.remove("open");
  }
  
});

input.addEventListener("input",()=>{
  const valor = input.value.toLowerCase();

  lista.innerHTML = "";

  const contenedor = input.closest(".autocomplete");
  contenedor.classList.remove("open");

  if(valor === "") return;

  const resultados = objetivosFinancieros.filter(objetivo =>
    objetivo.toLowerCase().includes(valor)
  );

  mostrarResultados(resultados);
});

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = input.closest(".autocomplete");
  lista.innerHTML = "";
  contenedor.classList.remove("open");
  input.value = "";
});

document.addEventListener("DOMContentLoaded", () => {
  // Estado inicial limpio
  const contenedor = input.closest(".autocomplete");
  lista.innerHTML = "";
  contenedor.classList.remove("open");
  input.value = "";

  // Elegir objetivo aleatorio
  const objetivoAleatorio =
    objetivosFinancieros[
      Math.floor(Math.random() * objetivosFinancieros.length)
    ];

  // Efecto de escritura
  let index = 0;
  input.placeholder = "";

  const velocidad = 100; // ms por letra

  const escribir = () => {
    if (index < objetivoAleatorio.length) {
      input.placeholder += objetivoAleatorio.charAt(index);
      index++;
      setTimeout(escribir, velocidad);
    }
  };

  escribir();
});


