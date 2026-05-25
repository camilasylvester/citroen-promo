const CONCESIONARIOS = {
  "CABA": {
    "Barracas": [
      { nombre: "Toulon", direccion: "Ituzaingo 545" }
    ],
    "Devoto": [
      { nombre: "La Voiture", direccion: "Coronel Ramon Lista 5050" }
    ],
    "Flores": [
      { nombre: "La Voiture", direccion: "Av. Rivadavia 7702" }
    ],
    "Mataderos": [
      { nombre: "Giama", direccion: "Juan B. Alberdi 5160" }
    ],
    "Palermo": [
      { nombre: "Avec Buenos Aires", direccion: "Lavalle 3593" }
    ],
    "Villa Ortuzar": [
      { nombre: "D'Arc", direccion: "Av. Triunvirato 3524" }
    ]
  },
  "Buenos Aires": {
    "Bahía Blanca": [
      { nombre: "Corcel", direccion: "J. Newbery esq. Alsina" }
    ],
    "Coronel Suarez": [
      { nombre: "Graff-Schwerdt", direccion: "Villegas 224" }
    ],
    "Junín": [
      { nombre: "Rodano", direccion: "Av. Circunvalación y Sadi Carnot" }
    ],
    "La Plata": [
      { nombre: "Esprit Pourtau", direccion: "Calle 531 Nro 2540 (entre calle 20 y 21)" },
      { nombre: "Pi Ingeniería", direccion: "Calle 13 entre Nº 363 e/ 528 y 529" }
    ],
    "Luján": [
      { nombre: "Automobiles Lyon", direccion: "Av. Carlos Pellegrini 943" }
    ],
    "Mar del Plata": [
      { nombre: "L'Effort", direccion: "Av. Constitución 7656 y Ruta 2" }
    ],
    "Necochea": [
      { nombre: "L'Effort", direccion: "Calle 24 Nº 2855 (entre calles 57 y 59)" }
    ],
    "Olavarría": [
      { nombre: "L'Effort", direccion: "Ruta 226 - km 285" }
    ],
    "Pergamino": [
      { nombre: "Rodano", direccion: "Ruta 8 Km 222,82" }
    ],
    "Pilar": [
      { nombre: "Tours", direccion: "Ruta Panamericana Km 46,8 Acceso Pilar" }
    ],
    "San Nicolás": [
      { nombre: "Granville", direccion: "Av. Presidente Perón 985" }
    ],
    "Tandil": [
      { nombre: "L'Effort", direccion: "Av. Comandante Espora 1284" }
    ],
    "Trenque Lauquen": [
      { nombre: "Lens", direccion: "García Salinas 1278" }
    ],
    "Viedma": [
      { nombre: "Corcel", direccion: "Zatti 459" }
    ],
    "Zárate": [
      { nombre: "Robayna", direccion: "Lavalle 1655" }
    ]
  },
  "Gran Buenos Aires": {
    "Castelar": [
      { nombre: "Damville", direccion: "Av. E. Zeballos 2105 esquina La Cautiva" }
    ],
    "Ciudadela": [
      { nombre: "Automobiles Lyon", direccion: "Av. Rivadavia 12048 (solo chapa y pintura)" }
    ],
    "Florida": [
      { nombre: "Avec Buenos Aires", direccion: "Av. Mitre 1664" }
    ],
    "Ituzaingó": [
      { nombre: "Ci'Dane", direccion: "Av. Presidente Perón 8975" }
    ],
    "Lanús Oeste": [
      { nombre: "Damville", direccion: "Chaco 347" }
    ],
    "Lomas de Zamora": [
      { nombre: "Damville", direccion: "Av. Hipólito Yrigoyen 8563" }
    ],
    "Martínez": [
      { nombre: "Chambord", direccion: "Av. Santa Fe 2458" }
    ],
    "Quilmes": [
      { nombre: "Nave Motors", direccion: "Hipólito Yrigoyen 290" },
      { nombre: "Nave Motors", direccion: "Hipólito Yrigoyen 277" }
    ],
    "Ramos Mejía": [
      { nombre: "Automobiles Lyon", direccion: "Av. Rivadavia 13.202" }
    ],
    "San Miguel": [
      { nombre: "SVA S.A.C.I.F.I.", direccion: "Av. Doctor Ricardo Balbín 644" }
    ],
    "Vicente López": [
      { nombre: "SVA S.A.C.I.F.I.", direccion: "Av. Libertador 1875" }
    ]
  },
  "Catamarca": {
    "San Fernando del Valle de Catamarca": [
      { nombre: "Essor", direccion: "San Martin 1049" }
    ]
  },
  "Chaco": {
    "Resistencia": [
      { nombre: "Rouge", direccion: "Av. 25 de Mayo 1113" }
    ]
  },
  "Chubut": {
    "Puerto Madryn": [
      { nombre: "Granville", direccion: "Belgrano 198" }
    ],
    "Trelew": [
      { nombre: "Granville", direccion: "J. A. Roca 941" }
    ]
  },
  "Córdoba": {
    "Córdoba": [
      { nombre: "Avec Córdoba", direccion: "Av. Colón 4800 esquina 9 de Julio" },
      { nombre: "Familia Parra", direccion: "Avenida Castro Barros 1125" }
    ],
    "Río Cuarto": [
      { nombre: "S. Gioda", direccion: "Ruta A005 Colectora Oeste y Perez Bulnes" }
    ],
    "Río Tercero": [
      { nombre: "S. Gioda", direccion: "Av. Savio 325" }
    ],
    "San Francisco": [
      { nombre: "Familia Parra", direccion: "Av. Urquiza 349" }
    ],
    "Villa María": [
      { nombre: "Le Parc", direccion: "Ruta 9 km 554 s/n" },
      { nombre: "Servicio Ledesma", direccion: "Av. Pres. Juan Domingo Perón 1373" }
    ]
  },
  "Corrientes": {
    "Corrientes": [
      { nombre: "Rouge", direccion: "Av. Independencia 5402" }
    ]
  },
  "Entre Ríos": {
    "Concordia": [
      { nombre: "La Concorde", direccion: "Urdinarrain 322" }
    ],
    "Gualeguaychú": [
      { nombre: "Gerli", direccion: "Doello Jurado 672" },
      { nombre: "Ves Hnos", direccion: "Boulevard Artigas 1704" }
    ],
    "Paraná": [
      { nombre: "Nation", direccion: "Almafuerte 641/3" }
    ]
  },
  "Formosa": {
    "Formosa": [
      { nombre: "Le Rocher S.A.", direccion: "Av. Gutnisky 1902" }
    ]
  },
  "Jujuy": {
    "San Salvador de Jujuy": [
      { nombre: "Autociel", direccion: "Calle Colectora Ruta 9 Nº 2227, Acceso Sur Las Lomas" }
    ]
  },
  "La Pampa": {
    "General Pico": [
      { nombre: "Vernon", direccion: "Calle 9 Oeste n° 855" }
    ],
    "Santa Rosa": [
      { nombre: "Vernon", direccion: "Fiorucci 22" }
    ]
  },
  "La Rioja": {
    "La Rioja": [
      { nombre: "Andina", direccion: "Av. Juan Manuel de Rosas 1274 - Parque Industrial" }
    ]
  },
  "Mendoza": {
    "Godoy Cruz": [
      { nombre: "Sur France", direccion: "Victor Hugo 187" },
      { nombre: "Sur France", direccion: "Derqui 58" }
    ],
    "San Rafael": [
      { nombre: "Roma", direccion: "Cordoba 55" }
    ]
  },
  "Misiones": {
    "Posadas": [
      { nombre: "Seewald", direccion: "Av. Rep. Oriental del Uruguay 3915" }
    ]
  },
  "Neuquén": {
    "Neuquén": [
      { nombre: "Pire Rayen", direccion: "Lisandro de la Torre 460" }
    ]
  },
  "Río Negro": {
    "Bariloche": [
      { nombre: "Marcelo Sagaría", direccion: "Remedios de Escalada 274" }
    ],
    "Cipolletti": [
      { nombre: "Armorique", direccion: "Colectora Fortín 1º Division 431, Ruta 22 Km 1215" }
    ],
    "General Roca": [
      { nombre: "Reims", direccion: "Av. San Juan 422" }
    ]
  },
  "Salta": {
    "Salta": [
      { nombre: "Eurodycar", direccion: "Av. Paraguay 2552" }
    ]
  },
  "San Juan": {
    "San Juan": [
      { nombre: "Lorenzo", direccion: "Lateral de Circunvalación Sur-Este 1575" }
    ]
  },
  "San Luis": {
    "San Luis": [
      { nombre: "Paris Autos", direccion: "Sarmiento 420" }
    ]
  },
  "Santa Cruz": {
    "Río Gallegos": [
      { nombre: "Harasic", direccion: "Angel Vicente Peñaloza 3620" }
    ]
  },
  "Santa Fé": {
    "Rafaela": [
      { nombre: "Nation", direccion: "Suipacha 70" }
    ],
    "Rosario": [
      { nombre: "Aut. J. Pesado Castro", direccion: "Av. Luis Cándido Carballo 927" },
      { nombre: "Marseille", direccion: "Av. Ovidio Lagos 740" },
      { nombre: "Marseille", direccion: "San Martín 2128 (solo chapa y pintura)" }
    ],
    "Santa Fe": [
      { nombre: "Nation", direccion: "Belgrano 2601 y Av. Allen" }
    ],
    "Venado Tuerto": [
      { nombre: "Autosur", direccion: "12 de Octubre 1264" }
    ]
  },
  "Santiago del Estero": {
    "Santiago del Estero": [
      { nombre: "Versalles", direccion: "Av. Belgrano Sur 1409" }
    ]
  },
  "Tierra del Fuego": {
    "Río Grande": [
      { nombre: "Turenne", direccion: "General Manuel Belgrano 16" }
    ],
    "Ushuaia": [
      { nombre: "Turenne", direccion: "Heroes de Malvinas 3649" }
    ]
  },
  "Tucumán": {
    "San Miguel de Tucumán": [
      { nombre: "Fortunato Fortino", direccion: "Av. Nestor Kirchner 2599 esquina Constitución" }
    ]
  }
};

const PROVINCIAS = Object.keys(CONCESIONARIOS).sort();
