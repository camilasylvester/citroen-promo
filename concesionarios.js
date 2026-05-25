const CONCESIONARIOS = {
  "CABA": {
    "Balvanera": [
      { nombre: "Giama", direccion: "Adolfo Alsina 2369" }
    ],
    "Coghlan": [
      { nombre: "Autodrive", direccion: "Av. Ricardo Balbin 2841" }
    ],
    "Flores": [
      { nombre: "Auto Novo", direccion: "Av. Rivadavia 7855" }
    ],
    "Monte Castro": [
      { nombre: "Auto Novo", direccion: "Marcos Sastre 4420" }
    ],
    "Nuñez": [
      { nombre: "Autogenerali", direccion: "Av. Cabildo 4402" }
    ],
    "Paternal": [
      { nombre: "Taraborelli Automobile S.A.", direccion: "Av. San Martín 3080" }
    ],
    "Villa Urquiza": [
      { nombre: "Autogenerali", direccion: "Juramento 4740" }
    ]
  },
  "Buenos Aires": {
    "9 de Julio": [
      { nombre: "Auto del Sol", direccion: "Av. San Martín 1557" }
    ],
    "Bahía Blanca": [
      { nombre: "Bahía Automotores", direccion: "Misiones 52" }
    ],
    "Berazategui": [
      { nombre: "Autos Zanet", direccion: "Av. Mitre 1880" }
    ],
    "Brandsen": [
      { nombre: "Lego Pourtau", direccion: "Rawson y Colectora Ruta 215" }
    ],
    "Castelar": [
      { nombre: "Auto Novo", direccion: "Av. E. Zeballos 3147" }
    ],
    "Coronel Suarez": [
      { nombre: "Cardys", direccion: "Av. Casey 850" }
    ],
    "Don Torcuato": [
      { nombre: "Venezia Auto", direccion: "Quintanilla 1480" }
    ],
    "Florida": [
      { nombre: "Auto del Sol", direccion: "Av. Bartolomé Mitre 1351" }
    ],
    "Junín": [
      { nombre: "Lego Pourtau", direccion: "Comandante Cuitiño 27" }
    ],
    "La Plata": [
      { nombre: "Lego Pourtau", direccion: "Av. 13 esquina 524" },
      { nombre: "Peara", direccion: "Av. 149 y 39" }
    ],
    "Lobos": [
      { nombre: "Blois", direccion: "Salgado Oeste 235" },
      { nombre: "Blois", direccion: "Ruta 205, km 97.5" }
    ],
    "Lomas de Zamora": [
      { nombre: "Autos Zanet", direccion: "Hipólito Yrigoyen 8569" }
    ],
    "Luján": [
      { nombre: "Lyon", direccion: "Av. Pellegrini 943" }
    ],
    "Mar del Plata": [
      { nombre: "Giama", direccion: "Av. Champagnat 2745" }
    ],
    "Necochea": [
      { nombre: "Aliva", direccion: "Av. 59 1045" }
    ],
    "Olavarría": [
      { nombre: "Bahía Automotores", direccion: "Ruta 226 KM 295" }
    ],
    "Pergamino": [
      { nombre: "Montanari", direccion: "Av. Presidente Arturo Illia 1658" }
    ],
    "Pilar": [
      { nombre: "Pilar", direccion: "Ruta Panamericana Km 52" }
    ],
    "Pinamar": [
      { nombre: "Giama", direccion: "Ruta 11 Km 397" }
    ],
    "Quilmes": [
      { nombre: "Autos Zanet", direccion: "Hipólito Yrigoyen 801" }
    ],
    "Ramos Mejía": [
      { nombre: "Auto Novo", direccion: "Av. Rivadavia 13026" }
    ],
    "San Fernando": [
      { nombre: "Autofrance", direccion: "Av. Perón 2827" }
    ],
    "San Justo": [
      { nombre: "Rotter", direccion: "Monseñor Bufano 3250" }
    ],
    "San Martín": [
      { nombre: "Rotter", direccion: "Av. Ricardo Balbin 1970" }
    ],
    "San Miguel": [
      { nombre: "Taraborelli Automobile S.A.", direccion: "Gaspar Campos 3219" }
    ],
    "San Nicolás": [
      { nombre: "Auto Veneto S.A.", direccion: "Pte Peron 2092" }
    ],
    "Sarandí": [
      { nombre: "Verona Automóviles S.A.", direccion: "Av. Mitre 3945" }
    ],
    "Tandil": [
      { nombre: "Bahía Automotores", direccion: "Av. España 650" }
    ],
    "Tortuguitas": [
      { nombre: "Stampa Automotores", direccion: "Ruta Panamericana Km. 35.5" }
    ],
    "Tres Arroyos": [
      { nombre: "Aliva", direccion: "Av. Belgrano 369" }
    ],
    "Trenque Lauquen": [
      { nombre: "Cardys", direccion: "Av. García Salinas 2196" }
    ],
    "Zárate": [
      { nombre: "Ital Rouen", direccion: "Av. Lavalle 1650" }
    ]
  },
  "Catamarca": {
    "Catamarca": [
      { nombre: "Ledian", direccion: "Av. Gral. Belgrano 1600 esq. Juan Bellavia" }
    ]
  },
  "Chubut": {
    "Comodoro Rivadavia": [
      { nombre: "Autoterra", direccion: "Eustaquio Molina 3035" }
    ],
    "Puerto Madryn": [
      { nombre: "Fiorasi", direccion: "Fontana 116" }
    ],
    "Trelew": [
      { nombre: "Fiorasi", direccion: "Av. Eva Peron 2020" }
    ]
  },
  "Córdoba": {
    "Córdoba": [
      { nombre: "Montironi", direccion: "Monseñor Pablo Cabrera 4935" },
      { nombre: "Motcor", direccion: "Av. Santa Ana 6569" },
      { nombre: "Turin", direccion: "Av. Fuerza Aerea Argentina 3808" }
    ],
    "Jesús María": [
      { nombre: "Montironi", direccion: "Pedro J. Frias 175" }
    ],
    "Río Cuarto": [
      { nombre: "Motcor", direccion: "Ruta 5 y Pte. Perón (O.)" }
    ],
    "Río Tercero": [
      { nombre: "Azzurra", direccion: "Av. Gral. Savio 1350" }
    ],
    "San Francisco": [
      { nombre: "Turin", direccion: "Av. Urquiza 1041" }
    ],
    "Villa María": [
      { nombre: "Motcor", direccion: "Av. Presidente Peron 1500" }
    ]
  },
  "Corrientes": {
    "Corrientes": [
      { nombre: "Scuderia S.A.", direccion: "Ruta 5 Km 5741" }
    ]
  },
  "Entre Ríos": {
    "Chajarí": [
      { nombre: "Full Car", direccion: "Av. 9 de Julio 2435" }
    ],
    "Concordia": [
      { nombre: "Full Car", direccion: "Av. Eva Perón 2508" }
    ],
    "Gualeguaychú": [
      { nombre: "Romani", direccion: "3 de caballeria 426" }
    ],
    "Paraná": [
      { nombre: "Valmotors", direccion: "Calle Almafuerte 807 / 811" }
    ]
  },
  "Formosa": {
    "Formosa": [
      { nombre: "ZL Auto", direccion: "Sarmiento 645" }
    ]
  },
  "Jujuy": {
    "San Salvador de Jujuy": [
      { nombre: "Fadua", direccion: "Ruta Nacional 9 Colectora 1007" }
    ]
  },
  "La Pampa": {
    "General Pico": [
      { nombre: "Genova Automotores", direccion: "Calle 9 nro. 863 (Oeste)" }
    ],
    "Santa Rosa": [
      { nombre: "Genova Automotores", direccion: "Av. P. Luro 1795" }
    ]
  },
  "La Rioja": {
    "La Rioja": [
      { nombre: "Euronoa", direccion: "Av. Ortiz de Ocampo 1590" }
    ]
  },
  "Mendoza": {
    "Guaymallén": [
      { nombre: "Denver", direccion: "Av. 25 de Mayo 5555" },
      { nombre: "Lorenzo Automotores", direccion: "Bandera de los Andes 1531" }
    ],
    "San Martín": [
      { nombre: "Denver", direccion: "Alem 601" }
    ],
    "San Rafael": [
      { nombre: "Lorenzo Automotores", direccion: "Av. Mitre 575 / 585 / 589" }
    ]
  },
  "Misiones": {
    "Posadas": [
      { nombre: "Seewald Auto", direccion: "Av. Bustamante 2914" }
    ]
  },
  "Neuquén": {
    "Neuquén": [
      { nombre: "Pire Rayen Automotores", direccion: "Gdor. Emilio Belenguer 2475" }
    ]
  },
  "Río Negro": {
    "Bariloche": [
      { nombre: "Taraborelli Automobile S.A.", direccion: "Vice Almirante O'Connor N°1018" }
    ],
    "Viedma": [
      { nombre: "Bahía Automotores", direccion: "Artémides Zatti 459" }
    ]
  },
  "Salta": {
    "Salta": [
      { nombre: "Fadua", direccion: "Av. Palacios 2650" }
    ]
  },
  "San Juan": {
    "San Juan": [
      { nombre: "Itala", direccion: "Av. Circunvalación 281" }
    ]
  },
  "San Luis": {
    "San Luis": [
      { nombre: "Parra e Hijos", direccion: "Avenida España 1099" },
      { nombre: "Parra e Hijos", direccion: "Av. Ejército de Los Andes 1228" }
    ],
    "Villa Mercedes": [
      { nombre: "Parra e Hijos", direccion: "25 de Mayo 100" }
    ]
  },
  "Santa Cruz": {
    "Río Gallegos": [
      { nombre: "Centenario", direccion: "Avenida Gregores y Beccar" }
    ]
  },
  "Santa Fé": {
    "Firmat": [
      { nombre: "Mendez Automotores", direccion: "Sarmiento 1344" }
    ],
    "Rafaela": [
      { nombre: "Valmotors", direccion: "Conscripto Zurbriggen 667 – Ruta 34 Km 222" }
    ],
    "Reconquista": [
      { nombre: "Taller Trosch Autos", direccion: "Hipólito Irigoyen 762" }
    ],
    "Rosario": [
      { nombre: "Avec", direccion: "Necochea 2601" },
      { nombre: "Seprio", direccion: "Liniers 670" }
    ],
    "Santa Fé": [
      { nombre: "Valmotors", direccion: "San Luis 3102" }
    ],
    "Venado Tuerto": [
      { nombre: "Mendez Automotores", direccion: "Bv. 12 de octubre 950" }
    ]
  },
  "Santiago del Estero": {
    "Santiago del Estero": [
      { nombre: "Novara Automotores", direccion: "Av. Belgrano Sud 1758 /1764" }
    ]
  },
  "Tierra del Fuego": {
    "Río Grande": [
      { nombre: "LASAC", direccion: "Av. General Don José de San Martín 2599" }
    ],
    "Ushuaia": [
      { nombre: "LASAC", direccion: "Av. Piedrabuena 256" }
    ]
  },
  "Tucumán": {
    "Concepción de Tucumán": [
      { nombre: "Fadua", direccion: "Stewart Shipton 1585" }
    ],
    "San Miguel de Tucumán": [
      { nombre: "Piazza", direccion: "Don Bosco 2519/2525" },
      { nombre: "Piazza", direccion: "Don Bosco 2537" }
    ]
  }
};

const PROVINCIAS = Object.keys(CONCESIONARIOS).sort();
